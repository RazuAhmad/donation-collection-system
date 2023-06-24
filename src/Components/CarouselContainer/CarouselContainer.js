import { Carousel } from "@material-tailwind/react";
import slide1 from "../../images/slide-1.jpg";
import slide2 from "../../images/slide-2.jpg";
import slide3 from "../../images/slide-3.jpg";


export default function CarouselContainer() {
  return (
    <Carousel
      className="rounded-xl "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={slide1}
       alt="slide1"
        className="h-full  w-full m-auto object-cover"
      />
      <img
        src={slide2}
       alt="slide2"
        className="h-full w-full  object-cover"
      />
      <img
        src={slide3}
        alt="slide3"
        className="h-full w-full m-auto object-cover"
      />
    </Carousel>
  );
}