import { motion } from "framer-motion"
import { styles } from "../style"
// import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-red-500" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-red-500" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-[#e5e5e5]`}
            style={{ textShadow: "-2px -2px 0 #ef4444" }}
          >
            Hi, I&apos;m{" "}
            <span
              className="text-red-500"
              style={{ textShadow: "-3px -3px 0 #172554" }}
            >
              Tharindu
            </span>
          </h1>

          <p
            className={`${styles.heroSubText} mt-2 text-[#e5e5e5] font-extrabold`}
            style={{ textShadow: "-2px -2px 0 #ef4444" }}
          >
            I am a full-stack developer <br className="sm:block hidden" />
            with a passion for creating <br className="sm:block hidden" />
            beautiful and functional <br className="sm:block hidden" />
            web applications.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-red-500 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-red-500 rounded-full mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero