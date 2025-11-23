import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
}

const renderText = (text, className, baseWeight = 400) => {
  return (
    [...text].map((char, index) => (
      <span
        key={index}
        className={className}
        style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  )
}

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll('span');
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return (
      gsap.to(letter, {
        duration,
        ease: "power2.out",
        fontVariationSettings: `'wght' ${weight}`,
      })
    );
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: letterLeft, width: letterWidth } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (letterLeft - left + letterWidth / 2));
      const intensity = Math.exp(-(distance ** 2) / 5000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter(letter, base, 0.3);
    });
  }

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
  };
}

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");
    const titleCleanup = setupTextHover(titleRef.current, "title");

    return () => {
      subtitleCleanup();
      titleCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText("Hey, I'm Tharindu! Welcome to my", "text-3xl font-georama", 100)}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("portfolio", "text-9xl font-georama italic", 400)}
      </h1>

      <div className="small-screen">
        <p>This portfolio currently supports desktop and tablet view only.</p>
      </div>
    </section>
  );
}

export default Welcome