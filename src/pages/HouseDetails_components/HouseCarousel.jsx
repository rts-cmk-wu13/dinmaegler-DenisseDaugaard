
import { GetHouseById} from "../../api/typicode"

import { useParams } from "react-router";
import { useEffect, useState } from "react"

export default function HouseCarousel({house}) {

    const slides = house.images?.map(img => img.url) || [];
    // const layesrs = house.layers?map(layer => layer.url) || []

    //console.log(slides);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    return (
        <div className="relative w-full max-w-3xl mx-auto">
 
      {slides.length > 0 && (
        <img
          src={slides[currentSlideIndex]}
          alt={`House slide ${currentSlideIndex}`}
        />
      )}


      <div className=" absolute left-1/2 bottom-8 flex transform -translate-x-1/2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlideIndex(i)}
            className={`carousel__dot rounded-full w-3 h-3 m-2 transition-colors ${
              i === currentSlideIndex ? "bg-blue-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>


      <button
        className="next text-3xl absolute right-4 top-1/2 -translate-y-1/2"
        onClick={() =>
          setCurrentSlideIndex((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
          )
        }
      >
        »
      </button>
      <button
        className="prev text-3xl absolute left-4 top-1/2 -translate-y-1/2"
        onClick={() =>
          setCurrentSlideIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
      >
        «
      </button>
    </div>
    )
}