import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs each representing a step of the stairs.
      Each div will have the same animation defined by the stairAnimation object.
      The delay for each div is calculated dynamically based on its reversed index,
      creating a staggered effect with decreasing delay for each subsequnt step. */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={stairAnimation}
            transition={{
              duration: 0.4,
              delay: reverseIndex(index) * 0.1,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
