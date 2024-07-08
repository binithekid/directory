import React from "react";
import { motion } from "framer-motion";
import { FaProductHunt } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
      className="w-full py-8 min-h-screen gap-3 flex flex-col md:px-40 px-4"
    >
      <div className="pb-3 flex flex-col gap-3">
        <h1 className="text-4xl md:w-4/5 w-full font-bold tracking-tight bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="md:md:w-4/5 text-lg tracking-tight text-gray-600 w-full">
          OpenAlternative is a community driven list of open source alternatives
          to proprietary software and applications.
        </p>
      </div>
      <div className="py-3">
        <p className="text-[0.72rem] font-semibold text-gray-500">
          AS FEATURED ON
        </p>
        <div className="flex flex-row gap-4 py-1">
          <div className="flex flex-row items-center gap-1">
            <FaProductHunt className="text-xl text-orange-600" />
            <p className="text-gray-700">Product Hunt</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <AiFillTwitterCircle className="text-2xl text-blue-400" />
            <p className="text-gray-700">Twitter</p>
          </div>
        </div>
      </div>
      <div className="py-6 flex flex-col gap-3">
        <h1 className="text-3xl md:w-4/5 w-full font-bold tracking-tight bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          What is OpenAlternative?
        </h1>
        <p className="md:md:w-4/5 text-lg tracking-tight text-gray-600 w-full">
          OpenAlternative is a community driven list of open source alternatives
          to proprietary software and applications. The goal of the site is to
          be your first stop when researching for a new open source service to
          help you grow your business. It will help you find alternatives and
          reviews of the products you already use.
        </p>
      </div>
      <div className="py-6 flex flex-col gap-3">
        <h1 className="text-3xl md:w-4/5 w-full font-bold tracking-tight bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          How did OpenAlternative get started?
        </h1>
        <p className="md:md:w-4/5 text-lg tracking-tight text-gray-600 w-full">
          The project started as a weekend project to learn a new technology and
          try something new and fun from scratch. It gained a lot of traction
          early on (100k unique visitors in one week, #1 on Hacker News) so it
          was clear that there was a need for a site like this. I’ve always been
          a fan of open source software and I’ve always wanted to contribute to
          the community in some way. I thought that creating a list of open
          source alternatives to proprietary software and applications would be
          a great way to give back to the community
        </p>
      </div>
      <div className="py-6 flex flex-col gap-3">
        <h1 className="text-3xl md:w-4/5 w-full font-bold tracking-tight bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          Tools Used{" "}
        </h1>
        <ul className="flex flex-col gap-2 text-gray-600 list-disc pl-6">
          <li>
            <Link className="underline " href="https://nextjs.org/">
              Next JS
            </Link>{" "}
            - Web Development Framework
          </li>
          <li>
            <Link className="underline " href="https://tailwindcss.com/">
              Tailwind CSS
            </Link>{" "}
            - CSS Framework
          </li>
          <li>
            <Link className="underline " href="https://firebase.google.com/">
              Firebase
            </Link>{" "}
            - Backend Cloud Computing
          </li>
          <li>
            <Link className="underline " href="https://github.com/">
              Github
            </Link>{" "}
            - Repository Data
          </li>
        </ul>
      </div>
      <div className="py-6 flex flex-col gap-3">
        <h1 className="text-3xl md:w-4/5 w-full font-bold tracking-tight bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
          Contribute!
        </h1>
        <p className="md:md:w-4/5 text-lg tracking-tight text-gray-600 w-full">
          If you have any suggestions for open source alternatives to
          proprietary software and applications, feel free to contribute to the
          list. You can also contribute by suggesting new categories or
          improving the website. The source code is available on GitHub. Enjoy
          and feel free to contribute!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
