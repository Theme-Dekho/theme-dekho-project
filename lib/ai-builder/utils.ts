export function normalizePhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.length > 10) digits = digits.slice(-10);
  return digits;
}

export function isValidPhone(raw: string) {
  return normalizePhone(raw).length === 10;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
