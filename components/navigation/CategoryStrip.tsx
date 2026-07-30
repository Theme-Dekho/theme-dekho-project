import type { CategoryFilter } from "@/types/category";
import { categoryPills } from "@/constants/section";
import { cn } from "@/lib/utils";

interface CategoryStripProps {
  active: CategoryFilter;
  onSelect: (cat: CategoryFilter) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function CategoryStrip({ active, onSelect, searchTerm, onSearchChange }: CategoryStripProps) {
  return (
    <div className="cat-strip">
      <div className="cat-inner">
        <span className="cat-lbl">&#9654; Browse Our Work :</span>

        {categoryPills.map((pill) => (
          <button
            key={pill.label}
            className={cn("cat-pill", pill.soon && "soon", !pill.soon && active === pill.key && "active")}
            disabled={pill.soon}
            title={pill.soon ? "Coming soon" : undefined}
            onClick={() => !pill.soon && onSelect(pill.key)}
          >
            {pill.label}
            {pill.soon && <span className="soon-tag">Soon</span>}
          </button>
        ))}

        <div className="cat-search">
          <span className="cat-search-icon">&#9906;</span>
          <input
            className="cat-search-input"
            type="text"
            placeholder="Search designs..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
