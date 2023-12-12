import { motion } from "framer-motion";
import styled from "styled-components";

export default function Loading() {
  return (
    <Article>
      <h2>Loading</h2>
      <motion.div className="rail">
        <motion.div
          className="ball"
          initial={{
            left: 0,
            transform: "translateY(-50%)",
            backgroundColor: "#34eb9b",
          }}
          animate={{
            left: "176px",
            transform: "translateY(-50%)",
            backgroundColor: "#1d0aab",
          }}
          transition={{
            ease: "linear",
            duration: 1.25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </motion.div>
    </Article>
  );
}

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  h2 {
    font-size: 48px;
  }

  .rail {
    height: 2rem;
    width: 200px;
    background-image: linear-gradient(to right, red, orange);
    border-radius: 100vw;
    padding-inline: 0.2rem;

    position: relative;
  }

  .ball {
    width: 1.6rem;
    aspect-ratio: 1;
    border-radius: 100vw;

    position: absolute;
    top: 50%;
  }
`;
