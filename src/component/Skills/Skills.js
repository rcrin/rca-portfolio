import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Skills.css";

import Box from "../Box/Box";
import {
  useInView,
  motion,
  useAnimation,
} from "framer-motion/dist/framer-motion";

const Skills = ({ delayPerPixel = 0.0008 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const [data, setData] = useState([]);
  const getData = () => {
    fetch("Skills.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function(response) {
        //console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useLayoutEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <div className="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <div className="container" ref={ref}>
        <div className="row" id="skillsContainer">
          {data.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="bar"
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.4, delay: 0.02 * index }}
                variants={{
                  hidden: { opacity: 0, translateX: -50, translateY: -50 },
                  visible: { opacity: 1, translateX: 0, translateY: 0 },
                }}
              >
                <Box
                  key={index}
                  i={index}
                  name={item.name}
                  icon={item.icon}
                  id={item.id}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
