"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=44670341r",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Revalidate Failed!");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success✨");
      }
    }
  };
  return (
    <div className="container mx-auto mt-6">
      <div className="ml-16 p-2">
        <h1 className="text-2xl font-semibold mb-2">Admin Product Page</h1>
      </div>
      <div className="ml-16 p-2">
        <p className="font-bold mb-2 text-blue-500">Status = {status}</p>
        <Button onClick={() => revalidate()}>Revalidate Product</Button>
      </div>
    </div>
  );
}
