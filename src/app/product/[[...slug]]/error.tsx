"use client";

import { Button } from "@/components/ui/button";
import { ButtonIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto">
      <div className="px-16 mt-7">
        <h2 className="text-red-600 font-semibold text-2xl">
          Something went wrong!
        </h2>
        <p className="text-slate-600 italic tracking-wide">
          Please try again later, thankyou!
        </p>
      </div>
    </div>
  );
}
