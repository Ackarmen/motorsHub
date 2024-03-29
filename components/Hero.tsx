"use client";

import { CustomButton } from "@/components";
import Image from "next/image";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero">
        <div className="flex-1 pt-28 padding-x">
          <h1 className="hero__title">
            Find, book, or rent a car quickly and easily!
          </h1>
          <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <CustomButton
            title="Explore Cars"
            containerStyle="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image
              src="/hero.png"
              alt="hero"
              fill
              className="object-contain"
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
