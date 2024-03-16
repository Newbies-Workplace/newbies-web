import { MacWindow } from "@/app/(home)/(about)/components/MacWindow";
import { delay } from "@/utils/anim";
import { motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const SiteSection: React.FC = () => {
  const [scope, animate] = useAnimate();

  const handleAnimation = async () => {
    await delay(200);
    await animate(
      ".mac-window",
      {
        transform: ["translateY(100vh)", "translateY(0vh)"],
        width: ["80%", "100%"],
        height: ["10%", "100%"],
      },
      { duration: 1, type: "spring" },
    );
    await delay(100);

    animate(
      ".staggered",
      { opacity: [null, 1] },
      { duration: 1, delay: stagger(0.5) },
    );
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: should execute only once
  useEffect(() => {
    handleAnimation().then();
  }, []);

  return (
    <div
      ref={scope}
      className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-400 to-orange-500 p-2 md:p-8 text-white snap-start overflow-hidden"
    >
      <MacWindow
        className={"mac-window translate-y-[100vh] h-[10%] w-[80%]"}
        title={"newbies.pl"}
      >
        <div
          className={
            "mac-container flex flex-col gap-8 justify-between p-4 bg-dot-[#ffffff30] h-full overflow-y-scroll"
          }
        >
          <div
            className={"staggered opacity-0 flex flex-row gap-4 justify-center"}
          >
            <Image
              src={"/icon/newbies-logo.png"}
              alt={"newbies logo"}
              width={150}
              height={150}
            />

            <div className={"flex flex-col justify-center gap-4"}>
              <span className={"text-4xl"}>Newbies</span>
              <span className={"text-xl"}>Świdnicka grupa pasjonatów IT</span>
              <span className={"text-xs"}>
                Powered by&nbsp;
                <a href={"https://rst.software"} className={"underline"}>
                  RST Software Masters
                </a>
              </span>
            </div>
          </div>

          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 auto-cols-max h-full gap-6 justify-center items-center"
            }
          >
            <Projects />

            <Experience />

            <Technologies />

            <Technologies />
          </div>

          <div className={"staggered opacity-0 flex flex-row justify-center"}>
            <span className={"text-2xl"}>Scrollnij se</span>
          </div>
        </div>
      </MacWindow>
    </div>
  );
};

const Projects: React.FC = () => {
  const emotes = [":)", ":o", ">:(", ":D", ":P", ":|"];

  const [currentEmote1, setCurrentEmote1] = useState(emotes[0]);
  const [currentEmote2, setCurrentEmote2] = useState(emotes[0]);
  const [currentEmote3, setCurrentEmote3] = useState(emotes[0]);

  const changeEmote1 = () => {
    const otherEmotes = emotes.filter((emote) => emote !== currentEmote1);
    const randomIndex = Math.floor(Math.random() * otherEmotes.length);
    setCurrentEmote1(otherEmotes[randomIndex]);
  };

  const changeEmote2 = () => {
    const otherEmotes = emotes.filter((emote) => emote !== currentEmote2);
    const randomIndex = Math.floor(Math.random() * otherEmotes.length);
    setCurrentEmote2(otherEmotes[randomIndex]);
  };

  const changeEmote3 = () => {
    const otherEmotes = emotes.filter((emote) => emote !== currentEmote3);
    const randomIndex = Math.floor(Math.random() * otherEmotes.length);
    setCurrentEmote3(otherEmotes[randomIndex]);
  };

  return (
    <div
      className={
        "staggered opacity-0 flex flex-col gap-4 justify-center items-center"
      }
    >
      <div className={"flex justify-center items-center"}>
        <motion.div
          initial={{
            rotate: -6,
          }}
          whileHover={{
            translateY: -16,
            translateX: -4,
          }}
          onMouseEnter={changeEmote1}
          className={
            "relative flex justify-center items-center hover:shadow-neon-red bg-red-900 -mx-4 size-[120px] border-2 border-red-500 rounded-md"
          }
        >
          <span className={"text-4xl text-red-500 font-bold select-none"}>
            {currentEmote1}
          </span>
        </motion.div>

        <motion.div
          whileHover={{
            translateY: -20,
          }}
          onMouseEnter={changeEmote2}
          className={
            "relative flex justify-center items-center hover:shadow-neon-red bg-red-900 -mx-4 mb-4 size-[120px] border-2 border-red-500 rounded-md"
          }
        >
          <span className={"text-4xl text-red-500 font-bold select-none"}>
            {currentEmote2}
          </span>
        </motion.div>

        <motion.div
          initial={{
            rotate: 6,
          }}
          whileHover={{
            translateY: -16,
            translateX: 4,
          }}
          onMouseEnter={changeEmote3}
          className={
            "relative flex justify-center items-center hover:shadow-neon-red bg-red-900 -mx-4 size-[120px] border-2 border-red-500 rounded-md"
          }
        >
          <span className={"text-4xl text-red-500 font-bold select-none"}>
            {currentEmote3}
          </span>
        </motion.div>
      </div>
      <span className={"text-2xl"}>Uczymy się projektowo</span>
    </div>
  );
};

const Experience: React.FC = () => {
  const firstDialogVariants = {
    hidden: {
      opacity: 0,
      top: -100,
      left: 95,
      width: 30,
    },
    visible: {
      opacity: 1,
      top: -10,
      left: 95,
      width: 100,
      transition: {
        duration: 0.5,
      },
    },
  };
  const secondDialogVariants = {
    hidden: {
      opacity: 0,
      top: 100,
      right: 95,
      width: 30,
    },
    visible: {
      opacity: 1,
      top: 30,
      right: 95,
      width: 100,
      transition: {
        delay: 0.25,
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={
        "staggered opacity-0 flex flex-col gap-4 justify-center items-center"
      }
    >
      <motion.div
        className={"relative flex flex-row gap-16 justify-center items-center"}
        initial={"hidden"}
        animate={"hidden"}
        whileHover={"visible"}
      >
        <motion.div
          variants={firstDialogVariants}
          className={
            "absolute top-[-10px] left-[95px] bg-white rounded-full rounded-bl-none h-[30px] z-10"
          }
        />
        <motion.div
          variants={secondDialogVariants}
          className={
            "absolute top-[30px] right-[95px] bg-white rounded-full rounded-tr-none h-[30px] z-10"
          }
        />

        <div className={"relative size-[120px]"}>
          <div
            className={
              "head absolute top-0 m-auto left-0 right-0 w-1/2 h-1/2 rounded-full bg-purple-900 border-2 border-purple-500"
            }
          />
          <div
            className={
              "body absolute bottom-0 w-full h-1/2 rounded-t-full bg-purple-900 border-2 border-purple-500"
            }
          />
        </div>

        <div className={"relative size-[120px]"}>
          <div
            className={
              "head absolute top-0 m-auto left-0 right-0 w-1/2 h-1/2 rounded-full bg-purple-900 border-2 border-purple-500"
            }
          />
          <div
            className={
              "body absolute bottom-0 w-full h-1/2 rounded-t-full bg-purple-900 border-2 border-purple-500"
            }
          />
        </div>
      </motion.div>
      <span className={"text-2xl"}>Dzielimy się doświadczeniami</span>
    </div>
  );
};

const Technologies: React.FC = () => {
  return (
    <div
      className={
        "staggered opacity-0 flex flex-col gap-4 justify-center items-center"
      }
    >
      <div className={"flex gap-4 justify-center items-center"}>
        <div className={"relative hover:animate-pulse size-[120px]"}>
          <div
            className={
              "head absolute top-0 m-auto left-0 right-0 w-1/2 h-1/2 rounded-full bg-purple-900 border-2 border-purple-500"
            }
          />
          <div
            className={
              "body absolute bottom-0 w-full h-1/2 rounded-t-full bg-purple-900 border-2 border-purple-500"
            }
          />
        </div>
        <div className={"relative hover:animate-pulse size-[120px]"}>
          <div
            className={
              "head absolute top-0 m-auto left-0 right-0 w-1/2 h-1/2 rounded-full bg-purple-900 border-2 border-purple-500"
            }
          />
          <div
            className={
              "body absolute bottom-0 w-full h-1/2 rounded-t-full bg-purple-900 border-2 border-purple-500"
            }
          />
        </div>
        <div className={"relative hover:animate-pulse size-[120px]"}>
          <div
            className={
              "head absolute top-0 m-auto left-0 right-0 w-1/2 h-1/2 rounded-full bg-purple-900 border-2 border-purple-500"
            }
          />
          <div
            className={
              "body absolute bottom-0 w-full h-1/2 rounded-t-full bg-purple-900 border-2 border-purple-500"
            }
          />
        </div>
      </div>
      <span className={"text-2xl"}>Nie straszna nam żadna technologia</span>
    </div>
  );
};
