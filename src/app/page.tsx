import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const logos = [
  { src: "/images/gojek.png", alt: "Gojek" },
  { src: "/images/google.png", alt: "Google" },
  { src: "/images/amazon.png", alt: "Amazon" },
  { src: "/images/binance.png", alt: "Binance" },
  { src: "/images/indodax.png", alt: "Indodax" },
];

export default function Home() {
  return (
    <>
      <section className="bg-slate-950 h-[561px]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
          <h1 className="mb-4 mt-32 text-2xl font-bold leading-none md:text-4xl lg:text-6xl text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            At <span className="underline decoration-sky-500">Ray&Land.Gg</span>{" "}
            we focus on markets where{" "}
            <span className="underline decoration-teal-500">technology</span>,
            innovation, and capital can unlock long-term value and drive your
            <span className="underline decoration-red-500">
              {" "}
              company's growth
            </span>
            .
          </p>
        </div>
        <div className="flex flex-col mx-auto justify-center items-center">
          <Carousel>
            <CarouselContent className="flex justify-center">
              {logos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/6 flex justify-center"
                >
                  <div className="">
                    <Card className="shadow-blue-600 p-2 shadow-xl rounded-full">
                      <CardContent className="flex aspect-square items-center justify-center p-1">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="object-contain w-24 h-22 rounded-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
}
