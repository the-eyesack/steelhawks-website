import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { sleep } from "../../helpers/time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = (props) => {
  const controls = useAnimationControls();
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex justify-center items-center w-full">
      <button
        className="mr-4"
        onClick={async () => {
          controls.start({
            x: 50,
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          });
          await sleep(200);
          setImageIndex(
            imageIndex - 1 < 0 ? props.images.length - 1 : imageIndex - 1
          );
          controls.start({
            x: -50,
          });
          await sleep(100);
          controls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.2 },
          });
        }}
      >
        <FontAwesomeIcon icon={solid("chevron-left")} className="w-10 h-10" />
      </button>
      <div
        className={`${
          props.size === "LARGE"
            ? "sm:h-[300px] w-[1000px] lg:h-[500px] md:h-[400px] h-[200px]"
            : "h-[200px] w-[600px] md:h-[300px]"
        }`}
      >
        <picture>
          <source
            srcSet={
              "/media/" +
              props.location +
              "/avif/" +
              props.images[imageIndex] +
              ".avif"
            }
            type="image/avif"
          />
          <source
            srcSet={
              "/media/" +
              props.location +
              "/webp/" +
              props.images[imageIndex] +
              ".webp"
            }
            type="image/webp"
          />
          <source
            srcSet={
              "/media/" +
              props.location +
              "/jpg/" +
              props.images[imageIndex] +
              ".jpg"
            }
            type="image/jpg"
          />
          <motion.img
            className="w-full h-full object-contain"
            animate={controls}
            alt="Home Image"
          />
        </picture>
      </div>
      <button
        className="ml-4"
        onClick={async () => {
          controls.start({
            x: -50,
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          });
          await sleep(200);
          setImageIndex(
            imageIndex + 1 >= props.images.length ? 0 : imageIndex + 1
          );
          controls.start({
            x: 50,
          });
          await sleep(100);
          controls.start({
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
            },
          });
        }}
      >
        <FontAwesomeIcon icon={solid("chevron-right")} className="w-10 h-10" />
      </button>
    </div>
  );
};

export default Carousel;
