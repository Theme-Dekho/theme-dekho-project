/** Joins class names, skipping falsy values. Lightweight `clsx` replacement. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
