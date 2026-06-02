import { useEffect, useRef, useState } from "react";
import { format, isSameDay, parseISO } from "date-fns";
import { CalendarIcon, MapPin, Clock, Plus, Pencil, Trash2, ImagePlus, Sparkles, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";

type EventRow = {
  id: string;
  title: string;
  event_date: string;
  time: string | null;
  location: string | null;
  description: string | null;
  details: string | null;
  image_url: string | null;
};

const emptyForm = {
  title: "",
  event_date: undefined as Date | undefined,
  time: "",
  location: "",
  description: "",
  details: "",
  image_url: "" as string,
};

const Events = () => {
  const { isAdmin, loading: adminLoading } = useIsAdmin();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<EventRow[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [viewEvent, setViewEvent] = useState<EventRow | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true });
    if (error) {
      console.error(error);
      return;
    }
    setEvents((data ?? []) as EventRow[]);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const toDate = (iso: string) => parseISO(iso + "T00:00:00");

  const eventsForSelectedDate = selectedDate
    ? events.filter((e) => isSameDay(toDate(e.event_date), selectedDate))
    : [];

  const eventDays = events.map((e) => toDate(e.event_date));

  const openCreate = () => {
    setEditingId(null);
    setForm({ ...emptyForm, event_date: selectedDate });
    setDialogOpen(true);
  };

  const openEdit = (row: EventRow) => {
    setEditingId(row.id);
    setForm({
      title: row.title,
      event_date: toDate(row.event_date),
      time: row.time ?? "",
      location: row.location ?? "",
      description: row.description ?? "",
      details: row.details ?? "",
      image_url: row.image_url ?? "",
    });
    setDialogOpen(true);
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from("event-images").upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });
    if (error) {
      toast.error(error.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from("event-images").getPublicUrl(path);
    setForm((f) => ({ ...f, image_url: data.publicUrl }));
    setUploading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.event_date) return;
    setSaving(true);
    const payload = {
      title: form.title.trim(),
      event_date: format(form.event_date, "yyyy-MM-dd"),
      time: form.time.trim() || null,
      location: form.location.trim() || null,
      description: form.description.trim() || null,
      details: form.details.trim() || null,
      image_url: form.image_url.trim() || null,
    };
    const { error } = editingId
      ? await supabase.from("events").update(payload).eq("id", editingId)
      : await supabase.from("events").insert(payload);
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(editingId ? "Event updated" : "Event created");
    setSelectedDate(form.event_date);
    setDialogOpen(false);
    setForm(emptyForm);
    setEditingId(null);
    fetchEvents();
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    const { error } = await supabase.from("events").delete().eq("id", deleteId);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Event deleted");
      fetchEvents();
    }
    setDeleteId(null);
  };

  const renderEventCard = (event: EventRow, showAdminControls: boolean) => (
    <article
      key={event.id}
      className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {event.image_url ? (
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={event.image_url}
            alt={event.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center">
          <CalendarIcon className="w-12 h-12 text-primary/40" />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground leading-tight">{event.title}</h3>
        <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="w-4 h-4 text-primary" />
            {format(toDate(event.event_date), "PPP")}
          </span>
          {event.time && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              {event.time}
            </span>
          )}
          {event.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              {event.location}
            </span>
          )}
        </div>
        {event.description && (
          <p className="text-foreground/80 mt-3 line-clamp-3 leading-relaxed">{event.description}</p>
        )}
        <div className="mt-auto pt-4 flex items-center justify-between gap-2 flex-wrap">
          <Button
            variant="ghost"
            onClick={() => setViewEvent(event)}
            className="px-0 h-auto text-primary hover:bg-transparent hover:text-primary group/btn font-semibold"
          >
            View more
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
          </Button>
          {showAdminControls && (
            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => openEdit(event)}
                className="gap-1.5"
              >
                <Pencil className="w-3.5 h-3.5" /> Update event
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDeleteId(event.id)}
                className="h-9 w-9 text-destructive hover:text-destructive hover:bg-destructive/10"
                aria-label="Delete event"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-10 md:pb-14 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-16">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 max-w-2xl">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
                Plan & Discover
              </p>
              <h1 className="text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
                Upcoming Events
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Explore upcoming experiences and activities curated for the ZINEniac community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin-only calendar management section */}
      {!adminLoading && isAdmin && (
        <section className="pb-14 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
              <div className="bg-card rounded-2xl shadow-xl border border-border p-4 md:p-6 mx-auto lg:sticky lg:top-24">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  modifiers={{ hasEvent: eventDays }}
                  modifiersClassNames={{
                    hasEvent:
                      "relative after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary",
                  }}
                  className={cn("p-3 pointer-events-auto")}
                />
              </div>

              <div className="flex flex-col rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
                <div className="bg-primary/5 border-b border-border px-6 py-5 md:px-8 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-primary font-semibold">
                      Manage events
                    </p>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground flex items-center gap-2 mt-1">
                      <CalendarIcon className="w-6 h-6 text-primary" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </h2>
                  </div>
                  <Button onClick={openCreate} className="gap-2 shadow-md">
                    <Plus className="w-4 h-4" /> Add Event
                  </Button>
                </div>

                {eventsForSelectedDate.length === 0 ? (
                  <div className="p-10 md:p-14 text-center">
                    <p className="text-muted-foreground">
                      No events for this day yet. Click "Add Event" to create one.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:p-8">
                    {eventsForSelectedDate.map((event) => renderEventCard(event, true))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Public dedicated section — visible to everyone */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> What's on
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <img src={logo} alt="ZINEniac Logo" className="h-10 md:h-14 w-auto object-contain" />
              <span>upcoming events</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
              Curated experiences hand-picked for our community.
            </p>
          </div>

          {events.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-14 text-center">
              <p className="text-muted-foreground">No events available yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => renderEventCard(event, !adminLoading && isAdmin))}
            </div>
          )}
        </div>
      </section>

      <Footer />

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[92vh] overflow-y-auto p-0">
          <div className="p-6 md:p-8 pb-0">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black">
                {editingId ? "Edit Event" : "New Event"}
              </DialogTitle>
            </DialogHeader>
          </div>
          <form onSubmit={handleSave} className="px-6 md:px-8 pb-6 md:pb-8 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left column — image */}
              <div className="space-y-2">
                <Label>Event Image</Label>
                {form.image_url ? (
                  <div className="relative rounded-lg overflow-hidden border border-border">
                    <img src={form.image_url} alt="Preview" className="w-full aspect-[4/3] object-cover" />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setForm({ ...form, image_url: "" })}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    disabled={uploading}
                    className="w-full aspect-[4/3] rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors flex flex-col items-center justify-center gap-2 text-muted-foreground"
                  >
                    <ImagePlus className="w-10 h-10" />
                    <span className="text-sm">{uploading ? "Uploading..." : "Click to upload image"}</span>
                  </button>
                )}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleImageUpload(f);
                    e.target.value = "";
                  }}
                />
              </div>

              {/* Right column — fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    required
                    maxLength={150}
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label>Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !form.event_date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {form.event_date ? format(form.event_date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={form.event_date}
                          onSelect={(d) => setForm({ ...form, event_date: d ?? undefined })}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      placeholder="e.g. 6:00 PM"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Short description</Label>
                  <Textarea
                    id="description"
                    rows={2}
                    placeholder="A brief teaser shown on the card"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Full-width details */}
            <div className="space-y-2 mt-6">
              <Label htmlFor="details">Detailed information</Label>
              <Textarea
                id="details"
                rows={5}
                placeholder="Full event details — agenda, speakers, what to bring, etc."
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
              />
            </div>

            <DialogFooter className="mt-6">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={saving || uploading || !form.title.trim() || !form.event_date}>
                {saving ? "Saving..." : editingId ? "Update" : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>


      <AlertDialog open={!!deleteId} onOpenChange={(o) => !o && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this event?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={!!viewEvent} onOpenChange={(o) => !o && setViewEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          {viewEvent && (
            <>
              {viewEvent.image_url ? (
                <div className="aspect-[16/9] overflow-hidden bg-muted rounded-t-lg">
                  <img
                    src={viewEvent.image_url}
                    alt={viewEvent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center rounded-t-lg">
                  <CalendarIcon className="w-16 h-16 text-primary/50" />
                </div>
              )}
              <div className="p-6 md:p-8 space-y-5">
                <DialogHeader className="space-y-3">
                  <DialogTitle className="text-2xl md:text-3xl font-black leading-tight pr-8">
                    {viewEvent.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground border-y border-border py-3">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    {format(toDate(viewEvent.event_date), "PPP")}
                  </span>
                  {viewEvent.time && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      {viewEvent.time}
                    </span>
                  )}
                  {viewEvent.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      {viewEvent.location}
                    </span>
                  )}
                </div>
                {viewEvent.description && (
                  <p className="text-base text-foreground/90 leading-relaxed font-medium">
                    {viewEvent.description}
                  </p>
                )}
                {viewEvent.details && (
                  <div className="prose prose-sm max-w-none">
                    <p className="text-foreground/80 whitespace-pre-line leading-relaxed">
                      {viewEvent.details}
                    </p>
                  </div>
                )}
                {!viewEvent.description && !viewEvent.details && (
                  <p className="text-muted-foreground italic">No additional details provided.</p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;
