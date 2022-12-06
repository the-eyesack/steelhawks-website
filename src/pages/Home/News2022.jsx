import React from "react";
import { news } from "./newsData";

export const News2022 = () => {
  return (
    <div>
      {news.map((season) => {
        if (season.year === 2022) {
          return (
            <div className="">
              <h1 className="text-[3em] mt-2 md:mt-4 md:mt-2 md:text-[5em] text-center mb-2">
                {season.year} Season Recap
              </h1>
              <div>
                {season.events.map((event) => {
                  return (
                    <div className="">
                      <h2 className="text-2xl md:text-4xl mb-2 overflow-hidden text-center">
                        {event.name}
                      </h2>
                      <div className="flex justify-center">
                        <img
                          className="max-h-full md:rounded-3xl"
                          alt={event.name + "pic"}
                          src={event.image}
                        />
                      </div>
                      <p className="flex justify-center">{event.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};