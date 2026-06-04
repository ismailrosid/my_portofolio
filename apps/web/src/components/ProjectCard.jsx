import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechBadge from "./TechBadge";

function ProjectCard({ project, index }) {
  const MAX_TECH = 6;

  const visibleTech = project.techStack.slice(0, MAX_TECH);
  const remainingTech = project.techStack.length - MAX_TECH;

  return (
    <motion.div
      className="group h-full bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="transition-transform duration-500 group-hover:scale-110 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-2xl font-semibold line-clamp-1 mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed line-clamp-5 text-justify">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 min-h-[72px] mt-4 content-start">
          {visibleTech.map((tech, idx) => (
            <TechBadge key={idx} tech={tech} />
          ))}

          {remainingTech > 0 && (
            <span className="inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium text-muted-foreground">
              +{remainingTech}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-4">
          {project.demoLink && (
            <Button asChild size="sm" className="flex-1">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}

          {project.githubLink && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className={project.demoLink ? "" : "flex-1"}
            >
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
