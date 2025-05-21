"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Server, Cpu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const iconVariants = {
  initial: { scale: 0, opacity: 0, rotate: -15 },
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 1 + i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  }),
  hover: { y: -5, rotate: 5 },
};

const backends = [
  "Node.js",
  "Python",
  "Go",
  "Java",
  "PHP",
  "Ruby",
  "Rust",
  "C#",
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="relative w-full h-full"
      >
        <motion.div
          className="absolute top-[20%] left-[10%]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <Code className="h-6 w-6 text-primary/50" />
        </motion.div>
        <motion.div
          className="absolute top-[40%] left-[80%]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <Database className="h-8 w-8 text-secondary/60" />
        </motion.div>
        <motion.div
          className="absolute top-[70%] left-[20%]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <Server className="h-7 w-7 text-accent/60" />
        </motion.div>
        <motion.div
          className="absolute top-[30%] left-[60%]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <Cpu className="h-6 w-6 text-code-orange/60" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export function HeroSection() {
  const [currentBackend, setCurrentBackend] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackend((prev) => (prev + 1) % backends.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <FloatingIcons />

      <div className="container px-4 pt-10 md:pt-0 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium inline-block">
              Backend Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Building robust{" "}
            <span className="text-gradient">server-side solutions</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-xl md:text-2xl text-muted-foreground"
          >
            Specialized in scalable applications with{" "}
            <motion.span
              key={currentBackend}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-medium text-primary inline-block min-w-20"
            >
              {backends[currentBackend]}
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 flex-col sm:flex-row justify-center"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full font-medium gap-2 group"
            >
              <Link href="#projects">
                Explore Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-medium"
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-20 relative"
        >
          <div className="terminal-bg max-w-3xl mx-auto overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-muted-foreground font-mono">
                terminal ~ backend-services
              </div>
            </div>
            <div className="font-mono text-sm">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.3 }}
                className="terminal-text"
              >
                $ npm init backend-service
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.3 }}
                className="text-muted-foreground"
              >
                Initializing backend service...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.3 }}
                className="text-muted-foreground"
              >
                Installing dependencies: express, mongodb, redis, socket.io
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.3 }}
                className="text-muted-foreground"
              >
                Setting up database connections...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.0, duration: 0.3 }}
                className="text-muted-foreground"
              >
                Configuring authentication middleware...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.3 }}
                className="text-muted-foreground"
              >
                Creating API routes...
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.0, duration: 0.3 }}
                className="terminal-text"
              >
                $ node server.js
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5, duration: 0.3 }}
                className="text-green-400"
              >
                Server started on port 3000
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
