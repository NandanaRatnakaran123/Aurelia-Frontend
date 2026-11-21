import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// TODO: add client-side auth guard that redirects unauthenticated users to /login.
export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
