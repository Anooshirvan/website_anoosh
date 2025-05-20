import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, Github } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      
      <HeroSection
        title="Energy Engineer & Data Scientist"
        subtitle="Dedicated to sustainable energy solutions and data-driven insights"
        image="/plant3.jpg"
        imageAlt="Combined Power Plant"
      />
      
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <section className="mb-16 sm:mb-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full">
                <span className="text-sm font-medium">About Me</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">Anooshirvan Mostmand</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                I'm an Energy Engineer and Data Scientist with expertise in energy systems, 
                renewable energy integration, and data-driven solutions. With a background in 
                Mechanical Engineering and an MSc in Energy and Nuclear Engineering, I combine 
                technical knowledge with analytical skills to address complex energy challenges.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                My work focuses on optimizing energy systems, reducing environmental impact, 
                and leveraging data science to enhance decision-making in the energy sector. 
                I'm passionate about sustainable solutions and innovative approaches to energy 
                efficiency.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a href="/Anooshirvan_Mostmand_CV.pdf" download>
                  <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 transition-colors text-sm sm:text-base">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </button>
                </a>
                <a href="mailto:anooshirvan.mostmand@gmail.com">
                  <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-blue-200 hover:bg-blue-50 hover:text-blue-700 text-blue-700 transition-colors text-sm sm:text-base">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
            
            <div className="relative order-first md:order-last">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 blur-lg"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/Anoosh2.jpg" 
                  alt="Anooshirvan Mostmand" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>
        
        <section className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full">
              <span className="text-sm font-medium">Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-12">Expertise Areas of Specialization</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Energy Systems Analysis",
                  description: "Specialized in the analysis and optimization of complex energy systems, including thermal plants, renewable integration, and hybrid solutions."
                },
                {
                  title: "Data Science & Machine Learning",
                  description: "Expert in applying data science techniques to energy problems, including predictive maintenance, energy forecasting, and optimization algorithms."
                },
                {
                  title: "Renewable Energy Integration",
                  description: "Focused on solutions for effective integration of renewable energy sources into existing grids and energy systems."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg sm:text-xl font-light mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full">
              <span className="text-sm font-medium">Contact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div>
                <p className="text-base sm:text-lg text-gray-600 mb-6">
                  I'm always open to discussing new projects, opportunities, or collaborations. 
                  Feel free to reach out through any of the channels below.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <a 
                    href="mailto:anooshirvan.mostmand@gmail.com" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                    <span className="text-sm sm:text-base">anooshirvan.mostmand@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/anooshiravan-mostmand/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                    <span className="text-sm sm:text-base">LinkedIn Profile</span>
                  </a>
                  
                  <a 
                    href="https://github.com/Anooshirvan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                    <span className="text-sm sm:text-base">GitHub Profile</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 sm:p-8 rounded-lg border border-gray-200">
                <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4">Current Focus</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  I'm currently focused on research and projects related to energy transition, machine 
                  learning applications in energy optimization, and innovative solutions for sustainable energy systems.
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  If you're working on similar areas or have interesting challenges in these fields, 
                  I'd be particularly interested in connecting.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-blue-50 border-t border-blue-100 mt-12 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="block text-base font-medium text-blue-900">Anooshirvan Mostmand</span>
            <span className="block text-sm text-blue-700">Energy Engineer & Data Scientist passionate about sustainable energy solutions and data-driven insights.</span>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/Anooshirvan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-blue-700 hover:text-blue-900"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/anooshiravan-mostmand/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:anooshirvan.mostmand@gmail.com" aria-label="Mail" className="text-blue-700 hover:text-blue-900"><Mail className="h-5 w-5" /></a>
            <a href="/Anooshirvan_Mostmand_CV.pdf" download aria-label="CV" className="text-blue-700 hover:text-blue-900"><Download className="h-5 w-5" /></a>
            <a href="https://x.com/Th_E_guy" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-blue-700 hover:text-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="h-5 w-5"><path d="M1200 24.6L728.6 623.2 1192.2 1202.4h-263.2l-362.2-448.2-406.2 448.2H0l491.2-542.2L39.2 24.6h263.2l330.2 408.2L1012.2 24.6H1200zm-180.2 1042.2h72.2L360.2 160.2h-72.2l731.8 906.6z"/></svg>
            </a>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-4 text-center text-xs text-blue-600">© 2025 Anooshirvan Mostmand. All rights reserved.</div>
      </footer>
    </>
  )
} 