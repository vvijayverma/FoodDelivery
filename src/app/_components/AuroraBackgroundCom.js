"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import SectionHeader from './SectionHeader';

export function AuroraBackgroundCom() {
  return (
    <section className="text-center mt-16 mb-4" id="about">
        <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="max-w-lg mx-auto md:text-lg font-bold dark:text-white text-center text-gray-700">
            Welcome to EazyEats, where we bring delicious food straight to your
            doorstep. Our mission is simple: connect you with your favorite
            local restaurants and deliver meals that satisfy every craving.
            We’re passionate about providing a seamless and convenient food
            delivery experience,
            </div>
            <div className="max-w-lg mx-auto md:text-lg font-bold dark:text-white text-center text-gray-700">
            ensuring that quality and taste are never compromised. Our dedicated
            team works closely with trusted restaurants, curating a diverse menu
            for every palate. Whether it’s a quick bite or a family feast,
            </div>
            <div className="max-w-lg mx-auto md:text-lg font-bold dark:text-white text-center text-gray-700">
            we’re here to make every meal special. At EazyEats, we’re more than
            just delivery—we’re about great food and happy moments.
            </div>
          </motion.div>
        </AuroraBackground>
      </section>
  );
}
