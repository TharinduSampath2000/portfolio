import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from './hoc'
import { slideIn } from '../utils/motion'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const showSuccessNotification = () => {
    toast.success("Thank you. I'll get back to you soon!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-green-200 text-green-800 opacity-60",
    });
  };

  const showErrorNotification = () => {
    toast.error("Something went wrong. Please try again.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-red-200 text-red-800 opacity-60",
    });
  };

  const showWarningNotification = () => {
    toast.warn("Please fill in all the fields.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "bg-yellow-200 text-yellow-800 opacity-60",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (!form.name || !form.email || !form.message) {
      showWarningNotification()
      setLoading(false)
      return
    }
    
    emailjs
      .send(
        "service_29nmml8",
        "template_qtkm39b",
        {
          from_name: form.name,
          to_name: "Tharindu",
          from_email: form.email,
          message: form.message,
        },
        "75hbyS7QCgShg93Hd"
      )
      .then(() => {
        setLoading(false);
        showSuccessNotification();
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        showErrorNotification();
        console.error(err);
        setLoading(false);
      });
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <ToastContainer />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-0.75 bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 rounded-lg text-white placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 rounded-lg text-white placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 rounded-lg text-white placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;