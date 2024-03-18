import React from "react";
import "./AboutMe.scss";
import Slider from "react-slick";
import { useSpring, animated } from "react-spring";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutMe = () => {
  const aboutMeInfo = {
    name: "Subhasish Panda",
    experience: "I have 1 year experience in web development and design",
    description:
      "Welcome to Subhasish Pandas personal website! Explore the digital portfolio of a talented BCA student skilled in Java, C, C++, web development (HTML, CSS, JavaScript, React, Bootstrap), and Microsoft Office. With a year of experience in web design and development, Subhasish creates captivating user experiences and offers insights into technology trends. Join the journey of innovation and learning today!",
    skills: [
      {
        name: "Java",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/free-java-2038875-1720088.png?f=webp&w=256",
      },
      {
        name: "C",
        image:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-program-icon.png",
      },
      {
        name: "C++",
        image: "https://i.ibb.co/9NBw8k0/c-logo-icon-28389.png",
      },
      {
        name: "HTML",
        image:
          "https://cdn.iconscout.com/icon/premium/png-512-thumb/html-2752158-2284975.png?f=webp&w=256",
      },
      {
        name: "CSS",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/free-css-37-226088.png?f=webp&w=256",
      },
      {
        name: "JavaScript",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "React",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/free-react-3629010-3030235.png?f=webp&w=256",
      },
      {
        name: "Bootstrap",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-6-1175203.png?f=webp&w=256",
      },
      {
        name: "Microsoft Excel",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/free-microsoft-excel-1411847-1194336.png?f=webp&w=256",
      },
      {
        name: "Microsoft PowerPoint",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/free-powerpoint-1411853-1194342.png?f=webp&w=256",
      },
      {
        name: "Microsoft Word",
        image:
          "https://cdn.iconscout.com/icon/premium/png-512-thumb/ms-word-5152573-4314696.png?f=webp&w=256",
      },
      {
        name: "figma",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/free-figma-3521426-2944870.png?f=webp&w=256",
      },
    ],
    education1: " Bhadrak Autonomous College ",
    course1: "Bachelor in Computer Application",
    education_time1: "2022-2024",
    education2: "Jawaharlal Neheru College,Kuanpal",
    course2: "12th Science(+2)",
    education_time2: "2020-2022",
    education3: "Panchayat High School Kundi",
    course3: "10th and schooling",
    education_time3: "2012-2022",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 118,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const nameAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: { duration: 500 },
  });
  const experienceAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 400,
    config: { duration: 500 },
  });
  const descriptionAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 600,
    config: { duration: 500 },
  });
  const headingAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 800,
    config: { duration: 500 },
  });
  const slideAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 400,
    config: { duration: 500 },
  });

  return (
    <div className="about-me-card">
      <div className="left-container">
        <animated.h1 className="name" style={nameAnimation}>
          {aboutMeInfo.name}
        </animated.h1>
        <animated.p className="experience" style={experienceAnimation}>
          {aboutMeInfo.experience}
        </animated.p>
        <animated.p className="description" style={descriptionAnimation}>
          "{aboutMeInfo.description}"
        </animated.p>
        <animated.h2 className="heading" style={headingAnimation}>
          Skills
        </animated.h2>
        <animated.div style={slideAnimation}>
          <Slider {...settings} className="slide">
            {aboutMeInfo.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-img">
                  {skill.image ? (
                    <img src={skill.image} alt={skill.name} />
                  ) : (
                    <>{skill.name}</>
                  )}{" "}
                </div>
              </div>
            ))}
          </Slider>
        </animated.div>
      </div>
    </div>
  );
};

export default AboutMe;
