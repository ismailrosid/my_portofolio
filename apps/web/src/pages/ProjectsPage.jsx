
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { pageTransition } from '@/lib/animations';

function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects - Alex Rivera</title>
        <meta name="description" content="Explore Alex Rivera's portfolio of web development and QA engineering projects." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <motion.main 
          className="flex-1"
          {...pageTransition}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="space-y-12">
              <div className="max-w-3xl">
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Featured Projects
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A collection of projects showcasing my expertise in fullstack development, testing automation, and modern web technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.main>

        <Footer />
      </div>
    </>
  );
}

export default ProjectsPage;
