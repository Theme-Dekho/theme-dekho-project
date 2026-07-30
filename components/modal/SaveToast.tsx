"use client";

import { useSite } from "@/lib/site-context";
import { cn } from "@/lib/utils";

export default function SaveToast() {
  const { toastMessage } = useSite();

  return (
    <div className={cn("save-toast", toastMessage && "show")}>
      {toastMessage}
    </div>
  );
}
