import { MacWindow } from "@/components/molecules/MacWindow/MacWindow";
import { delay } from "@/utils/anim";
import CursorPointerIcon from "@public/icon/cursor-pointer-icon.svg";
import DockerIcon from "@public/icon/docker-icon.svg";
import JSIcon from "@public/icon/js-icon.svg";
import KotlinIcon from "@public/icon/kotlin-icon.svg";
import PythonIcon from "@public/icon/python-icon.svg";
import ReactIcon from "@public/icon/react-icon.svg";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

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
      className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-purple-400 to-orange-500 p-2 lg:p-8 text-white snap-start overflow-hidden"
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

            <div className={"flex flex-col justify-center"}>
              <span
                className={
                  "text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                }
              >
                Newbies
              </span>
              <span className={"text-xl"}>Świdnicka grupa pasjonatów IT</span>
              <span className={"text-xs"}>
                Powered by&nbsp;
                <a href={"https://rst.software"} className={"underline"}>
                  RST Software
                </a>
              </span>
            </div>
          </div>

          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 auto-cols-max h-full gap-8 justify-center items-center"
            }
          >
            <div
              className={
                "staggered opacity-0 relative h-full min-h-[200px] flex flex-col justify-center items-center overflow-hidden bg-red-900 rounded-2xl"
              }
            >
              <Projects />

              <span
                className={
                  "absolute bottom-0 p-2 text-2xl text-center w-full bg-red-800 bg-opacity-50"
                }
              >
                Uczymy się projektowo
              </span>
            </div>

            <div
              className={
                "staggered opacity-0 relative h-full min-h-[200px] flex flex-col justify-center items-center overflow-hidden bg-purple-900 rounded-2xl"
              }
            >
              <Experience />

              <span
                className={
                  "absolute bottom-0 p-2 text-2xl text-center w-full bg-purple-800 bg-opacity-50"
                }
              >
                Wymieniamy się doświadczeniami
              </span>
            </div>

            <div
              className={
                "staggered opacity-0 relative h-full min-h-[200px] flex flex-col justify-center items-center overflow-hidden bg-blue-900 rounded-2xl"
              }
            >
              <Technologies />

              <span
                className={
                  "absolute bottom-0 p-2 text-2xl text-center w-full bg-blue-800 bg-opacity-50"
                }
              >
                Nie straszna nam żadna technologia
              </span>
            </div>

            <div
              className={
                "staggered opacity-0 relative h-full min-h-[200px] flex flex-col justify-center items-center overflow-hidden bg-green-900 rounded-2xl"
              }
            >
              <ScrollForMore />

              <span
                className={
                  "absolute bottom-0 p-2 text-2xl text-center w-full bg-green-800 bg-opacity-50"
                }
              >
                Zejdź niżej aby dowiedzieć się <b>więcej</b>
              </span>
            </div>
          </div>
        </div>
      </MacWindow>
    </div>
  );
};

const Projects: React.FC = () => {
  const emotes = [":)", ":o", ">:(", ":D", ":P", ":|", ":/", ":3", "<3"];

  const [currentEmote1, setCurrentEmote1] = useState(emotes[4]);
  const [currentEmote2, setCurrentEmote2] = useState(emotes[2]);
  const [currentEmote3, setCurrentEmote3] = useState(emotes[0]);

  const changeEmote1 = useCallback(() => {
    const otherEmotes = emotes.filter((emote) => emote !== currentEmote1);
    const randomIndex = Math.floor(Math.random() * otherEmotes.length);
    setCurrentEmote1(otherEmotes[randomIndex]);
  }, [currentEmote1]);

  const changeEmote2 = useCallback(() => {
    const otherEmotes = emotes.filter((emote) => emote !== currentEmote2);
    const randomIndex = Math.floor(Math.random() * otherEmotes.length);
    setCurrentEmote2(otherEmotes[randomIndex]);
  }, [currentEmote2]);

  const changeEmote3 = useCallback(() => {
    const otherEmotes = emotes.filter((emote) => emote !== currentEmote3);
    const randomIndex = Math.floor(Math.random() * otherEmotes.length);
    setCurrentEmote3(otherEmotes[randomIndex]);
  }, [currentEmote3]);

  return (
    <div className={"flex gap-4 justify-center items-center"}>
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
          "relative flex justify-center items-center hover:shadow-neon-red bg-red-800 -mx-4 size-[120px] border-2 border-red-500 rounded-md"
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
          "relative flex justify-center items-center hover:shadow-neon-red bg-red-800 -mx-4 mb-4 size-[120px] border-2 border-red-500 rounded-md"
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
          "relative flex justify-center items-center hover:shadow-neon-red bg-red-800 -mx-4 size-[120px] border-2 border-red-500 rounded-md"
        }
      >
        <span className={"text-4xl text-red-500 font-bold select-none"}>
          {currentEmote3}
        </span>
      </motion.div>
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
    <div className={"flex flex-col gap-4 justify-center items-center"}>
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
              "head absolute top-0 m-auto left-0 right-0 w-1/2 h-1/2 rounded-full bg-purple-800 border-2 border-purple-500"
            }
          />
          <div
            className={
              "body absolute bottom-0 w-full h-1/2 rounded-t-full bg-purple-800 border-2 border-purple-500"
            }
          />
        </div>

        <div className={"relative size-[120px]"}>
          <div
            className={
              "head absolute top-0 m-auto left-0 right-0 w-1/2 h-1/2 rounded-full bg-purple-800 border-2 border-purple-500"
            }
          />
          <div
            className={
              "body absolute bottom-0 w-full h-1/2 rounded-t-full bg-purple-800 border-2 border-purple-500"
            }
          />
        </div>
      </motion.div>
    </div>
  );
};

const TechIcons = [
  <ReactIcon key={"react"} width={100} height={100} />,
  <PythonIcon key={"python"} width={100} height={100} />,
  <KotlinIcon key={"kotlin"} width={100} height={100} />,
  <JSIcon key={"js"} width={100} height={100} />,
  <DockerIcon key={"docker"} width={100} height={100} />,
];

const Technologies: React.FC = () => {
  const [currentIcons, setCurrentIcons] = useState(TechIcons);

  useEffect(() => {
    const interval = setInterval(() => {
      // shift first element to the end
      setCurrentIcons((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={"flex flex-col gap-4 justify-center items-center"}>
      <motion.div layout className={"flex gap-4"}>
        <AnimatePresence>
          {currentIcons.slice(0, 3).map((icon, index) => (
            <motion.div
              layout
              key={icon.key}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const ScrollForMore: React.FC = () => {
  return (
    <div className={"flex flex-col gap-4 justify-center items-center"}>
      <div className={"flex gap-4 justify-center items-center"}>
        <div className={"animate-bounce"}>
          <CursorPointerIcon
            width={100}
            height={100}
            color={"#4B983F"}
            className={"rotate-[165deg]"}
          />
        </div>
      </div>
    </div>
  );
};
