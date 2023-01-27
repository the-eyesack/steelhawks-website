import React from "react";

export const news = [
  {
    year: 2022,
    events: [
      {
        name: "Tech Valley Regional",
        fileNames: ["NYTR"],
        fileLocation: "NYTR",
        type: "img",
        text: (
          <p className="mb-8 text-[15px] text-center px-2 md:text-lg md:px-4 lg:w-1/2 lg:text-xl">
            We took home <b>first place</b> at NY Tech Valley Regional with FRC
            2614 and FRC 5484, securing a spot at the championships, and picking
            up an <b>Entrepreneurship Award</b> along the way!
          </p>
        ),
      },
      {
        name: "Long Island Regional 2",
        fileNames: ["SBPLI2"],
        fileLocation: "SBPLI2",
        type: "img",
        text: (
          <p className="mb-8 text-[15px] text-center px-2 md:text-lg md:px-4 lg:w-1/2 lg:text-xl">
            We made a good run, placing fourth in the qualifiers and made it to
            the semifinals, as well as winning a second{" "}
            <b>Entrepreneurship Award</b>!
          </p>
        ),
      },
      {
        name: "NYC Regional",
        fileNames: ["NYC"],
        fileLocation: "NYC",
        type: "img",
        text: (
          <p className="mb-8 text-[15px] text-center px-2 md:text-lg md:px-4 lg:w-1/2 lg:text-xl">
            We ranked 5th out of 48 teams during qualifiers and made it to the
            playoffs as captains of the 4th seeded alliance, as well as winning
            the <b>Excellence in Engineering</b> award!
            <br /> Furthermore, our <b>Jessie Li</b> won the{" "}
            <b>Dean's List Finalist Award</b>!
          </p>
        ),
      },
      {
        name: "FIRST Championship",
        fileNames: ["Champs"],
        fileLocation: "Champs",
        type: "img",
        text: (
          <p className="mb-8 text-[15px] text-center px-2 md:text-lg md:px-4 lg:w-1/2 lg:text-xl">
            As a team, making it to Worlds was one of the most fulfilling
            experiences we could have had. Returning back in-person after almost
            2 years was definitely a challenge, but we ranked 16th of 76 teams
            in our division, <b>breaking our personal record!</b>
          </p>
        ),
      },
    ],
  },
  {
    year: 2023,
    events: [{}],
  },
];
