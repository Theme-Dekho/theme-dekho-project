interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="breadcrumb">
      <div className="inner">
        {items.map((item, i) => (
          <span key={item.label} style={{ display: "contents" }}>
            {item.href ? <a href={item.href}>{item.label}</a> : <span className="cur">{item.label}</span>}
            {i < items.length - 1 && <span className="sep">›</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
