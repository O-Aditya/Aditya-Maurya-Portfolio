"use client";

import { motion } from "framer-motion";
import { Server, Heart } from "lucide-react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 relative overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="flex items-center gap-2 text-xl font-bold">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Server className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="text-gradient font-mono">DevBackend</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Building robust backend solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-sm font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#home" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-primary transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="hover:text-primary transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-3">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@devbackend.com"
                    className="hover:text-primary transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold mb-3">Backend Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    System Design Patterns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Database Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API Best Practices
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Microservices Architecture
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DevBackend. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground flex items-center gap-1">
            Built with
            <Heart className="h-3 w-3 text-red-500 mx-1" />
            using Next.js & TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  );
}
