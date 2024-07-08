import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 0.3, ease: "easeInOut" }}
    >
      <Hero />
      <Tools />
    </motion.main>
  );
}
