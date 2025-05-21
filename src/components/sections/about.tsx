"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Code,
  GitBranch,
  Cloud,
  Cpu,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    },
  }),
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  color: string;
}

function FeatureCard({
  title,
  description,
  icon,
  index,
  color,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
    >
      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className={`rounded-full p-2 w-fit mb-4 ${color}`}>{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function AboutSection() {
  const features = [
    {
      title: "Backend Architecture",
      description:
        "Designing robust and scalable server architectures to handle high-traffic applications with efficient resource utilization.",
      icon: <Server className="h-6 w-6 text-primary" />,
      color: "bg-primary/10",
    },
    {
      title: "Database Design",
      description:
        "Creating optimized database schemas and query patterns for both SQL and NoSQL databases to ensure data integrity and performance.",
      icon: <Database className="h-6 w-6 text-secondary" />,
      color: "bg-secondary/10",
    },
    {
      title: "API Development",
      description:
        "Building RESTful and GraphQL APIs with comprehensive documentation, security measures, and efficient endpoint design.",
      icon: <Code className="h-6 w-6 text-accent" />,
      color: "bg-accent/10",
    },
    {
      title: "CI/CD Pipelines",
      description:
        "Implementing automated testing and deployment workflows to maintain code quality and ensure seamless releases.",
      icon: <GitBranch className="h-6 w-6 text-code-orange" />,
      color: "bg-code-orange/10",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Managing and optimizing cloud resources across AWS, GCP, and Azure with infrastructure as code practices.",
      icon: <Cloud className="h-6 w-6 text-code-blue" />,
      color: "bg-code-blue/10",
    },
    {
      title: "System Performance",
      description:
        "Identifying and resolving performance bottlenecks through profiling, monitoring, and optimization techniques.",
      icon: <Cpu className="h-6 w-6 text-code-green" />,
      color: "bg-code-green/10",
    },
    {
      title: "Security Implementation",
      description:
        "Applying security best practices including authentication, authorization, encryption, and vulnerability management.",
      icon: <ShieldCheck className="h-6 w-6 text-code-purple" />,
      color: "bg-code-purple/10",
    },
    {
      title: "Microservices",
      description:
        "Designing and implementing microservice architectures with effective service discovery and communication patterns.",
      icon: <RefreshCcw className="h-6 w-6 text-primary" />,
      color: "bg-primary/10",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
    >
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
            Crafting the <span className="text-gradient">Invisible Infrastructure</span> That Powers Modern Applications
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            I specialize in building the backbone of web applications, creating robust systems that efficiently handle data, logic, and security behind the scenes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              color={feature.color}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto bg-card/70 backdrop-blur-sm border border-border/50 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-muted-foreground mb-4">
            With over 5 years of experience in backend development, I've evolved from building simple CRUD APIs to architecting complex distributed systems that serve millions of users. My passion lies in creating elegant solutions to challenging technical problems while maintaining high standards for code quality and system performance.
          </p>
          <p className="text-muted-foreground">
            I thrive in collaborative environments where I can leverage my technical expertise to mentor junior developers and contribute to architectural decisions. My goal is always to build systems that are not only functionally correct but also maintainable, scalable, and secure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
