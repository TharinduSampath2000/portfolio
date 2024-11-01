import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const options = {
      root: null, 
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);

    navLinks.forEach((section) => {
      const target = document.getElementById(section.id);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      navLinks.forEach((section) => {
        const target = document.getElementById(section.id);
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary opacity-90`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white font-serif text-[18px] font-bold cursor-pointer flex">
            &lt;
            <span className="text-red-500">Tharindu</span> &nbsp;
            <span className="md:block hidden text-secondary">Sampath</span>
            /&gt;
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id
                  ? "text-red-500 hover:text-red-500"
                  : "text-secondary hover:text-white"
              } cursor-pointer text-[16px] font-medium`}
              onClick={() => {
                setActive(link.id);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id
                      ? "text-red-500 hover:text-red-500"
                      : "text-secondary hover:text-white"
                  } font-poppins font-medium cursor-pointer text-[16px] hover:text-white`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar