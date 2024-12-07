import React, { useRef } from "react";

type AnswerOptionCardProps = {
  answerKey: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function AnswerOptionCard({
  answerKey,
  label,
  ...props
}: AnswerOptionCardProps) {
  const radioRef = useRef<HTMLInputElement>(null);

  const handleOnClickCard = () => {
    if (radioRef.current) {
      radioRef.current.click();
    }
  };

  return (
    <div
      className="flex transition-all group bg-white items-center gap-3 p-3 w-full cursor-pointer rounded-xl border-2 border-gray-200 shadow-[0px_3px_0px_0px_theme('colors.gray.200')] [&:has(:checked)]:border-primary [&:has(:checked)]:shadow-[0px_3px_0px_0px_theme('colors.black')] [&:has(:checked)]:bg-primary/90"
      onClick={handleOnClickCard}
    >
      <p className="group-[&:has(:checked)]:text-primary-foreground font-bold text-lg md:text-2xl">
        {answerKey.toUpperCase()}. {label}
      </p>
      <input
        ref={radioRef}
        type="radio"
        name="option"
        value={answerKey}
        className="hidden before:hidden after:hidden"
        {...props}
      />
    </div>
  );
}
