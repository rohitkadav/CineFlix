import React, { useRef } from "react";
import Card from "./Card";
import CardsShimmer from "./CardsShimmer";

const CardSlider = ({ data, heading, trending, media_type }) => {
  const sliderRef = useRef();

  const handleNext = () => {
    sliderRef.current.scrollLeft += 300;
  };

  const handlePrevious = () => {
    sliderRef.current.scrollLeft -= 300;
  };

  return (
    <div className="my-10 px-4 md:px-12 w-full">
      <h2 className="text-lg lg:text-[26px] font-bold mb-2 text-white">
        {heading}
      </h2>
      <div className="w-[50%] md:w-[30%] h-1 bg-gradient-to-r from-red-600 to-transparent mt-2 md:mt-2 mb-6"></div>
      <div className="relative">
        <div
          ref={sliderRef}
          className="mx-auto grid grid-cols-[repeat(auto-fit,230px)] md:grid-cols-[repeat(auto-fit,250px)] grid-flow-col gap-6 overflow-hidden relative overflow-x-scroll scroll-smooth transition-all removeScrollbar z-10"
        >
          {!data.length ? (
            <CardsShimmer />
          ) : (
            data.map((data, index) => {
              return (
                <Card
                  key={data.id + "heading" + index}
                  data={data}
                  index={index + 1}
                  trending={trending}
                  media_type={media_type}
                />
              );
            })
          )}
        </div>

       {/*  */}
      </div>
    </div>
  );
};

export default CardSlider;
