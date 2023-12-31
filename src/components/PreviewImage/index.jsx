import { Img } from "react-image";
import ReactCardFlip from "react-card-flip";
import { useState, Suspense } from "react";
import { Spinner } from "@nextui-org/react";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <Spinner />
    </div>
  );
};
/* Utilizing react-image library to try to load images from multiple links for redundancy */
const PreviewImage = ({ urls, alt }) => {
  const [flip, setFlip] = useState(false);
  return (
    <Suspense>
      <div className="flex justify-center w-full">
        <div className="w-5/6 sm:w-1/2 md:w-2/3 transition-all duration-300 hover:scale-110 hover:-translate-y-5">
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <Img
              onClick={() => setFlip(!flip)}
              src={urls}
              alt={alt}
              className="w-full"
              loader={<Loader />}
            />
            <Img
              onClick={() => setFlip(!flip)}
              src={urls}
              alt={alt}
              className="w-full"
              loader={<Loader />}
            />
          </ReactCardFlip>
        </div>
      </div>
    </Suspense>
  );
};

const TooltipPreviewImage = ({ urls, alt }) => {
  return (
    <Suspense>
      <Img src={urls} alt={alt} className="w-full" loader={<Loader />} />
    </Suspense>
  );
};

export { TooltipPreviewImage, PreviewImage };
