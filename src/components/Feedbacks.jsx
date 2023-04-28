import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  link,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> <a 
            href={link} target="_blank">{name}</a>
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation}
          </p>
        </div>

        <img
          src={image}
          alt={`${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />

      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Quotes i live by</p>
          <h2 className={styles.sectionHeadText}>Inspirations.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-1 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      <div className={`${styles.paddingX} flex flex-wrap gap-3`}>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://drive.google.com/file/d/1feHBl4GVNzW4yeohpYLOrFQqpBOk-LQl/view">Resume</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://github.com/curious-rishabh">Github</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://www.linkedin.com/in/rishabhbaghel">Linkedin</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://leetcode.com/producer_rb/">Leetcode</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://auth.geeksforgeeks.org/user/curiousrishabh">GeekforGeeks</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://www.hackerrank.com/producer_rb">HackerRank</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://twitter.com/curious_rishabh">Twitter</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://www.youtube.com/@RishabhBaghel">Youtube</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://rbreadsblog.wordpress.com/">Blog</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://www.instagram.com/curious.rishabh/">Instagram</a></button>
      <button type='button' className='bg-tertiary py-2 px-5 rounded-xl w-fit text-white font-bold shadow-md shadow-primary text-center'><a target="_blank" href="https://linktr.ee/RishabhBaghel">LinkTree</a></button>
      </div>
      <div className= {styles.paddingSmall}>
      <p className={styles.sectionSubText}> Connect with me through mail</p>
      <h4 className={styles.sectionEndText}><a href="mailto:rishabhbaghel80@gmail.com">rishabhbaghel80@gmail.com</a></h4>
      
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "connect");
