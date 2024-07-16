"use client";

import { InfiniteMovingCards } from "../ui/movingCards";

export function Testimonals() {
  return (
    <div className="h-[400px]  rounded-md flex flex-col  antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl font-semibold font-mono text-black">
        Testimonals
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Working with kapil chits has been a game-changer for my financial strategy. Their expert guidance and personalized approach helped me navigate chit fund investments with ease. Highly recommended!",
    name: "John Doe",
    title: "Game-Changing Financial Strategy",
  },
  {
    quote:
      "I&apos;m impressed with the professionalism and dedication of kapil chits. They provided invaluable insights into financial planning and chit funds, ensuring I make informed decisions. Thank you for your excellent service!",
    name: "Jane Smith",
    title: "Impressed with Professionalism",
  },
  {
    quote:
      "kapil chits నా ఫైనాన్షియల్ లక్ష్యాలకు విపరీతంగా కావలసింది. వారి నిపుణత మరియు వ్యక్తిగత పద్ధతి నాకు ఛాలెంజ్ ఫండ్ పెట్టించడానికి సహాయపడింది. అందరికి అనుకూలం.",
    name: "దావిద్ బ్రౌన్ (David Brown)",
    title: "ఫైనాన్షియల్ లక్ష్యాలకు విపరీతంగా కావలసింది",
  },
  {
    quote:
      "kapil chits నా ఫైనాన్షియల్ లక్ష్యాలకు చేసిన మీ నిర్ణయం యొక్క మీద గురించి చూసుకుంటున్నాను. వారి తీవ్ర సమాధాన పదకొంది.",
    name: "సారా జాన్సన్ (Sarah Johnson)",
    title: "ఫైనాన్షియల్ లక్ష్యాలకు సమర్థిస్తున్న ఆలోచన",
  },
];
