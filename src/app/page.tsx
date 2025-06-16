import Header from "@/components/lading-page/header";
import Hero from "../components/lading-page/hero";
import VideoExplanation from "@/components/lading-page/video-explanation";
import Pricing from "@/components/lading-page/pricing";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Hero />
        <VideoExplanation />
        <Pricing />
      </div>
    </>
  );
}
