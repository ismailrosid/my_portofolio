
import React from 'react';
import { Badge } from '@/components/ui/badge';

function TechBadge({ tech }) {
  return (
    <Badge 
      variant="secondary" 
      className="text-xs font-medium px-3 py-1 rounded-full"
    >
      {tech}
    </Badge>
  );
}

export default TechBadge;
