import Link from "next/link";

export default function MyNavbar() {
  return (
    <div className="flex bg-slate-900 text-slate-300 py-5 justify-around">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold tracking-widest text-slate-50 underline decoration-sky-300">
          LandKreateGg
        </h1>
      </Link>
      <ul className="flex lg:gap-8 gap-3 text-lg mt-1">
        <Link href="/">
          <li className="font-semibold">Home</li>
        </Link>
        <Link href="/about/">
          <li className="font-semibold">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="font-semibold">Profile</li>
        </Link>
      </ul>
    </div>
  );
}
