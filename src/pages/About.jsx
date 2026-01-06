import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen px-6 py-20 pt-28 bg-gray-50 flex items-center">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          About Us
        </motion.h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-gray-600 text-lg leading-relaxed mx-auto"
        >
          At{" "}
          <span className="font-semibold text-indigo-600">
            SoftProgrammer
          </span>
          , we specialize in transforming ideas into impactful digital
          solutions. Our mission is to deliver cutting-edge, scalable, and
          secure software powered by modern technologies and innovation.
          We build reliable digital products that help businesses grow
          and adapt in an evolving tech-driven world.
        </motion.p>

        
  

      </div>
    </section>
  );
}
