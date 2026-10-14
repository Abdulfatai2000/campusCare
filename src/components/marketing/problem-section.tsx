import {
  CornerDownRight,
  MessageCircle,
  MapPin,
  Clock3,
  Files,
  CircleHelp,
  Route,
} from "lucide-react";
import { Reveal } from "./reveal";
const questions = [
  { icon: MapPin, text: "Which office can actually help?" },
  { icon: Files, text: "Why is the information everywhere?" },
  { icon: CircleHelp, text: "Where do I report this?" },
  { icon: MessageCircle, text: "Has anyone seen my request?" },
  { icon: Clock3, text: "When can I speak to someone?" },
  { icon: Route, text: "Which guidance can I trust?" },
];
export function ProblemSection() {
  return (
    <section id="the-problem" className="cc-section cc-problem">
      <div className="cc-container cc-split">
        <Reveal>
          <p className="cc-label">01 / The everyday friction</p>
          <h2 className="cc-title">
            Finding support
            <br />
            shouldn’t feel like
            <br />
            <em>a second course.</em>
          </h2>
          <p className="cc-lede">
            A question becomes a search. A search becomes another office. And a
            simple request can leave you wondering what happens next.
          </p>
          <p className="cc-copy">
            These are the challenges CampusCare aims to address, not measured
            claims about any university.
          </p>
        </Reveal>
        <div
          className="cc-question-board"
          aria-label="Student support challenges"
        >
          {questions.map((question, index) => (
            <div className="cc-question" key={question.text}>
              <question.icon size={18} />
              <span>{question.text}</span>
              <small>0{index + 1}</small>
            </div>
          ))}
          <div className="cc-question-answer">
            <CornerDownRight size={24} />
            <span>There could be a clearer way.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
