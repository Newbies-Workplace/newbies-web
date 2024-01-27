import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-between p-24 bg-redneonbg overflow-x-hidden">
      <p className="headM bg-purple font-bold text-white p-5 purpleNeon">
        Text
      </p>
      <div>
        <div className="w-[3000px] overflow-hidden rotate-[5deg] shadow relative z-10 shadow-black">
          <Marquee
            direction="right"
            speed={65}
            className="bg-greenbg z-10  *:text-white"
            autoFill
          >
            <p className="mx-2 md:marquee sm:headL font-bold">ŚRODA</p>
          </Marquee>
        </div>
        <div className="w-[3000px] overflow-hidden rotate-[-5deg]">
          <Marquee
            direction="left"
            speed={65}
            className="bg-greenbg *:text-white"
            autoFill
          >
            <p className="mx-3 md:marquee sm:headL font-bold">17:00</p>
          </Marquee>
        </div>
      </div>
    </main>
  );
}
