import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";
import { pageTransition } from "@/lib/animations";

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog - Alex Rivera</title>
        <meta
          name="description"
          content="Read articles about web development, testing, and software engineering best practices."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col ">
        <Header />

        <motion.main className="flex-1" {...pageTransition}>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="space-y-12">
              <div className="w-full">
                <h1 className="font-display text-4xl md:text-3xl font-bold leading-tight mb-6">
                  Blog
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Berbagi pengalaman, proyek, dan pembelajaran seputar Software
                  Engineering, Quality Assurance, Internet of Things (IoT),
                  serta Artificial Intelligence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {blogPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
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

export default BlogPage;
