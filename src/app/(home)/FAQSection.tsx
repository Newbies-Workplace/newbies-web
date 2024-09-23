import FaqItem from "@/components/atoms/FaqItem/FaqItem";
import React from "react";
import Marquee from "react-fast-marquee";

export const FaqSection = () => {
  return (
    <div className="min-h-screen bg-green-900 bg-dot-white/[0.2] relative snap-start">
      <div className={"rotate-1 -mx-4"}>
        <Marquee
          direction="right"
          speed={65}
          className="shadow-neon-green bg-green-500 w-[3000px] overflow-hidden z-10"
          autoFill
        >
          <p className="mx-3 md:text-7xl sm:text-xl font-bold font-saira">
            MASZ PYTANIA?
          </p>
        </Marquee>
      </div>

      <div className={"w-full h-full flex flex-col justify-center items-center"}>
        <div
          className={
            "container flex h-full flex-col justify-center items-center gap-4 py-8 px-4"
          }
        >
          <FaqItem
            question="Jak do nas dołączyć?"
            answer={"Wystarczy że dołączysz na naszego discorda i pojawisz się na spotkaniu!\n\nTo takie proste...\n\nI nawet darmowe (uczciwa cena)"}
          />
          <FaqItem
            question="Czy mogę u was zaliczyć praktyki?"
            answer={
            <>
              Tak, prowadzimy praktyki dla studentów oraz uczniów szkół średnich. Wystarczy że zgłosisz się do nas na maila:
              <a href={"mailto:praktyki@rst.com.pl"} className={"underline"}>praktyki@rst.com.pl</a>
              <br/>
              Praktyki prowadzimy projektowo - wybieramy projekty newbiesowe do których możesz dołączyć i zdobywać doświadczenie. Jeśli chętnych na dany termin jest więcej, to wymyślamy nowe projekty.
              <br/>
              <br/>
              Oceniamy praktyki na podstawie zaangażowania, chęci nauki oraz postępów w nauce. Wszystko zależy od Ciebie!
            </>
          }
          />
          <FaqItem
            question="Skąd jesteście?"
            answer={"Newbies powstało w Świdnicy dzięki firmie RST, ale działamy online, więc możesz do nas dołączyć z każdego miejsca na ziemi!"}
          />
          <FaqItem
            question="Co to jest rekurencja?"
            answer={
              <FaqItem
                question="Co to jest rekurencja?"
                answer={
                  <FaqItem
                    question="Co to jest rekurencja?"
                    answer={
                      <FaqItem
                        question="Co to jest rekurencja?"
                        answer="Właśnie to jest rekurencja!"
                      />
                    }
                  />
                }
              />
            }
          />
        </div>
      </div>
    </div>
  );
};
