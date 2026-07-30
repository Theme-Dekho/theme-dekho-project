export interface NavItem {
  id: number;
  title: string;
  href?: string;
  children?: NavItem[];
}