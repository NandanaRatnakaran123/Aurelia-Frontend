import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return <h1 className="text-2xl font-semibold">My Account</h1>;
}
