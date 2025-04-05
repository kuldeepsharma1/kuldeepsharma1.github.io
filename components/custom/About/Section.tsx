import { cn } from "@/lib/utils";

const Section = ({ title, children, variant = "default" }: { title: string; children: React.ReactNode; variant?: "default" | "grid" | "timeline" }) => (
    <section
        className={cn(
            "section-animate mb-12 rounded-xl bg-white dark:bg-black p-6 shadow-md border border-gray-200 dark:border-gray-800",
            "transition-all duration-300 hover:shadow-lg",
            variant === "grid" && "grid grid-cols-1 md:grid-cols-2 gap-8",
            variant === "timeline" && "relative pl-6 border-l-2 border-gray-300 dark:border-gray-700"
        )}
    >
        <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">{title}</h2>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</div>
    </section>
);

export default Section