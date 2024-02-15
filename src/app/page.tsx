import FaqItem from "@/components/atoms/FaqItem/FaqItem";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden bg-blue-900">
      <div className="w-[3000px] overflow-hidden pb-5 z-10">
        <Marquee
          direction="right"
          speed={65}
          className="bg-blue-500 blueNeon *:text-white"
          autoFill
        >
          <p className="mx-3 md:marquee sm:headL font-bold">ŚRODA</p>
        </Marquee>
      </div>
      <div className="w-[3000px] overflow-hidden  z-10">
        <Marquee
          direction="left"
          speed={65}
          className="bg-blue-500 blueNeon *:text-white"
          autoFill
        >
          <p className="mx-3 md:marquee sm:headL font-bold">17:00</p>
        </Marquee>
      </div>
      <div className=" h-screen bg-blue-900">
        <p>O NAS</p>
      </div>
      <div className="w-[3000px] overflow-hidden  z-10">
        <Marquee
          direction="right"
          speed={65}
          className="redNeon bg-red-500 *:text-white"
          autoFill
        >
          <p className="mx-3 md:marquee sm:headL font-bold">NASZE PROJEKTY</p>
        </Marquee>
      </div>
      <div className="h-screen bg-red-900">
        <p>Nasze projekty</p>
      </div>
      <div className="w-[3000px] overflow-hidden z-10">
        <Marquee
          direction="right"
          speed={65}
          className="orangeNeon bg-orange-500 *:text-white"
          autoFill
        >
          <p className="mx-3 md:marquee sm:headL font-bold">ZESPÓŁ</p>
        </Marquee>
      </div>
      <div className="h-screen bg-orange-900">
        <p>Zespół</p>
      </div>
      <div className="w-[3000px] overflow-hidden pb-5  z-10">
        <Marquee
          direction="right"
          speed={65}
          className="bg-blue-500 blueNeon *:text-white"
          autoFill
        >
          <p className="mx-3 md:marquee sm:headL font-bold">ŚRODA</p>
        </Marquee>
      </div>
      <div className="w-[3000px] overflow-hidden  z-10">
        <Marquee
          direction="left"
          speed={65}
          className="bg-blue-500 blueNeon *:text-white"
          autoFill
        >
          <p className="mx-3 md:marquee sm:headL font-bold">17:00</p>
        </Marquee>
      </div>
      <div className=" h-screen bg-blue-900">
        <p>O NAS</p>
      </div>
      <div className="w-[3000px] overflow-hidden  z-10">
        <Marquee
          direction="right"
          speed={65}
          className="redNeon bg-red-500 *:text-white"
          autoFill
        >
          <p className="mx-3 md:marquee sm:headL font-bold">NASZE PROJEKTY</p>
        </Marquee>
      </div>
      <div className="h-screen bg-red-900">
        <p>Nasze projekty</p>
      </div>
      <div className="w-[3000px] overflow-hidden z-10">
        <Marquee
          direction="right"
          speed={65}
          className="orangeNeon bg-orange-500 *:text-white"
          autoFill
        >
          <p className="mx-3 md:marquee sm:headL font-bold">ZESPÓŁ</p>
        </Marquee>
      </div>
      <div className="h-screen bg-orange-900">
        <p>Zespół</p>
      </div>
      <div className="w-[3000px] overflow-hidden z-10 bg-green-900">
        <Marquee
          direction="right"
          speed={65}
          className="greenNeon bg-green-500 *:text-white"
          autoFill
        >
          <p className="mx-3 md:marquee sm:headL font-bold">MASZ PYTANIA?</p>
        </Marquee>
      </div>
      <div className="flex flex-col h-screen bg-green-900 p-5 gap-5">
        <FaqItem
          question="Jak dołączyć do nas?"
          answer="Dołączyć na discorda"
        />
        <FaqItem question="Jak wycentrować diva" answer="My też nie wiemy" />
      </div>
    </main>
  );
}
