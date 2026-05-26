
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TimelineItem from '@/components/TimelineItem';
import TechBadge from '@/components/TechBadge';
import { experience } from '@/data/experience';
import { pageTransition } from '@/lib/animations';

function AboutPage() {
  const techStack = {
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    testing: ['Selenium', 'Cypress', 'Jest', 'Playwright', 'Postman'],
    tools: ['Git', 'Docker', 'Jenkins', 'AWS', 'Figma']
  };

  return (
    <>
      <Helmet>
        <title>About - Alex Rivera</title>
        <meta name="description" content="Learn more about Alex Rivera's background, skills, and professional experience in fullstack development and QA engineering." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <motion.main 
          className="flex-1"
          {...pageTransition}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto space-y-20">
              <section className="space-y-6">
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                  About Me
                </h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a fullstack developer and QA engineer with a passion for building high-quality web applications. With over 6 years of experience in the industry, I've worked on projects ranging from e-commerce platforms to enterprise dashboards, always focusing on delivering exceptional user experiences and maintainable code.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My unique combination of development and testing expertise allows me to build applications with quality baked in from the start. I believe in writing clean, testable code and implementing comprehensive testing strategies to ensure reliability and performance.
                  </p>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-semibold">Tech Stack</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.frontend.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.backend.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Testing</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.testing.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.tools.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-semibold">Work Experience</h2>
                
                <div className="space-y-0">
                  {experience.map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      company={item.company}
                      position={item.position}
                      duration={item.duration}
                      description={item.description}
                      index={index}
                    />
                  ))}
                </div>
              </section>

              <section className="flex justify-center pt-8">
                <Button size="lg" className="text-base">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </section>
            </div>
          </div>
        </motion.main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
