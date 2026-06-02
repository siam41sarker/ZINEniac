import { useState } from "react";
import { z } from "zod";
import { Shield, CheckCircle2 } from "lucide-react";
import MainNavbar from "@/components/MainNavbar";
import MainFooter from "@/components/MainFooter";

const requestSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  confirmEmail: z.string().trim().email("Please re-enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  addressLine1: z.string().trim().max(200).optional().or(z.literal("")),
  addressLine2: z.string().trim().max(200).optional().or(z.literal("")),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  state: z.string().trim().max(50).optional().or(z.literal("")),
  zip: z.string().trim().max(20).optional().or(z.literal("")),
  country: z.string().trim().max(100).optional().or(z.literal("")),
  dob: z.string().optional().or(z.literal("")),
  relationship: z.enum(["self", "parent_guardian", "authorized_agent", "other"]),
  agentName: z.string().trim().max(150).optional().or(z.literal("")),
  requestTypes: z.array(z.string()).min(1, "Please select at least one request type"),
  identifiers: z.string().trim().max(2000).optional().or(z.literal("")),
  reason: z.string().trim().max(2000).optional().or(z.literal("")),
  preferredContact: z.enum(["email", "phone", "mail"]),
  verifyIdentity: z.literal(true, {
    errorMap: () => ({ message: "You must consent to identity verification." }),
  }),
  signature: z.string().trim().min(2, "Signature is required").max(150),
  signatureDate: z.string().min(1, "Date is required"),
}).refine((d) => d.email === d.confirmEmail, {
  message: "Email addresses do not match",
  path: ["confirmEmail"],
});

type RequestType = z.infer<typeof requestSchema>;

const requestOptions = [
  { id: "opt_out_sharing", label: "Opt out of information sharing with third parties" },
  { id: "delete_data", label: "Delete my personal information from your records" },
  { id: "access_data", label: "Provide a copy of personal information you hold about me" },
  { id: "correct_data", label: "Correct inaccurate personal information" },
  { id: "limit_processing", label: "Limit the use or processing of my data" },
  { id: "marketing_unsubscribe", label: "Unsubscribe from all marketing communications" },
];

const PrivacyRequest = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    dob: "",
    relationship: "self" as RequestType["relationship"],
    agentName: "",
    requestTypes: [] as string[],
    identifiers: "",
    reason: "",
    preferredContact: "email" as RequestType["preferredContact"],
    verifyIdentity: false,
    signature: "",
    signatureDate: "",
  });

  const toggleType = (id: string) => {
    setForm((f) => ({
      ...f,
      requestTypes: f.requestTypes.includes(id)
        ? f.requestTypes.filter((x) => x !== id)
        : [...f.requestTypes, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = requestSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    const subject = encodeURIComponent("Privacy Information Removal Request");
    const labels = form.requestTypes
      .map((id) => requestOptions.find((o) => o.id === id)?.label)
      .filter(Boolean)
      .join("; ");
    const body = encodeURIComponent(
      `PRIVACY INFORMATION REMOVAL REQUEST\n\n` +
        `Name: ${form.firstName} ${form.lastName}\n` +
        `Email: ${form.email}\nPhone: ${form.phone}\n` +
        `Address: ${form.addressLine1} ${form.addressLine2}\n${form.city}, ${form.state} ${form.zip} ${form.country}\n` +
        `DOB: ${form.dob}\nRelationship: ${form.relationship}\nAuthorized Agent: ${form.agentName}\n\n` +
        `Request Types: ${labels}\n\n` +
        `Additional Identifiers: ${form.identifiers}\nReason: ${form.reason}\n\n` +
        `Preferred Contact: ${form.preferredContact}\nIdentity Verification Consent: Yes\n` +
        `Signature: ${form.signature}\nDate: ${form.signatureDate}`
    );
    window.location.href = `mailto:ZINEniac@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputCls =
    "w-full bg-background border border-border px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-primary";
  const labelCls = "block text-sm font-semibold text-foreground mb-1.5";
  const errCls = "text-xs text-destructive mt-1";

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-primary" size={32} />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Privacy Information Removal Request
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Use this secure form to request access to, correction of, deletion of, or restriction on the use
            of your personal information held by ZINEniac. We will respond within 30 days as required by
            applicable law. All fields marked with <span className="text-destructive">*</span> are required.
          </p>

          {submitted ? (
            <div className="bg-card border border-border rounded-2xl p-10 text-center">
              <CheckCircle2 size={56} className="text-accent mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Request Submitted</h2>
              <p className="text-muted-foreground">
                Thank you. Your privacy request has been queued in your email client. Our team will verify your
                identity and respond within 30 days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-8 shadow-sm"
            >
              {/* Identity */}
              <fieldset className="space-y-4">
                <legend className="text-lg font-bold text-foreground">1. Your Identity</legend>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>First Name <span className="text-destructive">*</span></label>
                    <input className={inputCls} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                    {errors.firstName && <p className={errCls}>{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Last Name <span className="text-destructive">*</span></label>
                    <input className={inputCls} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                    {errors.lastName && <p className={errCls}>{errors.lastName}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Email Address <span className="text-destructive">*</span></label>
                    <input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    {errors.email && <p className={errCls}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Confirm Email <span className="text-destructive">*</span></label>
                    <input type="email" className={inputCls} value={form.confirmEmail} onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })} />
                    {errors.confirmEmail && <p className={errCls}>{errors.confirmEmail}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Phone Number</label>
                    <input type="tel" className={inputCls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>Date of Birth</label>
                    <input type="date" className={inputCls} value={form.dob} onChange={(e) => setForm({ ...form, dob: e.target.value })} />
                  </div>
                </div>
              </fieldset>

              {/* Address */}
              <fieldset className="space-y-4">
                <legend className="text-lg font-bold text-foreground">2. Mailing Address</legend>
                <div>
                  <label className={labelCls}>Address Line 1</label>
                  <input className={inputCls} value={form.addressLine1} onChange={(e) => setForm({ ...form, addressLine1: e.target.value })} />
                </div>
                <div>
                  <label className={labelCls}>Address Line 2</label>
                  <input className={inputCls} value={form.addressLine2} onChange={(e) => setForm({ ...form, addressLine2: e.target.value })} />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className={labelCls}>City</label>
                    <input className={inputCls} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>State / Province</label>
                    <input className={inputCls} value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
                  </div>
                  <div>
                    <label className={labelCls}>ZIP / Postal Code</label>
                    <input className={inputCls} value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Country</label>
                  <input className={inputCls} value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
                </div>
              </fieldset>

              {/* Relationship */}
              <fieldset className="space-y-4">
                <legend className="text-lg font-bold text-foreground">3. Requestor Relationship</legend>
                <div>
                  <label className={labelCls}>I am submitting this request as: <span className="text-destructive">*</span></label>
                  <select
                    className={inputCls}
                    value={form.relationship}
                    onChange={(e) => setForm({ ...form, relationship: e.target.value as RequestType["relationship"] })}
                  >
                    <option value="self">The individual whose information is the subject of this request</option>
                    <option value="parent_guardian">Parent or legal guardian of a minor</option>
                    <option value="authorized_agent">Authorized agent acting on behalf of an individual</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {(form.relationship === "authorized_agent" || form.relationship === "parent_guardian") && (
                  <div>
                    <label className={labelCls}>Name of Individual You Represent</label>
                    <input className={inputCls} value={form.agentName} onChange={(e) => setForm({ ...form, agentName: e.target.value })} />
                  </div>
                )}
              </fieldset>

              {/* Request Types */}
              <fieldset className="space-y-4">
                <legend className="text-lg font-bold text-foreground">
                  4. Type of Request <span className="text-destructive">*</span>
                </legend>
                <div className="space-y-2">
                  {requestOptions.map((opt) => (
                    <label key={opt.id} className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/40 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.requestTypes.includes(opt.id)}
                        onChange={() => toggleType(opt.id)}
                        className="mt-1"
                      />
                      <span className="text-sm text-foreground">{opt.label}</span>
                    </label>
                  ))}
                </div>
                {errors.requestTypes && <p className={errCls}>{errors.requestTypes}</p>}
              </fieldset>

              {/* Additional details */}
              <fieldset className="space-y-4">
                <legend className="text-lg font-bold text-foreground">5. Additional Information</legend>
                <div>
                  <label className={labelCls}>
                    Account identifiers (program names, prior emails, account IDs that may help us locate your records)
                  </label>
                  <textarea
                    rows={3}
                    maxLength={2000}
                    className={inputCls}
                    value={form.identifiers}
                    onChange={(e) => setForm({ ...form, identifiers: e.target.value })}
                  />
                </div>
                <div>
                  <label className={labelCls}>Reason for request (optional)</label>
                  <textarea
                    rows={3}
                    maxLength={2000}
                    className={inputCls}
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  />
                </div>
                <div>
                  <label className={labelCls}>Preferred response method <span className="text-destructive">*</span></label>
                  <select
                    className={inputCls}
                    value={form.preferredContact}
                    onChange={(e) => setForm({ ...form, preferredContact: e.target.value as RequestType["preferredContact"] })}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="mail">Postal Mail</option>
                  </select>
                </div>
              </fieldset>

              {/* Verification & signature */}
              <fieldset className="space-y-4">
                <legend className="text-lg font-bold text-foreground">6. Verification & Signature</legend>
                <label className="flex items-start gap-3 p-3 rounded-lg border border-border">
                  <input
                    type="checkbox"
                    checked={form.verifyIdentity}
                    onChange={(e) => setForm({ ...form, verifyIdentity: e.target.checked })}
                    className="mt-1"
                  />
                  <span className="text-sm text-foreground">
                    I understand that ZINEniac may request additional information to verify my identity before
                    processing this request, and I certify that the information provided is true and accurate to
                    the best of my knowledge. <span className="text-destructive">*</span>
                  </span>
                </label>
                {errors.verifyIdentity && <p className={errCls}>{errors.verifyIdentity}</p>}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Electronic Signature (full name) <span className="text-destructive">*</span></label>
                    <input className={inputCls} value={form.signature} onChange={(e) => setForm({ ...form, signature: e.target.value })} />
                    {errors.signature && <p className={errCls}>{errors.signature}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Date <span className="text-destructive">*</span></label>
                    <input type="date" className={inputCls} value={form.signatureDate} onChange={(e) => setForm({ ...form, signatureDate: e.target.value })} />
                    {errors.signatureDate && <p className={errCls}>{errors.signatureDate}</p>}
                  </div>
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Submit Privacy Request
              </button>
              <p className="text-xs text-muted-foreground text-center">
                We will respond to verified requests within 30 days, in accordance with applicable privacy laws.
              </p>
            </form>
          )}
        </div>
      </main>
      <MainFooter />
    </div>
  );
};

export default PrivacyRequest;
