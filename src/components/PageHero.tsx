"use client";

import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  /** slide section up behind the navbar (h-16 = 4rem = 64px) */
  pullUp?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  pullUp = true,
}: PageHeroProps) {
  return (
    <section
      className={`
        relative w-full
        ${pullUp ? "-mt-16" : ""}
        h-[50vh] sm:h-[60vh] md:h-[70vh]
      `}
    >
      <Image
        src="/hero1.png"
        alt={title}
        fill
        priority
        className="object-cover object-top"
      />

      <div
        className="
          absolute inset-0
          bg-black/40
          flex flex-col items-center justify-center
          px-4 text-center
          pt-16
        "
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
