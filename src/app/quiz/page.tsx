"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuizPage() {
  const [player, setPlayer] = useState({ name: "", score: 0 });
  const { push } = useRouter();

  const handleOnInputPlayerName = (e) => {
    const { value } = e.target;

    setPlayer({ ...player, name: value });
  };

  const handleOnSubmitPlayerName = (e) => {
    e.preventDefault();
    localStorage.setItem("viruspace-quiz", JSON.stringify(player));
    push("/quiz/question?q=1");
  };

  return (
    <div className="container min-h-[70vh] overflow-hidden sm:absolute top-0 right-0 items-center mx-auto gap-8 px-4 grid grid-cols-1 sm:grid-cols-2">
      <div className="space-y-7 sm:w-[40vw]">
        <p className="font-bold text-primary text-xl md:text-5xl ">
          Seberapa Jenius Sih Kamu?
        </p>
        <form
          className="flex flex-col w-full space-y-4"
          onSubmit={handleOnSubmitPlayerName}
        >
          <Input
            type="text"
            placeholder="Masukkan namamu"
            value={player.name}
            onChange={handleOnInputPlayerName}
          />
          <Button
            type="submit"
            className="w-full rounded-xl font-bold"
            disabled={player.name == ""}
          >
            Mulai Quiz
          </Button>
        </form>
      </div>
      <div className="hidden sm:block -z-10 relative  w-[50vw] h-[100vh] aspect-square">
        <Image
          src="/images/pattern-virus.png"
          alt="virus-pattern"
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
}
