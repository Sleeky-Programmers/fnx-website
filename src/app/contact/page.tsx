import ContactPage from "@/features/contact-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact | West53 Capital',
  description: 'Get in touch with us at West53 Capital. We are here to assist you with your inquiries and provide the support you need.',
  keywords: 'contact, west53 capital, inquiries, support',
};

export default function ValuesPage() {
  return (
    <main className="min-h-screen">
     <ContactPage />
    </main>
  );
}