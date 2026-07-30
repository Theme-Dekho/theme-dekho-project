import Link from "next/link";

interface CategoryBreadcrumbProps {
  categoryName: string;
}

export default function CategoryBreadcrumb({
  categoryName,
}: CategoryBreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="inner">
        <Link href="/">Home</Link>

        <span className="sep" aria-hidden="true">
          /
        </span>

        <span className="cur" aria-current="page">
          {categoryName}
        </span>
      </div>
    </nav>
  );
}