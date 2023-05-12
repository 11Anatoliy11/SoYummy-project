import { motion } from 'framer-motion';

export const MainPageTitle = ({ pageTitle, className }) => {
  const isVisible = className.includes('accent') ? true : false;

  return (
    <div className="relative">
      {!isVisible && (
        <div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{
              opacity: 1,
            }}
            className="
          absolute 
          bg-accentMain 
          rounded-[3px] 
          rotate-[-25deg] 
          w-2 md:w-3.5 
          h-2 md:h-3.5 
          top-[76px] 
          left-[104px] 
          md:top-[85px] 
          md:left-[187px] 
          xl:top-[116px] 
          xl:left-[228px] 
          size
          "
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            whileInView={{
              opacity: 1,
            }}
            className="
          absolute 
          bg-accentDark 
          dark:bg-whiteText

          rounded-[3px] 
          rotate-[-25deg] 
          w-1.5 md:w-3 
          h-1.5 md:h-3 
          top-[142px] 
          left-[231px] 
          md:top-[155px] 
          md:left-[405px] 
          lg:top-[155px] 
          lg:left-[437px] 
          xl:top-[199px] 
          xl:left-[707px] 
          size animate-pulse"
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            whileInView={{
              opacity: 1,
            }}
            className="
          absolute 
          bg-accentMain 
          rounded-[3px] 
          rotate-[-25deg] 
          opacity-90 
          w-2 md:w-3.5 
          h-2 md:h-3.5
          top-[109px] 
          right-[0px]  
          md:top-[98px] 
          xl:top-[129px] 
          xl:left-[1250px] 
         bg-gradient-to-r from-white to-white via-accentMain animate-gradient-x
          xl:right-[71px] 
          size"
          ></motion.div>
        </div>
      )}
      <h1 className={className}>{pageTitle}</h1>
    </div>
  );
};
