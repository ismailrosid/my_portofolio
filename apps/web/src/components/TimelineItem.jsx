
import React from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '@/lib/animations';

function TimelineItem({ company, position, duration, description, index }) {
  return (
    <motion.div
      className="relative pl-8 pb-12 border-l-2 border-border last:pb-0"
      initial={slideUp.initial}
      whileInView={slideUp.animate}
      viewport={{ once: true }}
      transition={{ ...slideUp.transition, delay: index * 0.1 }}
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl font-semibold">{position}</h3>
          <span className="text-sm text-muted-foreground font-medium">{duration}</span>
        </div>
        <p className="text-base font-medium text-primary">{company}</p>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default TimelineItem;
