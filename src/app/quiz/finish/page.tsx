"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FinishPage() {
  const [player, setPlayer] = useState({ name: "", score: 0 });
  const { push } = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("viruspace-quiz");
      if (storedData) {
        setPlayer(JSON.parse(storedData));
      }
    }
  }, []);

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const emailParams = {
        from_name: "Viruspace",
        player_name: `${player.name}`,
        player_email: email,
        message: `Selamat, kamu telah menyelesaikan quiz di Viruspace. Skormu adalah ${player.score}`,
      };

      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        toast({
          description: "Hasil quizmu sudah dikirim ke email!",
        });
        handleOnPlayAgain();
        console.log("SUCCESS!");
        setDialogOpen(!dialogOpen);
      }
    } catch (error) {
      toast({
        description: "Hasil quizmu gagal dikirim ke email!",
        variant: "destructive",
      });
      console.log("FAILED...", error);
    }
  };

  const handleOnPlayAgain = () => {
    const resetPlayer = { ...player, score: 0 };
    localStorage.setItem("viruspace-quiz", JSON.stringify(resetPlayer));
    push("/quiz");
  };

  return (
    <div className="grid w-full h-full place-items-center container px-4">
      <div className="flex flex-col items-center mt-auto space-y-5">
        <div className="flex flex-col items-center space-y-6">
          <div className="block">
            <Image
              src="/images/finish.svg"
              alt="finish"
              width={200}
              height={200}
            />
          </div>
          <p className="text-lg md:text-3xl font-extrabold text-primary text-center">
            Yeay! Kamu telah menyelesaikan quiz
          </p>
        </div>
        <div className="flex flex-col items-center px-3 py-2 space-y-1 border-2 border-b-4 border-primary rounded-lg">
          <p className="font-bold text-primary">SKOR MU</p>
          <p className="text-xl md:text-3xl font-bold text-primary">
            {player.score}
          </p>
        </div>
      </div>
      <div className="w-full border-t-2 border-gray-200 mt-6 min-h-[135px] items-center flex justify-end gap-2">
        <Button
          className="font-bold rounded-xl"
          onClick={handleOnPlayAgain}
          variant={"outline"}
        >
          Main lagi
        </Button>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="font-bold rounded-xl">Simpan skor</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Masukkan email</DialogTitle>
              <DialogDescription>
                Kami akan mengirimkan hasil quiz Anda ke email yang Anda
                masukkan
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={sendEmail}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <DialogFooter className="mt-3">
                <Button type="submit">Simpan skor</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
