
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechBadge from './TechBadge';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <TechBadge key={idx} tech={tech} />
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {project.demoLink && (
            <Button 
              asChild 
              size="sm" 
              className="flex-1"
            >
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className={project.demoLink ? "" : "flex-1"}
          >
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
