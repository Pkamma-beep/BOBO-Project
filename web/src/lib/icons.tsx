import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Circle } from "lucide-react";

const IconMap = Icons as unknown as Record<string, LucideIcon>;

export function getIcon(name: string): LucideIcon {
  const key = name.replace(/^lucide:/, "");
  const pascal = key
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return IconMap[pascal] ?? Circle;
}
