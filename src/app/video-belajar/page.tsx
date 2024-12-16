"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import videoContent from "../../constans/video-learning.json";

export default function LearningVideoPage() {
  return (
    <div className="container px-4 pb-10 mx-auto space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto items-center">
        <div className="iframe-container order-2 md:order-1">
          <iframe
            src="https://www.youtube.com/embed/kufvGibHWTM?si=koqfn2xD4Ni3TL0p"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="space-y-2 order-1 md:order-2 text-center md:text-left">
          <p className="text-xl md:text-3xl text-primary font-bold">
            {videoContent.title}
          </p>
          <p className="text-base md:text-xl text-primary">
            {videoContent.subTitle.map((text, index) => (
              <span key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {videoContent.links.map((video, idx) => {
          return (
            <Card key={idx}>
              <div className="iframe-container">
                <iframe
                  className="rounded-lg"
                  src={video.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <CardHeader className="p-3">
                <CardTitle className="uppercase text-primary text-lg">
                  {video.virusName}
                </CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
