"use client";

import { motion } from 'framer-motion';

export default function AIWidget() {
  return (
    <section className="relative h-[800px] w-full bg-gradient-to-b from-transparent to-gray-100">
      <motion.div
        className="sticky top-[30%] mx-auto w-full max-w-5xl transform px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold">AI-Powered Solutions</h2>
            <p className="text-lg text-gray-600">
              Experience the future of automation with our cutting-edge AI technology
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Smart Workflows</h3>
              <p className="text-gray-600">
                Automate complex business processes with AI-driven decision making
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Predictive Analytics</h3>
              <p className="text-gray-600">
                Make data-driven decisions with advanced predictive models
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Natural Language Processing</h3>
              <p className="text-gray-600">
                Process and understand human language for better interactions
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Custom AI Solutions</h3>
              <p className="text-gray-600">
                Tailored AI solutions designed for your specific needs
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
