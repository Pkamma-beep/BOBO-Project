import { serviceCategories } from "@/lib/data";

type CategoryPillsProps = {
  activeSlug: string;
  onSelect: (slug: string) => void;
  className?: string;
};

export default function CategoryPills({
  activeSlug,
  onSelect,
  className,
}: CategoryPillsProps) {
  return (
    <div
      className={`flex gap-3 md:gap-4 md:flex-wrap md:justify-center overflow-x-auto no-scrollbar ${
        className ?? ""
      }`}
    >
      {serviceCategories.map((category) => {
        const active = category.slug === activeSlug;
        return (
          <button
            key={category.slug}
            type="button"
            onClick={() => onSelect(category.slug)}
            className={`shrink-0 px-6 py-2 md:px-8 md:py-3 border font-mono text-[10px] uppercase tracking-[0.2em] rounded-full transition-colors ${
              active
                ? "border-[#3d7068] bg-[#3d7068] text-white"
                : "border-[#e5e4de] hover:border-[#3d7068]"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
