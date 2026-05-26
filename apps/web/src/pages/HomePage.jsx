import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { staggerContainer, staggerItem } from "@/lib/animations";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Ismail Rosid - Fullstack Developer & QA Engineer</title>
        <meta
          name="description"
          content="Portfolio ofIsmail Rosid, a fullstack developer and QA engineer specializing in React, Node.js, and automated testing."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1687006067259-6de13ca3875e)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                className="max-w-4xl mx-auto text-center space-y-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.div variants={staggerItem}>
                  <h1
                    className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    ISMAIL ROSID
                  </h1>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <p className="text-2xl md:text-3xl font-semibold text-primary">
                    Fullstack Developer & QA Engineer
                  </p>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Building robust web applications with modern technologies
                    and ensuring quality through comprehensive testing
                    strategies. Passionate about creating seamless user
                    experiences and maintainable code.
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                >
                  <Button asChild size="lg" className="text-base">
                    <Link to="/projects">
                      View My Work
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base"
                  >
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
