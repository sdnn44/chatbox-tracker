import React from "react";
import { SpammerPodium } from "../../components/SpammerPodium/SpammerPodium";
import { SpammerTable } from "../../components/SpammerTable/SpammerTable";
import { motion, useIsPresent } from "framer-motion";

export const Spammer = () => {
  const isPresent = useIsPresent();

  return (
    <div>
      <SpammerPodium />
      <SpammerTable />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
};
