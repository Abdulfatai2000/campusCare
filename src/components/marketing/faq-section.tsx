import Link from "next/link";
import { Plus } from "lucide-react";
import { marketingFaqs } from "@/data/marketing";
export function FaqSection() {
  return (
    <section id="faq" className="cc-section cc-faq-section">
      <div className="cc-container cc-faq-grid">
        <div>
          <p className="cc-label">10 / A few good questions</p>
          <h2 className="cc-title">Glad you asked.</h2>
          <p className="cc-lede">
            A clearer picture of what CampusCare is, who it’s for, and where
            things stand.
          </p>
          <Link href="/contact" className="cc-text-link">
            Have another question? Get in touch ↗
          </Link>
        </div>
        <div className="cc-faq-list">
          {marketingFaqs.map((item, index) => (
            <details key={item.question}>
              <summary>
                <span className="cc-faq-number">0{index + 1}</span>
                <span>{item.question}</span>
                <Plus size={19} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
