import { motion } from "framer-motion";
import React from "react";
import MediaChooser from "../../helpers/mediaChooser";
import { news } from "./data";

const HomePage = () => {
  return (
    <section className="px-4">
      <div>
        <img src="/logo.svg" alt="Steel Hawks" className="md:w-1/2 m-auto" />

        <MediaChooser
          type="carousel"
          images={["home1", "home2", "home3"]}
          location="home"
        />
      </div>
      <div className="mb-10">
        <h1 className="pageTitle text-[3em] mt-10 mb-4">
          THE STEEL HAWKS ARE CHARGED UP!
        </h1>
        <p>We'll see you at Long Island 2 and New York Tech Valley!</p>
      </div>
      <div>
        {news.map(
          (season, i) =>
            season.year === new Date().getFullYear() - 1 && (
              <div key={i}>
                <h1 className="pageTitle text-[3em] m-4">
                  {season.year} Season Recap
                </h1>
                <div>
                  {season.events.map((event, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        x: -300,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.5, delay: i * 0.1 },
                      }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl md:text-4xl mb-2 overflow-hidden text-center">
                        {event.name}
                      </h2>
                      <div className="flex justify-center">
                        <MediaChooser
                          type={event.type}
                          images={event.fileNames}
                          video={event.video}
                          location={"2022events/" + event.fileLocation}
                        />
                      </div>
                      <p className="flex justify-center">{event.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>

      <p className="pb-4 text-secondary">
        Thank you to our sponsors, parents, school communities, and volunteers
        who made this season possible!
      </p>
    </section>
  );
};

export default HomePage;
