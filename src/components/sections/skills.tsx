"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface Skill {
  name: string;
  level: number;
  category: "language" | "database" | "cloud" | "tool" | "framework";
  description: string;
  icon?: string;
}

const skills: Skill[] = [
  // Languages
  {
    name: "JavaScript",
    level: 95,
    category: "language",
    description: "Expert in modern JS (ES6+) with deep understanding of async patterns, modules, and functional programming concepts.",
  },
  {
    name: "TypeScript",
    level: 90,
    category: "language",
    description: "Proficient in TypeScript for building type-safe applications with interfaces, generics, and advanced type features.",
  },
  {
    name: "Python",
    level: 85,
    category: "language",
    description: "Skilled in Python for backend services, data processing, and scripting with knowledge of Django and FastAPI.",
  },
  {
    name: "Go",
    level: 75,
    category: "language",
    description: "Strong experience with Go for high-performance microservices and concurrent systems.",
  },
  {
    name: "Java",
    level: 70,
    category: "language",
    description: "Experienced with Java for enterprise applications using Spring Boot and JPA.",
  },
  {
    name: "Rust",
    level: 60,
    category: "language",
    description: "Growing experience with Rust for performance-critical components and systems programming.",
  },

  // Databases
  {
    name: "PostgreSQL",
    level: 90,
    category: "database",
    description: "Expert in PostgreSQL including complex queries, performance optimization, and advanced features like stored procedures and triggers.",
  },
  {
    name: "MongoDB",
    level: 85,
    category: "database",
    description: "Proficient with MongoDB for document databases, including aggregation framework, indexes, and replica sets.",
  },
  {
    name: "Redis",
    level: 80,
    category: "database",
    description: "Strong experience with Redis for caching, pub/sub messaging, and distributed locks.",
  },
  {
    name: "Elasticsearch",
    level: 75,
    category: "database",
    description: "Skilled in Elasticsearch for implementing search functionality with complex queries and aggregations.",
  },
  {
    name: "DynamoDB",
    level: 70,
    category: "database",
    description: "Experience with DynamoDB for high-throughput applications with knowledge of single-table design patterns.",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    level: 85,
    category: "cloud",
    description: "Extensive experience with AWS services like Lambda, EC2, S3, RDS, SQS, and more for cloud-native applications.",
  },
  {
    name: "Docker",
    level: 90,
    category: "cloud",
    description: "Expert in containerization with Docker for development and production environments.",
  },
  {
    name: "Kubernetes",
    level: 80,
    category: "cloud",
    description: "Proficient with Kubernetes for container orchestration, including deployments, services, and StatefulSets.",
  },
  {
    name: "Terraform",
    level: 75,
    category: "cloud",
    description: "Strong experience with Terraform for infrastructure as code across multiple cloud providers.",
  },
  {
    name: "CI/CD",
    level: 85,
    category: "cloud",
    description: "Skilled in implementing CI/CD pipelines using GitHub Actions, Jenkins, and GitLab CI.",
  },

  // Frameworks & Tools
  {
    name: "Node.js",
    level: 95,
    category: "framework",
    description: "Expert in Node.js for building scalable backend services, with deep understanding of its event loop and async model.",
  },
  {
    name: "Express",
    level: 90,
    category: "framework",
    description: "Extensive experience with Express.js for building RESTful APIs and web applications.",
  },
  {
    name: "GraphQL",
    level: 85,
    category: "framework",
    description: "Proficient with GraphQL for flexible API development, including schemas, resolvers, and subscriptions.",
  },
  {
    name: "Kafka",
    level: 80,
    category: "tool",
    description: "Strong experience with Apache Kafka for building event-driven architectures and data streaming pipelines.",
  },
  {
    name: "gRPC",
    level: 75,
    category: "tool",
    description: "Experience with gRPC for efficient microservice communication using Protocol Buffers.",
  },
  {
    name: "RabbitMQ",
    level: 70,
    category: "tool",
    description: "Knowledge of RabbitMQ for implementing message queues and pub/sub patterns.",
  },
];

function SkillCategory({
  title,
  category,
  activeCategory,
  onClick,
}: {
  title: string;
  category: string;
  activeCategory: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all",
        activeCategory === category
          ? "bg-primary text-primary-foreground"
          : "bg-primary/10 text-primary hover:bg-primary/20"
      )}
    >
      {title}
    </button>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-0.5"
        >
          <div className="relative overflow-hidden rounded-full border border-border/50 bg-card/50 backdrop-blur-sm p-4 hover:bg-card/80 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">{skill.name}</h3>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={cn(
                  "h-full rounded-full",
                  skill.category === "language" && "bg-primary",
                  skill.category === "database" && "bg-secondary",
                  skill.category === "cloud" && "bg-accent",
                  skill.category === "framework" && "bg-code-orange",
                  skill.category === "tool" && "bg-code-purple"
                )}
              />
            </div>
          </div>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{skill.name}</h4>
          <p className="text-sm text-muted-foreground">{skill.description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export function SkillsSection() {
  const [category, setCategory] = useState<string>("all");

  const filteredSkills =
    category === "all"
      ? skills
      : skills.filter((skill) => skill.category === category);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A comprehensive overview of my technical skills, tools, and technologies I've mastered throughout my career in backend development.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <SkillCategory
            title="All Skills"
            category="all"
            activeCategory={category}
            onClick={() => setCategory("all")}
          />
          <SkillCategory
            title="Languages"
            category="language"
            activeCategory={category}
            onClick={() => setCategory("language")}
          />
          <SkillCategory
            title="Databases"
            category="database"
            activeCategory={category}
            onClick={() => setCategory("database")}
          />
          <SkillCategory
            title="Cloud & DevOps"
            category="cloud"
            activeCategory={category}
            onClick={() => setCategory("cloud")}
          />
          <SkillCategory
            title="Frameworks"
            category="framework"
            activeCategory={category}
            onClick={() => setCategory("framework")}
          />
          <SkillCategory
            title="Tools"
            category="tool"
            activeCategory={category}
            onClick={() => setCategory("tool")}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="terminal-bg p-4 rounded-lg">
            <p className="terminal-text text-sm font-mono leading-relaxed">
              <span className="opacity-70"># Continuous Learning Policy</span><br />
              <span className="opacity-90">function</span> <span className="text-code-orange">learnNewTechnology</span>(<span className="text-secondary">technology</span>) {'{'}
              <br />
              &nbsp;&nbsp;<span className="opacity-90">if</span> (<span className="text-secondary">technology.isRelevant</span> && <span className="text-secondary">technology.hasPotential</span>) {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="opacity-90">const</span> <span className="text-code-blue">roadmap</span> = <span className="text-code-orange">createLearningPath</span>(<span className="text-secondary">technology</span>);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="opacity-90">return</span> <span className="text-code-orange">implementInProject</span>(<span className="text-code-blue">roadmap</span>);
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              {'}'};
            </p>
          </div>
          <p className="mt-6 text-muted-foreground">
            I'm committed to continuous learning and staying updated with the latest backend technologies and best practices in the industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
