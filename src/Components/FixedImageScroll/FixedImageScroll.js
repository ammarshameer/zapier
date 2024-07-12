import React, { useState, useEffect } from "react";
import "../../App.css";
import image1 from "./Images/FixedScrollerImg1.avif";
import image2 from "./Images/FixedScrollerImg2.avif";
import image3 from "./Images/FixedScrollerImg3.avif";

const FixedImageScroll = () => {
  const [currentImage, setCurrentImage] = useState(0);



  const content = [
    {
      title: "Drag and drop to get started",
      paragraph:
        "Pick your apps and drag and drop your steps in the visual builder to start your workflow.",
      image: image1,
    },
    {
      title: "Turn an integration into an automation",
      paragraph:
        "Level up your Zaps with custom logic, conditions, and filters for added control to any workflow—all without a developer.",
      image: image2,
    },
    {
      title: "Build complete, customized solutions",
      paragraph:
        "Further customize your workflow with no-code data formatting, code steps, and webhooks. Build systems that automate entire business processes across teams and departments.",
      image: image3,
    },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const contentElements = document.querySelectorAll(".content");
    contentElements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const elementBottom = elementTop + element.clientHeight;
      if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
        setCurrentImage(index);
        element.classList.add('visible');
      }else{
        element.classList.remove('visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="workflows-div"><h1>Automate complete, end-to-end workflows</h1>
      <p>
        Whether you need to automate a simple task or build an entire automated
        system, you can do it all on Zapier.
      </p></div>
      <div className="pane-container">
        <div className="left-pane">
          <div className="image-container">
            <img src={content[currentImage].image} alt="Fixed" className="image visible"/>
          </div>
        </div>
        <div className="right-pane">
          {content.map((item, index) => (
            <div key={index} className={`content ${index === 0 ? 'visible' : ''}`}>
              <h1>{item.title}</h1>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="btnDiv "><button className="templatesBtn">Learn more about workflows</button></div>
    </div>
  );
};

export default FixedImageScroll;
