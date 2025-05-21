"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  CheckIcon,
  SendIcon,
  Terminal,
} from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormState({ name: "", email: "", message: "" });

      // Reset success state after delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Interested in working together or have a question about backend
            development? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Have a project in mind or looking for a backend developer to
                  join your team? I'm always open to discussing new opportunities
                  and challenges.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MailIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:contact@devbackend.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@devbackend.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">
                        Based in
                      </h4>
                      <p className="text-muted-foreground">
                        San Francisco, CA (Remote Available)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="text-sm font-semibold mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="p-3 rounded-full bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary border border-border transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary border border-border transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary border border-border transition-colors"
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-card/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-card/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border bg-card/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full h-12 rounded-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckIcon className="h-4 w-4" />
                        <span>Sent!</span>
                      </>
                    ) : (
                      <>
                        <SendIcon className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="terminal-bg max-w-3xl mx-auto mt-16 mb-8 p-4 rounded-lg"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-muted-foreground font-mono">
            terminal ~ collaboration
          </div>
        </div>
        <div className="terminal-text text-sm font-mono">
          <p>$ ./start-collaboration.sh --project=your-next-project</p>
          <p>Initializing connection...</p>
          <p>Setting up development environment...</p>
          <p className="text-green-400">
            Ready to collaborate! Awaiting your message.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
