"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Database, Server, Laptop, Terminal, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="#home"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Server className="h-7 w-7 text-primary" />
          </motion.div>
          <span className="text-gradient font-mono">Aditya Maurya</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-1 py-2 text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.href.replace("#", "")
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {activeSection === item.href.replace("#", "") && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center p-2 text-foreground/70 hover:text-primary"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </motion.button>
            </SheetTrigger>
            <SheetContent className="w-80">
              <div className="flex flex-col gap-8 py-8">
                <Link
                  href="#home"
                  className="flex items-center gap-2 text-xl font-bold"
                >
                  <Server className="h-6 w-6 text-primary" />
                  <span className="text-gradient font-mono">DevBackend</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        activeSection === item.href.replace("#", "")
                          ? "text-primary"
                          : "text-foreground/70"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-2 border-t pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Terminal className="h-4 w-4" />
                    <span>Backend Developer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Database className="h-4 w-4" />
                    <span>Data Engineer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Laptop className="h-4 w-4" />
                    <span>System Architect</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
