export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-1/5 p-4 fixed top-[136px] bg-red-500">
        <p>Hello there</p>
      </div>

      <div className="ml-auto p-4 w-4/5">{children}</div>
    </>
  );
}
