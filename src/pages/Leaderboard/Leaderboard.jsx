import React from 'react'
import { Table } from '../../components/Table/Table'
import { Podium } from '../../components/Podium/Podium'
import { motion, useIsPresent } from "framer-motion";

export const Leaderboard = () => {
  const isPresent = useIsPresent();

  return (
    <div>
      <Podium />
      <Table />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  )
}
