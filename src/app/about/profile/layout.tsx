export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="px-64 mt-14">
        <div>
          <h1 className="text-xl">Profile Page</h1>
          {children}
        </div>
      </div>
    </>
  );
}
