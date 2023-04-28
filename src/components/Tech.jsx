import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h3>
      </motion.div>

      <div className="hidden sm:flex">
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
    </div>
    <ProgressBar />
    </>
    
  );
};

const ProgressBar = () => {
  return (
    <div>
    <div className="mb-1 text-base font-medium text-slate-100 dark:text-red-300">Python / Java</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500 w-4/5"></div>
      </div>
      <div className="mb-1 text-base font-medium text-slate-100 dark:text-green-500">JavaScript</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-7/12"></div>
      </div>
      <div className="mb-1 text-base font-medium text-slate-100 dark:text-blue-500">Design and Analysis of Algorithms / Data Structures</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full w-3/5"></div>
      </div>
      <div className="mb-1 text-base font-medium text-slate-100 dark:text-yellow-500">Database Management / MYSQL</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-yellow-400 h-2.5 rounded-full w-2/4"></div>
      </div>
      <div className="mb-1 text-base font-medium text-slate-100 dark:text-pink-950">Object Oriented Programming</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-rose-500 h-2.5 rounded-full dark:bg-orange-500 w-8/12"></div>
      </div>
      <div className="mb-1 text-base font-medium text-slate-100 dark:text-purple-500">HTML, CSS, Bootstrap, Tailwind</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 w-4/5"></div>
      </div>
      <div className="mb-1 text-base font-medium text-slate-100 dark:text-green-500">VS Code, GitHub</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-11/12"></div>
      </div>
    </div>
  );
};


export default SectionWrapper(Tech, "skills");
