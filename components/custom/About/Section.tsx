import { cn } from "@/lib/utils";

const Section = ({ title, desc, children, variant = "default" }: { title: string; desc?: string, children: React.ReactNode; variant?: "default" | "grid" }) => (
    <section
        className={cn(
            "section-animate mb-12 rounded-xl bg-white dark:bg-black p-6 shadow-md border border-zinc-200 dark:border-zinc-800",
            "transition-all duration-300 hover:shadow-lg",
            variant === "grid" && "grid grid-cols-1 md:grid-cols-2 gap-8",

        )}
    >
        <div className="mb-4">
        <h2 className="text-3xl font-semibold text-black dark:text-white ">{title}</h2>
        {desc && <p className="text-base lg:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
            {desc}
        </p>}
        </div>
        <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed pt-6 border-t border-zinc-200 dark:border-zinc-700">{children}</div>
    </section>
);

export default Section