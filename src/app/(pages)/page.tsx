import Header from "@/app/components/lading-page/header";
import Hero from "../components/lading-page/hero";
import VideoExplanation from "@/app/components/lading-page/video-explanation";
import Pricing from "@/app/components/lading-page/pricing";
import Faq from "@/app/components/lading-page/faq";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
        <VideoExplanation />
        <Pricing />
        <Faq />
      </div>
    </>
  );
}
