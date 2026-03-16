import React, { useState } from "react";
import { additionalTechnologies, technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  const [toottipTexts, setTooltipTexts] = useState({});

  const handleMouseEnter = (index, technology) => {
    setTooltipTexts({ [index]: technology });
  };

  const handleMouseLeave = () => {
    setTooltipTexts({});
  };

  return (
    <section className="sm:px-16 px-6 sm:py-10 py-6 max-w-7xl mx-auto relative z-0">
      <div className="mb-10">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Tech stack</p>
        <h3 className="text-white font-black md:text-[42px] sm:text-[34px] text-[28px] mt-2">
          Technologies I Use
        </h3>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
        {technologies.map((technology, index) => (
          <div
            className="w-24 h-24 xs:w-28 xs:h-28 mb-2 relative"
            key={technology.name}
            onMouseEnter={() => handleMouseEnter(index, technology.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <BallCanvas icon={technology.icon} />
            </div>

            {toottipTexts[index] && (
              <div className="absolute bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm z-10 bottom-[90%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                {toottipTexts[index]}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {additionalTechnologies.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full border border-white/10 bg-black-100/70 text-white-100 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Tech;
