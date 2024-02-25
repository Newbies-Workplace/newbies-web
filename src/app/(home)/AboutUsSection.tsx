import React from "react";

export const AboutUsSection = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 p-8 bg-[#150DF7] snap-start font-bluescreen">
      <div className={"bg-white text-[#150DF7] font-bold p-2"}>
        <p className={"hover:col-span-2"}>NEWBIES</p>
        <p>Uczymy się na błędach</p>
        <p>TODO PRZYCISK POWROTU</p>
        <p>
          TODO info sugestia o przescrollowanie gdy ktoś zostaje na tej stronie
        </p>
      </div>

      <div
        className={
          "w-full h-full grid auto-cols-max gap-4 grid-cols-1 md:grid-cols-2"
        }
      >
        <div className={"border-white border-2 p-2 flex flex-col items-center gap-2"}>
          <p className={"font-bold"}>Nauka</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div className={"border-white border-2 p-2 flex flex-col items-center gap-2"}>
          <p className={"font-bold"}>Memy</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div className={"border-white border-2 p-2 flex flex-col items-center gap-2"}>
          <p className={"font-bold"}>Spotkania</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div className={"border-white border-2 p-2 flex flex-col items-center gap-2"}>
          <p className={"font-bold"}>Feedback</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div className={"border-white border-2 p-2 flex flex-col items-center gap-2"}>
          <p className={"font-bold"}>Specjaliści</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
        <div className={"border-white border-2 p-2 flex flex-col items-center gap-2"}>
          <p className={"font-bold"}>RST</p>
          <p>
            Trochę dłuższe rozwinięcie tekstu. Jedno lub dwa zdania, nie za
            długie nie za krótkie.
          </p>
        </div>
      </div>
    </div>
  );
};
