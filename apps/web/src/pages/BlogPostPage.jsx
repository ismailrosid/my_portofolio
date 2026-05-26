
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import { pageTransition } from '@/lib/animations';

function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post Not Found - Alex Rivera</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Post not found</h1>
              <Button asChild>
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>{`${post.title} - Alex Rivera`}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <motion.main 
          className="flex-1"
          {...pageTransition}
        >
          <article className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <header className="space-y-6 mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{formattedDate}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="mt-8 p-6 bg-muted rounded-xl">
                <p className="text-muted-foreground">
                  Note: Full MDX blog post rendering requires Vite configuration with @mdx-js/rollup plugin. The blog post structure and metadata are in place. To enable full MDX compilation, the vite.config.js file would need to be updated with the MDX plugin configuration.
                </p>
              </div>
            </div>
          </article>
        </motion.main>

        <Footer />
      </div>
    </>
  );
}

export default BlogPostPage;
