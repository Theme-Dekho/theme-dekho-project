import { subCategories } from "@/constants/section";
import { cn } from "@/lib/utils";

interface SubCategoryStripProps {
  category: "interior" | "healthcare" | "ecommerce" | null;
  activeSub: string;
  onSelectSub: (sub: string) => void;
}

/**
 * Sub-category pill row. Note: in the original page these pills only ever
 * toggle their own active state — there's no `data-subcat` markup on the
 * product cards for them to actually filter against, so selecting one here
 * is cosmetic, matching the source behavior exactly.
 */
export default function SubCategoryStrip({ category, activeSub, onSelectSub }: SubCategoryStripProps) {
  if (!category) return null;
  const subs = subCategories[category];
  if (!subs) return null;

  return (
    <div className="subcat-row">
      <div className="cat-inner">
        <span className="subcat-label">Sub Categories :</span>
        <div className="subcat-pills">
          {subs.map((sub) => (
            <button
              key={sub}
              className={cn("subcat-pill", activeSub === sub && "active")}
              onClick={() => onSelectSub(sub)}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
