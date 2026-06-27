export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-24 pt-32">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
        Contact
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Let&apos;s build something.
      </h1>
      <p className="mt-5 text-lg opacity-70">
        Tell us about your project and we&apos;ll get back within a day.
      </p>

      <form className="mt-10 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" name="name" placeholder="Your name" />
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <Label>Message</Label>
          <textarea
            name="message"
            rows={5}
            placeholder="What are you building?"
            className="w-full rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-white/15 dark:bg-white/[0.03]"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500"
        >
          Send message
        </button>
      </form>

      <p className="mt-8 text-sm opacity-60">
        Or email us directly at{" "}
        <a
          href="mailto:hello@viramtech.com"
          className="font-semibold text-indigo-500 hover:underline"
        >
          hello@viramtech.com
        </a>
      </p>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-2 block text-sm font-semibold opacity-80">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3 outline-none transition focus:border-indigo-500 dark:border-white/15 dark:bg-white/[0.03]"
      />
    </div>
  );
}
