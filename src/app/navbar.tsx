import Link from "next/link";

export default function MyNavbar() {
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
        <ul className="flex lg:gap-6 gap-3 text-lg mt-2">
          <Link href="/">
            <li className="font-semibold">Home</li>
          </Link>
          <Link href="/about/">
            <li className="font-semibold">About</li>
          </Link>
          <Link href="/about/profile">
            <li className="font-semibold">Profile</li>
          </Link>
          <Link href="/product">
            <li className="font-semibold">Product</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-2 text-sm font-semibold tracking-wide">
        <Link
          href="/login"
          className="bg-gradient-to-r mt-1 from-slate-200 via-slate-300 to-slate-400 text-black px-6 py-2 rounded-xl"
        >
          Sign In
        </Link>
        <Link
          href="/register"
          className="bg-gradient-to-r mt-1 from-sky-600 via-sky-700 to-sky-800 text-white px-6 py-2 rounded-xl"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
