import { useState, useEffect } from "react";
import "./Home.scss";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { RiArrowRightUpLine, RiGithubLine, RiInstagramLine, RiLinkedinLine} from "react-icons/ri"

const Home = () => {
  const openEmailClient = () => {
    const email = "pandasubhasish@outlook.com"; // replace with your email address
    const subject = "Hiring Inquiry";
    const body = "Hi Subhasish, I'm interested in hiring you for a project.";
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <>
     <section className="introduction-section">
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    }}
  >
    <div className="text-container">
      <h1 className="text">Hii, i am subhasish</h1>
      <h2 className="text2" >
        I am a web
        <span className="text3">
          <Typewriter
            options={{
              strings: ["Developer", "Designer"],
              autoStart: true,
              loop: true,
              
            }
          }
          />{" "}
        </span>{" "}
      </h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        <div className="button-container">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hire-button"
            onClick={openEmailClient}
          >
            Hire Me <RiArrowRightUpLine/>
          </motion.button>
        </div>
      </motion.div>
      <div className="social-container">
        <motion.a
          href="https://github.com/The1612raj"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="social-link"
        >
          <RiGithubLine/>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/subhasish-panda-6b8a07269/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="social-link"
        >
          <RiLinkedinLine/>
        </motion.a>
        <motion.a
          href="https://www.instagram.com/subhasish_panda_raj/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="social-link"
        >
          <RiInstagramLine/>
        </motion.a>
      </div>
    </div>
  </motion.div>
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    }}
  >
    <div className="image-container">
      <img
        className="profile"
        src="https://i.postimg.cc/JzR62p8n/pixlr-image-generator-6d0acc42-2189-4951-9245-7fae146e8119-removebg-preview.png"
        alt=""
      />
    </div>
  </motion.div>
</section>
    </>
  );
};

export default Home;