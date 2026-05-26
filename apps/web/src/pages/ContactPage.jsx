
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { pageTransition } from '@/lib/animations';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact - Alex Rivera</title>
        <meta name="description" content="Get in touch with Alex Rivera for collaboration opportunities, project inquiries, or just to say hello." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <motion.main 
          className="flex-1"
          {...pageTransition}
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Get In Touch
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-card rounded-2xl p-8 shadow-lg">
                    <ContactForm />
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 space-y-6">
                    <h2 className="text-2xl font-semibold">Contact Information</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground flex-shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Email</p>
                          <a 
                            href="mailto:contact@alexrivera.dev" 
                            className="hover:text-primary transition-colors duration-200"
                          >
                            contact@alexrivera.dev
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground flex-shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium mb-1">Location</p>
                          <p>San Francisco, CA</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted text-muted-foreground rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                    <p className="leading-relaxed">
                      I typically respond to messages within 24-48 hours during business days. For urgent inquiries, please mention it in your message subject.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
