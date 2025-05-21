"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: "senior-backend",
    role: "Senior Backend Engineer",
    company: "TechSolutions Inc.",
    period: "2022 - Present",
    description:
      "Leading the development of microservices architecture for high-volume financial data processing systems. Responsible for designing and implementing core backend services, optimizing database performance, and mentoring junior developers.",
    highlights: [
      "Redesigned the event-driven architecture resulting in 40% improved system throughput",
      "Implemented comprehensive monitoring and alerting system using Prometheus and Grafana",
      "Established coding standards and review processes across backend teams",
      "Led migration from monolith to microservices architecture",
      "Optimized database queries reducing response times by 60%",
    ],
    technologies: ["Node.js", "TypeScript", "MongoDB", "Kafka", "Docker", "Kubernetes", "AWS"],
  },
  {
    id: "backend-dev",
    role: "Backend Developer",
    company: "DataStream Systems",
    period: "2020 - 2022",
    description:
      "Developed and maintained RESTful APIs and GraphQL services for a real-time analytics platform. Responsible for implementing data processing pipelines and integrating with various third-party systems.",
    highlights: [
      "Built scalable API endpoints handling 500+ requests per second",
      "Designed and implemented data aggregation pipelines for real-time analytics",
      "Created an automated testing framework that increased test coverage by 75%",
      "Developed secure authentication and authorization system with OAuth 2.0",
      "Implemented caching strategies that reduced database load by 50%",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "ElasticSearch", "GCP"],
  },
  {
    id: "software-eng",
    role: "Software Engineer",
    company: "CloudInnovate",
    period: "2018 - 2020",
    description:
      "Worked on cloud-based workflow automation solutions for enterprise clients. Contributed to the core backend services, database design, and integration with cloud infrastructure.",
    highlights: [
      "Developed serverless functions for document processing services",
      "Implemented database migration system with zero downtime",
      "Created background job processing system for resource-intensive tasks",
      "Built REST API integrations with multiple SaaS platforms",
      "Improved CI/CD pipeline reducing deployment time by 70%",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "AWS Lambda", "Docker", "Jenkins"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
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
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            My career path in backend development, showcasing the roles and
            projects that have shaped my expertise.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:translate-x-px" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-16 md:mb-12 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2"
                  : "md:pl-12 md:ml-1/2"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-7 bg-card border-2 border-primary rounded-full w-5 h-5 z-10 hidden md:block ${
                  index % 2 === 0 ? "md:-right-3.5" : "md:-left-2.5"
                }`}
              />

              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{experience.role}</h3>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {experience.period}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-primary mb-4">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {experience.description}
                  </p>
                  <div className="space-y-1 mb-6">
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-8 text-center"
        >
          <div className="terminal-bg p-4 rounded-lg">
            <p className="terminal-text text-sm font-mono">
              <span className="opacity-70">$ git log --all --pretty=format:"%h %s" --graph</span><br />
              <span className="opacity-90">* 4f5d8c2</span> Currently working on scaling distributed systems<br />
              <span className="opacity-90">* 2b9e7a1</span> Optimized database query performance<br />
              <span className="opacity-90">* 9c3d5f8</span> Implemented event-driven architecture<br />
              <span className="opacity-90">* 7a1b3c5</span> Built real-time data processing pipeline<br />
              <span className="opacity-90">* 5e3d7c9</span> Developed authentication microservice<br />
              <span className="opacity-90">* 1a9b7c5</span> Started backend development journey
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
