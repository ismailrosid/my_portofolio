
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import SocialLink from './SocialLink';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-4">
            <SocialLink 
              href="https://github.com" 
              icon={Github} 
              label="GitHub"
            />
            <SocialLink 
              href="https://linkedin.com" 
              icon={Linkedin} 
              label="LinkedIn"
            />
            <SocialLink 
              href="https://twitter.com" 
              icon={Twitter} 
              label="Twitter"
            />
            <SocialLink 
              href="mailto:contact@example.com" 
              icon={Mail} 
              label="Email"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a 
              href="/privacy" 
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a 
              href="/terms" 
              className="hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>

          <p className="text-sm">
            © {currentYear} Alex Rivera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
