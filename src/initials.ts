export const initials = (str: string) =>
  str
    .split(" ")
    .map((n) => n[0])
    .join(".");
