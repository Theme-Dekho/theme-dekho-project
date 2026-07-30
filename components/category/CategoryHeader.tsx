import { SortOption, ViewMode } from "@/types/product";
import SortDropdown from "./filters/SortDropdown";

interface CategoryHeaderProps {
  shown: number;
  total: number;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

export default function CategoryHeader({
  shown,
  total,
  sortBy,
  onSortChange,
  view,
  onViewChange,
}: CategoryHeaderProps) {
  return (
    <div className="sort-bar">
      <div className="sort-info">
        Showing <strong>{shown}</strong> of <strong>{total}</strong> templates
      </div>
      <div className="sort-right">
        <SortDropdown value={sortBy} onChange={onSortChange} />
        <div className="view-btns">
          <div
            className={`vbtn${view === "grid" ? " active" : ""}`}
            onClick={() => onViewChange("grid")}
            title="Grid View"
          >
            ⊞
          </div>
          <div
            className={`vbtn${view === "list" ? " active" : ""}`}
            onClick={() => onViewChange("list")}
            title="List View"
          >
            ☰
          </div>
        </div>
      </div>
    </div>
  );
}
