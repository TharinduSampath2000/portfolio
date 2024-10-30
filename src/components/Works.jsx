import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'
import PropTypes from 'prop-types';
import { styles } from "../style"
import { github } from '../assets'
import { SectionWrapper } from "./hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ name, description, tags, image, source_code_link, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        options={{ 
          max: 45, 
          scale: 1,
          speed: 450, 
        }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the projects I&apos;ve worked on. I&apos;m always looking to learn new things and work on new projects. If you have a project you&apos;d like to collaborate on, feel free to reach out.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </>
  );
}

const WrappedWorks = SectionWrapper(Works, "");
export default WrappedWorks;