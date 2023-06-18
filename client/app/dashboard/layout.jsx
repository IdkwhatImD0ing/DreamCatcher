import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="h-[calc(100vh-88px)]">{children}</main>
    </div>
  );
}
