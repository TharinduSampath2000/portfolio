import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types';
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from './hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="sm:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a full-stack web developer with a passion for creating beautiful, responsive, and user-friendly websites. I have experience in both front-end and back-end development, and I am proficient in a variety of programming languages and frameworks. I am always looking to learn new technologies and improve my skills, and I am excited to work on new projects and challenges.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;