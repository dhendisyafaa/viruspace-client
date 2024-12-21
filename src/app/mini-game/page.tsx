"use client";

import ListOfViruses from "@/components/ListOfViruses";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import virusData from "../../constans/mini-game.json";

type Question = {
  id: number;
  namaVirus: string;
};

type Answer = {
  id: number;
  image: string;
};

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const MiniGamePage = () => {
  const [questions, setQuestions] = useState<Question[]>(
    virusData[0]?.questions || []
  );
  const [answers, setAnswers] = useState<Answer[]>(virusData[1]?.answers || []);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [shuffledAnswers, setShuffledAnswers] = useState<Answer[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (questions.length > 0) {
      loadQuestion();
    }
    setLoading(false);
  }, [questions]);

  const loadQuestion = () => {
    if (!questions || questions.length === 0) return;

    const question = questions[0];
    setCurrentQuestion(question);

    const correctAnswer = answers.find((answer) => answer.id === question.id);

    const remainingAnswers = answers.filter(
      (answer) => answer.id !== question.id
    );

    const availableAnswers = shuffleArray([
      correctAnswer,
      ...remainingAnswers,
    ]).slice(0, 12);

    if (!availableAnswers.some((answer) => answer?.id === correctAnswer?.id)) {
      availableAnswers[Math.floor(Math.random() * 12)] = correctAnswer!;
    }

    setShuffledAnswers(availableAnswers);
  };

  const handleAnswer = (selectedId: number) => {
    if (selectedId === currentQuestion?.id) {
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }

    setTimeout(() => {
      setFeedback(null);

      const updatedQuestions = questions.filter(
        (question) => question.id !== currentQuestion?.id
      );
      const updatedAnswers = answers.filter(
        (answer) => answer.id !== currentQuestion?.id
      );

      setQuestions(updatedQuestions);
      setAnswers(updatedAnswers);

      if (updatedQuestions.length === 0) {
        setCurrentQuestion(null);
      } else {
        loadQuestion();
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {loading ? (
        <h2 className="text-xl text-primary font-bold">Loading...</h2>
      ) : currentQuestion ? (
        <>
          <h1 className="text-3xl uppercase text-center text-primary font-bold mb-4">
            {currentQuestion.namaVirus}
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 justify-center overflow-hidden items-center gap-4 w-full h-full sm:h-fit sm:w-fit shadow-lg rounded-full px-8 py-12 sm:py-20 md:px-16 lg:p-24">
            {shuffledAnswers.map((answer, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(answer.id)}
                  className="md:hover:border-primary md:hover:border justify-self-center shadow-md hover:scale-110 duration-200 relative rounded-full md:w-24 md:h-24 h-20 w-20 bg-[#fff8f3]"
                >
                  <Image
                    fill
                    objectFit="contain"
                    src={answer.image}
                    alt={`Virus ${answer.id}`}
                    className="w-full"
                  />
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <div className="h-[40vh] text-center flex flex-col justify-center items-center space-y-5 mb-8 shadow-md rounded-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Hore! Mini Game Selesai!
            </h2>
            <Button
              variant={"outline"}
              onClick={() => window.location.reload()}
              className="border-2 border-b-4 border-primary rounded-lg"
            >
              <p className="font-bold">MAIN LAGI?</p>
            </Button>
          </div>
          <div className="space-y-5 w-[90vw]">
            <p className="border-primary pl-2 border-l-4 md:text-2xl font-bold text-primary">
              Belajar kembali materi virus
            </p>
            <ListOfViruses />
          </div>
        </div>
      )}

      {feedback === "correct" && (
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden bg-primary flex items-center justify-center z-50">
          <h2 className="text-white text-5xl font-bold">BENAR!</h2>
        </div>
      )}
      {feedback === "wrong" && (
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden bg-red-900 flex flex-col items-center justify-center z-50">
          <h2 className="text-white text-5xl font-bold">SALAH!</h2>
        </div>
      )}
    </div>
  );
};

export default MiniGamePage;
