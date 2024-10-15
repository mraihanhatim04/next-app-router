export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed left-0 py-2 px-4 z-10 h-screen w-48 bg-slate-900">
        <ul className="p-12 text-white font-semibold tracking-wider">
          <li className="mb-2">Home</li>
          <li className="mb-2">About</li>
          <li className="mb-2">Profile</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
