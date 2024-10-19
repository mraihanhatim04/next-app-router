"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function MyNavbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex bg-slate-900 text-slate-300 py-5 justify-around">
      <div>
        <Link href={"/"}>
          <h1 className="text-2xl font-extrabold tracking-wide underline decoration-sky-50">
            <span className="text-3xl text-slate-100">Ray</span>
            <span className="text-sm">&</span>
            <span className="text-3xl text-blue-500">Land</span>
            <span className="text-sm ">.Gg</span>
          </h1>
        </Link>
      </div>
      <div>
        <ul className="flex lg:gap-6 gap-3 text-lg mt-2 text-white">
          <Link href="/">
            <li
              className={`${pathname === "/" && "text-sky-500 font-semibold"}`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${
                pathname === "/about" && "text-sky-500 font-semibold"
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`${
                pathname === "/about/profile" && "text-sky-500 font-semibold"
              }`}
            >
              Profile
            </li>
          </Link>
          <Link href="/product">
            <li
              className={`${
                pathname === "/product" && "text-sky-500 font-semibold"
              }`}
            >
              Product
            </li>
          </Link>
          <Link href="dashboard/product">
            <li
              className={`${
                pathname === "dashboard/product" && "text-sky-500 font-semibold"
              }`}
            >
              AdminProduct
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-2 text-sm font-semibold tracking-wide">
        <Button
          onClick={() => router.push("/login")}
          type="button"
          variant="default"
          className="bg-gradient-to-r mt-1 from-blue-500 via-blue-700 to-blue-800 text-white px-4 py-2 rounded-md"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
