import type { IconSkill } from "@/types/Skills";
import React from "react";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
const SkillBar: FunctionComponent<{ data: IconSkill }> = ({
  data: { name, level, Icon },
}) => {

  return (
    <div className="text-slate-300 font-semibold text-[17px] my-1 rounded-full">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}` }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={`px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-black to-white `}
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default SkillBar;
