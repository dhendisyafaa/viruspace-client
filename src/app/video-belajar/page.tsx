"use client";
import videoContent from "../../constans/video-learning.json";

export default function LearningVideoPage() {
  // const autoplayDuration = 5000;

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
        {videoContent.links.map((link, idx) => {
          return (
            <div key={idx} className="iframe-container">
              <iframe
                src={link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
        {/* <Carousel
          plugins={[
            Autoplay({
              delay: autoplayDuration,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {videoContent.links.map((link, idx) => {
              return (
                <CarouselItem
                  key={idx}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="iframe-container">
                    <iframe
                      src={link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel> */}
      </div>
    </div>
  );
}
