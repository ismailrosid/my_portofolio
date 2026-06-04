import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TimelineItem from "@/components/TimelineItem";
import TechBadge from "@/components/TechBadge";
import { experience, trainings, certifications } from "@/data/experience";
import { pageTransition } from "@/lib/animations";

function AboutPage() {
  const techStack = {
    frontend: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],

    backend: [
      "Laravel",
      "PHP",
      "CodeIgniter",
      "Node.js",
      "Express.js",
      "REST API",
    ],

    database: ["MySQL", "PostgreSQL", "MongoDB"],

    testing: ["Postman", "Playwright", "Selenium", "UAT Testing"],

    embedded_iot: [
      "ESP32",
      "Arduino",
      "NodeMCU",
      "Raspberry Pi",
      "Sensors & Actuators",
      "Displays",
    ],

    machine_learning: ["YOLO", "Computer Vision"],

    tools: [
      "Git",
      "GitHub",
      "Linux",
      "Docker",
      "VS Code",
      "Flyway",
      "Arduino IDE",
      "Roboflow",
      "Google Colab",
    ],
  };
  return (
    <>
      <Helmet>
        <title>About - Alex Rivera</title>
        <meta
          name="description"
          content="Learn more about Alex Rivera's background, skills, and professional experience in fullstack development and QA engineering."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <motion.main className="flex-1" {...pageTransition}>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto space-y-20">
              <section className="space-y-6">
                <h1 className="font-display text-1xl md:text-3xl font-bold leading-tight">
                  Tentang Saya
                </h1>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    Saya adalah lulusan S1 Teknik Informatika yang memiliki
                    minat dalam pengembangan perangkat lunak, quality assurance,
                    Internet of Things (IoT), dan kecerdasan buatan. Saya senang
                    membangun solusi digital yang tidak hanya berfungsi dengan
                    baik, tetapi juga memberikan manfaat nyata bagi pengguna dan
                    bisnis.
                  </p>

                  <p className="mt-2 text-muted-foreground leading-relaxed text-justify">
                    Selama perjalanan akademik dan profesional, saya telah
                    mengembangkan berbagai aplikasi web, sistem informasi, serta
                    proyek berbasis IoT dan machine learning menggunakan
                    teknologi seperti Laravel, React, MySQL, ESP32, RFID, dan
                    YOLO. Saya percaya bahwa teknologi yang baik adalah
                    teknologi yang mampu menyelesaikan permasalahan secara
                    efektif, efisien, dan berkelanjutan.
                  </p>
                </div>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl md:text-3xl font-semibold">
                  Teknologi yang Saya Gunakan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Frontend */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.frontend.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.backend.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Database</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.database.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Testing */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Testing & QA</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.testing.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>

                  {/* IoT */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">IoT & Embedded</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.embedded_iot.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Machine Learning */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">
                      AI & Machine Learning
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.machine_learning.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="space-y-4 md:col-span-2">
                    <h3 className="text-xl font-semibold">Tools & Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.tools.map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-12">
                {/* Pengalaman Profesional */}
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-3xl font-semibold">
                    Pengalaman Profesional
                  </h2>

                  <div className="space-y-0">
                    {experience.map((item, index) => (
                      <TimelineItem
                        key={item.id}
                        company={item.company}
                        position={item.position}
                        duration={item.duration}
                        description={item.description}
                        index={index}
                      />
                    ))}
                  </div>
                </div>

                {/* Pelatihan */}
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-3xl font-semibold">
                    Pelatihan
                  </h2>

                  <div className="space-y-0">
                    {trainings.map((item, index) => (
                      <TimelineItem
                        key={item.id}
                        company={item.organizer}
                        position={item.title}
                        duration={item.duration}
                        description={item.description}
                        index={index}
                      />
                    ))}
                  </div>
                </div>

                {/* Sertifikasi */}
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-3xl font-semibold">
                    Sertifikasi
                  </h2>

                  <div className="space-y-0">
                    {certifications.map((item, index) => (
                      <TimelineItem
                        key={item.id}
                        company={item.issuer}
                        position={item.title}
                        duration={item.year}
                        description={item.description}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </section>
              <section className="flex justify-center pt-8">
                <Button size="lg" className="text-base">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </section>
            </div>
          </div>
        </motion.main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
