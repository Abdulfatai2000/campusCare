import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowUpRight, MessageCircle, Lightbulb } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";
export const metadata: Metadata = {
  title: "Contact — help shape CampusCare",
  description:
    "Share feedback, ideas and questions about the independent CampusCare project. Prepare an email draft; this website does not submit your message automatically.",
};
export default function ContactPage() {
  return (
    <>
      <section className="cc-section cc-container cc-contact-intro">
        <p className="cc-label">Let’s talk / Your perspective matters</p>
        <h1 className="cc-title">
          Better ideas start
          <br />
          with a conversation.
        </h1>
        <p className="cc-lede">
          A question, a suggestion, a campus challenge you care about. We’d like
          to understand what would make student support easier to navigate.
        </p>
      </section>
      <section className="cc-container cc-contact-grid">
        <div>
          <h2 className="cc-title">
            What’s on
            <br />
            your mind?
          </h2>
          <div className="cc-contact-option">
            <MessageCircle size={22} />
            <div>
              <h3>Tell us what could be clearer</h3>
              <p>
                Share general feedback about finding or navigating campus
                support.
              </p>
            </div>
          </div>
          <div className="cc-contact-option">
            <Lightbulb size={22} />
            <div>
              <h3>Help shape the product</h3>
              <p>
                Suggest a useful feature, a design improvement or a
                collaboration idea.
              </p>
            </div>
          </div>
          <a
            className="cc-contact-email"
            href="mailto:ojewandeabdulfatai2000@gmail.com"
          >
            <Mail size={18} />
            <span>ojewandeabdulfatai2000@gmail.com</span>
            <ArrowUpRight size={16} />
          </a>
          <p className="cc-copy">
            This form prepares a draft in your email application. You review and
            send it there. CampusCare does not store or automatically submit the
            message.
          </p>
          <div className="cc-trust-note">
            <p>
              This is not a university help desk or an emergency channel. Do not
              include sensitive student records, passwords or medical
              information.{" "}
              <Link href="/#trust" className="cc-text-link">
                Read our development principles ↗
              </Link>
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="cc-section cc-container">
        <p className="cc-note">
          Independent OAU-first project · Ile-Ife, Nigeria · No official
          institutional affiliation
        </p>
      </section>
    </>
  );
}
