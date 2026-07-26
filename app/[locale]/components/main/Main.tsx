import React from "react";
import { useTranslations } from "next-intl";
import BaseButton from "../ui/BaseButton";

const Main = () => {
  const t = useTranslations();

  return (
    <main className="section h-dvh flex justify-center items-center pt-20">
      <div className="w-150 flex flex-col items-center gap-10 text-center">
        <h1 className="text-6xl leading-20 font-bold text-shadow-lg relative z-20 text-amber-500">
          {t("main.title")}
        </h1>
        <p className="text-sm text-shadow-lg relative z-20 text-amber-500">
          {t("main.des")}
        </p>
        <BaseButton
          onClick={() => {
            document.querySelector("section")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="w-50 h-12 flex justify-center items-center rounded-full shadow-2xl relative z-20 border border-white/20 text-black bg-zinc-300 dark:text-amber-500 dark:bg-zinc-900"
        >
          {t("BaseButton.start")}
        </BaseButton>
      </div>
    </main>
  );
};

export default Main;
