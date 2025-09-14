import step1 from "./assets/step1r.png";
import step2 from "./assets/step2r.png";
import step3 from "./assets/step3r.png";
import step4 from "./assets/step4r.png";
import expand from "./assets/expand.svg";

export const cards = [
  {
    description: "",
    title: "1. Click photo of your face/dress",
    src: step1,
    ctaText: <img src={expand} alt="expand" className="h-6 w-6" />,
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Start by snapping a high-quality photo of your face or your outfit
          directly through your phone’s camera. This vital first step allows our
          AI to recognize and analyze your unique features—your skin tone,
          facial structure, or even the patterns and colors in your clothing. By
          capturing a true-to-life image, you enable the platform to deliver
          styling suggestions that are customized just for you, making sure
          every recommendation feels authentic and perfectly matched.
        </p>
      );
    },
  },
  {
    description: "",
    title: "2. Type about your mood/style",
    src: step2,
    ctaText: <img src={expand} alt="expand" className="h-6 w-6" />,
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Next, describe your current mood or the style you’re feeling inspired
          by. Whether you’re in the mood for something playful, sophisticated,
          bold, or casual, sharing these details helps our AI understand the
          vibe you want to achieve. This personal touch goes beyond simple
          keywords—your input fuels the recommendation engine to serve up looks
          and outfit ideas that truly reflect your personality and fit the
          occasion, making your styling experience uniquely yours.
        </p>
      );
    },
  },

  {
    description: "",
    title: "3. Choose your favorite style and apply by reading detailed steps",
    src: step3,
    ctaText: <img src={expand} alt="expand" className="h-6 w-6" />,
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Once you’ve received personalized style suggestions, you’ll be able to
          browse through a selection of looks crafted especially for you. Find
          one that catches your eye and dive into the step-by-step guide
          provided for each style. These detailed instructions walk you through
          the process—whether it’s a new makeup technique or how to pair your
          clothes—making it easy for anyone, no matter the skill level, to
          achieve flawless results. The guides are designed to be approachable
          and informative, ensuring a fun, stress-free styling experience.
        </p>
      );
    },
  },
  {
    description: "",
    title: "4. Try those styles in real-time on your phone",
    src: step4,
    ctaText: <img src={expand} alt="expand" className="h-6 w-6" />,
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Experience instant transformation like never before by virtually
          trying on your chosen styles live right from your device. Our advanced
          AR-powered try-on feature lets you see exactly how each makeup look or
          outfit combination appears on you, in real time. Experiment with
          different colors, techniques, and ensembles without any
          commitment—giving you the confidence to explore, create, and discover
          your perfect style before making it a reality.
        </p>
      );
    },
  },
];
