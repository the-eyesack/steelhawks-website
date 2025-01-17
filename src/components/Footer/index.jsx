import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <div className="grid sm:grid-cols-3 grid-cols-1 border-t-2 px-10 md:px-4 py-2 gap-4 text-center">
        <div className="flex flex-col mt-2 items-center">
          <span className="uppercase text-2xl md:text-3xl font-bold mb-4">
            Stay Connnected
          </span>
          <span className="md:px-10 mb-4">
            Stay connected with our team by following our various social media
            platforms!
          </span>
          <div className="flex w-3/4 lg:w-1/2 justify-between">
            <a
              href="https://www.instagram.com/steelhawks2601/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={brands("instagram")} size="2x" />
            </a>
            <a
              href="https://www.youtube.com/@steelhawks2601/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={brands("youtube")} />
            </a>
            <a
              href="https://www.tiktok.com/@2601steelhawks/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={brands("tiktok")} />
            </a>
            <a
              href="https://www.thebluealliance.com/team/2601"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/tba.svg"
                alt="Github Logo"
                className="inline-block align-baseline h-[38px]"
              />
            </a>
            <a
              href="https://github.com/steelhawks"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon size="2x" icon={brands("github")} />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <span className="uppercase text-2xl md:text-3xl font-bold mb-4">
            FRC 2601 Steel Hawks
          </span>
          <span className="mb-4">
            FRC 2601 Steel Hawks is a FIRST Robotics Competition team based in
            Flushing, New York. We are a team of diverse students with a passion
            for STEM, and a community centered around inclusivity and
            empowerment.
          </span>
        </div>
        <div className="hidden md:flex flex-col mt-2">
          <span className="uppercase text-3xl font-bold mb-4">
            Navigate Back
          </span>
          <div className="grid grid-cols-2 text-blue-600">
            <a href="/" className="hover:underline duration-300">
              Home
            </a>
            <a href="/mentors" className="hover:underline duration-300">
              Mentors
            </a>
            <a href="/leadership" className="hover:underline duration-300">
              Leadership
            </a>
            <a href="/subteams" className="hover:underline duration-300">
              Subteams
            </a>
            <a href="/sponsors" className="hover:underline duration-300">
              Sponsors
            </a>
            <a href="/robots" className="hover:underline duration-300">
              Robots
            </a>
            <a href="/outreach" className="hover:underline duration-300">
              Outreach
            </a>
            <a href="/contact" className="hover:underline duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <hr className="md:block mx-24" />
      <p className="mt-4 mb-10">
        Townsend Harris High School · 149-11 Melbourne Ave, Queens, NY 11367 ·
        ©2023
      </p>
    </motion.div>
  );
};
export default Footer;
