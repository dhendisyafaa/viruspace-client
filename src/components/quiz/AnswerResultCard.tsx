import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function AnswerResultCard({
  isCorrect,
  reason,
  answerKey,
  answerLabel,
  onClickNext,
}) {
  return (
    <div
      className={cn(
        "fixed bottom-0 px-3 lg:px-48 w-full flex border-t-2 mt-auto min-h-[135px] items-center justify-between md:px-5 py-3 space-x-3",
        isCorrect ? "bg-primary border-primary" : "bg-red-700 border-red-500"
      )}
    >
      <div className="flex items-center w-full space-x-4">
        <div className="hidden md:block">
          {isCorrect ? (
            <Image
              src="/images/benar.svg"
              width={80}
              height={100}
              alt="benar"
            />
          ) : (
            <Image
              src="/images/salah.svg"
              width={80}
              height={100}
              alt="salah"
            />
          )}
        </div>
        <div className="flex flex-col space-y-1">
          <p className="font-extrabold text-2xl text-white">
            {isCorrect
              ? "Alasan:"
              : `Jawaban yang benar: ${answerKey.toUpperCase()}. ${answerLabel}`}
          </p>
          <p className="max-w-xl font-medium text-sm md:text-lg text-white">
            {reason}
          </p>
        </div>
      </div>
      <Button
        type="button"
        className="font-bold rounded-xl"
        variant={isCorrect ? "outline" : "destructive"}
        onClick={onClickNext}
      >
        Lanjutkan
      </Button>
    </div>
  );
}
