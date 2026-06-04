import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function BlogCard({ post, index }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold leading-snug">
          <Link
            to={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors duration-200"
          >
            {post.title}
          </Link>
        </h2>

        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

        <Button asChild variant="outline" className="mt-2">
          <Link to={`/blog/${post.slug}`}>Baca Artikel</Link>
        </Button>
      </div>
    </motion.article>
  );
}

export default BlogCard;
