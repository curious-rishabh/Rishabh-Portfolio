import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <ParallaxTilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </ParallaxTilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in Python, Java,
        JavaScript and expertise in frameworks like Flask, Django, React, and Node.js. I'm a quick learner and collaborate to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life. As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.
        <br></br>
        <br></br>
        <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://drive.google.com/file/d/1feHBl4GVNzW4yeohpYLOrFQqpBOk-LQl/view">Resume</a></button>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
// section id wrapper
export default SectionWrapper(About, "about");
