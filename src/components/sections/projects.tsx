"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Server,
  Database,
  Cloud,
  Code,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Technology {
  name: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  type: "api" | "database" | "cloud" | "full-stack";
  technologies: Technology[];
  links: {
    github?: string;
    live?: string;
  };
  details: {
    challenge: string;
    solution: string;
    architecture: string[];
    performance: string;
  };
}

const projects: Project[] = [
  {
    id: "microservice-platform",
    title: "E-Commerce Microservice Platform",
    description:
      "A scalable microservice architecture for high-volume e-commerce operations with distributed transaction handling.",
    technologies: [
      { name: "Node.js", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "Kafka", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "MongoDB", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300" },
      { name: "Docker", color: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300" },
      { name: "Kubernetes", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
    ],
    type: "full-stack",
    links: {
      github: "#",
      live: "#",
    },
    details: {
      challenge:
        "Building a system capable of handling thousands of concurrent transactions while maintaining data consistency across multiple services.",
      solution:
        "Implemented a saga pattern for distributed transactions with compensating actions to ensure eventual consistency. Used Kafka as the messaging backbone for event-driven communication between services.",
      architecture: [
        "API Gateway for request routing and aggregation",
        "Authentication service with JWT",
        "Product catalog service with caching layer",
        "Order processing service with state machine workflow",
        "Inventory management service with optimistic locking",
        "Payment processing service with retry mechanism",
      ],
      performance:
        "System handles 500+ transactions per second with 99.9% uptime and average response time under 200ms.",
    },
  },
  {
    id: "realtime-analytics",
    title: "Real-time Analytics Pipeline",
    description:
      "High-throughput data processing system for real-time analytics on user behavior and system metrics.",
    technologies: [
      { name: "Python", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      { name: "Apache Spark", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "Redis", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      { name: "AWS", color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300" },
    ],
    type: "database",
    links: {
      github: "#",
    },
    details: {
      challenge:
        "Processing and analyzing millions of events per minute while providing near real-time insights for business decisions.",
      solution:
        "Designed a lambda architecture with a speed layer for real-time processing and a batch layer for accurate aggregations. Used Redis for caching hot data and PostgreSQL for persistent storage.",
      architecture: [
        "Event ingestion API with rate limiting and buffering",
        "Stream processing with Spark Structured Streaming",
        "Time-series database for metrics storage",
        "Real-time alerting system with configurable thresholds",
        "Dashboard API with websocket connections for live updates",
      ],
      performance:
        "Processes over 50,000 events per second with end-to-end latency under 5 seconds for analytics queries.",
    },
  },
  {
    id: "secure-api-gateway",
    title: "Secure API Gateway",
    description:
      "Enterprise-grade API gateway with advanced security features, rate limiting, and comprehensive monitoring.",
    technologies: [
      { name: "Go", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300" },
      { name: "OAuth 2.0", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
      { name: "Prometheus", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "gRPC", color: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300" },
    ],
    type: "api",
    links: {
      github: "#",
      live: "#",
    },
    details: {
      challenge:
        "Securing internal APIs while providing seamless access for legitimate clients and protecting against common API vulnerabilities.",
      solution:
        "Built a security-focused API gateway in Go with multi-layered protection: OAuth2.0 with JWTs, rate limiting by client ID, request validation, and threat detection.",
      architecture: [
        "Authentication and authorization middleware",
        "Request validation and sanitization",
        "Rate limiting and throttling",
        "Circuit breaking for backend protection",
        "Detailed audit logging",
        "Real-time metrics and alerting",
      ],
      performance:
        "Handles 10,000+ requests per second with p99 latency under 50ms and blocks 99.9% of malicious requests.",
    },
  },
  {
    id: "distributed-cache",
    title: "Distributed Caching System",
    description:
      "High-performance distributed caching system with intelligent prefetching and adaptive eviction policies.",
    technologies: [
      { name: "Rust", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "Redis", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      { name: "Consistent Hashing", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
    ],
    type: "database",
    links: {
      github: "#",
    },
    details: {
      challenge:
        "Reducing database load and API latency for a system with billions of daily requests and terabytes of data.",
      solution:
        "Implemented a multi-tier caching strategy with in-memory, distributed, and persistent layers. Used machine learning for predictive prefetching of frequently accessed data.",
      architecture: [
        "Local memory cache with LRU eviction",
        "Distributed Redis cluster with consistent hashing",
        "Write-through and write-back strategies",
        "Cache invalidation via pub/sub messages",
        "Automated warm-up for cold starts",
        "Intelligent prefetching based on access patterns",
      ],
      performance:
        "Achieved 95% cache hit rate, reducing average API response time from 250ms to 15ms and database load by 80%.",
    },
  },
];

function getIconForType(type: string) {
  switch (type) {
    case "api":
      return <Code className="h-5 w-5" />;
    case "database":
      return <Database className="h-5 w-5" />;
    case "cloud":
      return <Cloud className="h-5 w-5" />;
    case "full-stack":
      return <Server className="h-5 w-5" />;
    default:
      return <Code className="h-5 w-5" />;
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              {getIconForType(project.type)}
            </div>
            <Badge variant="outline" className="capitalize">
              {project.type.replace("-", " ")}
            </Badge>
          </div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech.name} className={tech.color}>
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
        <CardFooter className="p-6 pt-0 mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="mr-2 gap-2">
                View Details
                <ChevronRight className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                <DialogDescription className="text-foreground/70">
                  {project.description}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech.name} className={tech.color}>
                      {tech.name}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                    <p className="text-muted-foreground">
                      {project.details.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">The Solution</h4>
                    <p className="text-muted-foreground">
                      {project.details.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Architecture</h4>
                    <ul className="ml-5 space-y-1 list-disc text-muted-foreground">
                      {project.details.architecture.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Performance</h4>
                    <p className="text-muted-foreground">
                      {project.details.performance}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button size="sm" className="gap-2" asChild>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {project.links.github && (
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.links.live && (
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter((project) => project.type === filter)
    : projects;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
            Featured <span className="text-gradient">Backend Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A collection of my most significant work demonstrating expertise in
            backend development, system architecture, and database design.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
            className="rounded-full"
          >
            All
          </Button>
          <Button
            variant={filter === "api" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("api")}
            className="rounded-full gap-2"
          >
            <Code className="h-4 w-4" />
            API
          </Button>
          <Button
            variant={filter === "database" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("database")}
            className="rounded-full gap-2"
          >
            <Database className="h-4 w-4" />
            Database
          </Button>
          <Button
            variant={filter === "cloud" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("cloud")}
            className="rounded-full gap-2"
          >
            <Cloud className="h-4 w-4" />
            Cloud
          </Button>
          <Button
            variant={filter === "full-stack" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("full-stack")}
            className="rounded-full gap-2"
          >
            <Server className="h-4 w-4" />
            Full-Stack
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
