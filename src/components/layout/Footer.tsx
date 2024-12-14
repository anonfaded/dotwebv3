"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-primary-darker text-secondary-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DotWeb</h3>
            <p className="text-neutral-base/80">
              Workflows Built for Reduced Overhead and Better Results
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${lang}/privacy`}
                  className="text-neutral-base/60 hover:text-neutral-base transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang}/terms`}
                  className="text-neutral-base/60 hover:text-neutral-base transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang}/impressum`}
                  className="text-neutral-base/60 hover:text-neutral-base transition-colors"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-neutral-base/60">
                Email: contact@dotweb.com
              </li>
              <li className="text-neutral-base/60">
                Tel: +49 123 456 789
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-base/20 text-center text-sm text-neutral-base/60">
          <p> {new Date().getFullYear()} DotWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
