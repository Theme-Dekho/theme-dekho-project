export interface Template {
  id: number;
  title: string;
  category: string;
  image: string;
  demoUrl: string;
  price?: number;
  isPremium?: boolean;
}