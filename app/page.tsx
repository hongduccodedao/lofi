"use client";
import useDayNight from "@/stores/dayNight";
import useWindowStore from "@/stores/expandWindow";
import useRain from "@/stores/rain";

export default function Home() {
  const { isExpanded } = useWindowStore();
  const { isDay } = useDayNight();
  const { isRain } = useRain();

  const comboMode = `${isDay}-${isRain}`;

  return (
    <div className="">
      <video
        className={`w-[100vw] z-[-1] absolute ${
          isExpanded ? "top-[0%]" : "top-[-11%]"
        } object-cover transition-opacity ease-in duration-300 ${
          comboMode === "true-false" ? "opacity-100" : "opacity-0"
        }`}
        loop
        autoPlay
        muted
      >
        <source src="./assets/videos/ExteriorDay.mp4" type="video/mp4" />
      </video>
      {/* Rain Day */}
      <video
        className={`w-[100vw] z-[-1] absolute ${
          isExpanded ? "top-[0%]" : "top-[-11%]"
        } object-cover transition-opacity ease-in duration-300 ${
          comboMode === "true-true" ? "opacity-100" : "opacity-0"
        }`}
        loop
        autoPlay
        muted
      >
        <source src="./assets/videos/ExteriorRainyDay.mp4" type="video/mp4" />
      </video>
      {/* Night */}
      <video
        className={`w-[100vw] z-[-1] absolute ${
          isExpanded ? "top-[0%]" : "top-[-11%]"
        } object-cover transition-opacity ease-in duration-300 ${
          comboMode === "false-false" ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
      >
        <source src="./assets/videos/ExteriorNight.mp4" type="video/mp4" />
      </video>
      {/* Rain Night */}
      <video
        className={`w-[100vw] z-[-1] absolute ${
          isExpanded ? "top-[0%]" : "top-[-11%]"
        } object-cover transition-opacity ease-in duration-300 ${
          comboMode === "false-true" ? "opacity-100" : "opacity-0"
        }`}
        loop
        autoPlay
        muted
      >
        <source src="./assets/videos/ExteriorRainyNight.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
