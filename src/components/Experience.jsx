import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../style"
import { experiences } from "../constants"
import { SectionWrapper } from "./hoc"
import { textVariant } from "../utils/motion"
import PropTypes from 'prop-types';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.company_name}
        </h3>
      </div>

      <div className="mt-5 space-y-6">
        {experience.roles.map((role, roleIndex) => (
          <div key={roleIndex}>
            <h4 className="text-secondary text-[18px] font-semibold">
              {role.title}
            </h4>
            {role.date && (
              <p className="text-gray-400 text-[14px] italic">{role.date}</p>
            )}
            <ul className="mt-2 list-disc ml-5 space-y-2">
              {role.points.map((detail, index) => (
                <li
                  key={`experience-point-${roleIndex}-${index}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string,
        points: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
  }).isRequired,
};


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

const WrappedExperience = SectionWrapper(Experience, "experience");
export default WrappedExperience;