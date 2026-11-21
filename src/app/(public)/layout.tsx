import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/layout/InquiryModal";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-cream">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <InquiryModal />
    </div>
  );
}
