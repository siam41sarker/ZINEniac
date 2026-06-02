import { createContext, useContext, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock, Lock } from "lucide-react";

interface ComingSoonContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  pageLabel: string;
  trigger: (label: string) => void;
}

const ComingSoonContext = createContext<ComingSoonContextValue>({
  open: false,
  setOpen: () => {},
  pageLabel: "",
  trigger: () => {},
});

export const useComingSoon = () => useContext(ComingSoonContext);

export const ComingSoonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [pageLabel, setPageLabel] = useState("");

  const trigger = useCallback((label: string) => {
    setPageLabel(label);
    setOpen(true);
  }, []);

  return (
    <ComingSoonContext.Provider value={{ open, setOpen, pageLabel, trigger }}>
      {children}
      <ComingSoonModal />
    </ComingSoonContext.Provider>
  );
};

const ComingSoonModal = () => {
  const { open, setOpen, pageLabel } = useComingSoon();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden border-0 shadow-2xl bg-transparent [&>button]:text-white [&>button]:hover:opacity-100 [&>button]:opacity-70 [&>button]:z-20">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground p-8 text-center relative overflow-hidden rounded-lg">
          {/* Decorative blurred circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
              <Lock size={28} strokeWidth={2} />
            </div>

            <DialogHeader>
              <DialogTitle className="text-3xl font-black text-white mb-2 tracking-tight text-center">
                Coming Soon
              </DialogTitle>
            </DialogHeader>

            <p className="text-white/90 text-lg mb-1 font-semibold">
              {pageLabel || "This page"} is on its way.
            </p>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              We&apos;re putting the finishing touches on something amazing.
              Check back soon!
            </p>

            <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium bg-white/10 rounded-full py-2 px-5 inline-flex">
              <Clock size={16} />
              <span>Stay tuned for updates</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
