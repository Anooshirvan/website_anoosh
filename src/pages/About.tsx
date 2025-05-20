import { motion } from 'framer-motion'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img
                src="/Anoosh3.jpg"
                alt="Anooshirvan Mostmand"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-light mb-4">ANOOSHIRVAN MOSTMAND</h1>
              <p className="text-gray-600 mb-2">Energy Engineer & Data Scientist</p>
              <p className="text-gray-600 mb-2">Italy, Turin</p>
              <p className="text-gray-600 mb-2">Email: Anooshirvan.mostmand@gmail.com</p>
              <p className="text-gray-600 mb-2">Phone: +39 3792370632</p>
              <div className="flex gap-4 justify-center md:justify-start mt-4">
                <a 
                  href="https://linkedin.com/in/anooshiravan-mostmand" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="/Anooshirvan_Mostmand_CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-light mb-6">Work Experience</h2>
              <div className="space-y-8">
                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-xl font-light mb-2">Energy Engineer | Data Scientist Researcher</h3>
                  <p className="text-gray-600 mb-2">MANAGE 5.0 EU project • March 2024 – Dec 2024</p>
                  <p className="text-gray-600">
                    Thesis: "Integrating BIM, BEM, and Deep Learning for Enhanced Energy Forecasting in Industrial Facilities: A Multi-Model Approach for Predictive Analytics and Real-Time Visualization"
                  </p>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-xl font-light mb-2">Circular and Sustainable Inputs for Renewable Energy</h3>
                  <p className="text-gray-600 mb-2">Enel Green Power • Sep 2022 - Jan 2023</p>
                  <p className="text-gray-600 mb-2">Turin, Piedmont, Italy</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Prepared innovative ways to reduce environmental impact and social risks through circular materials</li>
                    <li>Conducted technical/economic evaluation and modeling of sustainable materials</li>
                    <li>Created synergies with supplier ecosystem</li>
                    <li>Supported identification of innovation projects</li>
                    <li>Project held by Clik from Challenge at Politecnico di Torino</li>
                  </ul>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-xl font-light mb-2">A NEW Life for Alumina-based Wastes (NewLAW)</h3>
                  <p className="text-gray-600 mb-2">SACAL Società Alluminio Carisio S.p.A. • Mar 2022 - Jun 2022</p>
                  <p className="text-gray-600 mb-2">Turin, Piedmont, Italy</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Developed innovative methods for aftertreatment and new product development</li>
                    <li>Proposed calcium aluminate cement (CAC) as a sustainable solution</li>
                    <li>Conducted technical and economic analysis considering sustainability aspects</li>
                    <li>Project held by Clik from Challenge at Politecnico di Torino</li>
                  </ul>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-xl font-light mb-2">KPIs for Green Mobility Services</h3>
                  <p className="text-gray-600 mb-2">Hitachi Rail • Sep 2021 - Jan 2022</p>
                  <p className="text-gray-600 mb-2">Turin, Piedmont, Italy</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Evaluated public transport system with sustainable factors</li>
                    <li>Developed case study for realistic overview of management layers</li>
                    <li>Created dashboard for decision-making using green mobility indexes</li>
                    <li>Project held by Clik from Challenge at Politecnico di Torino</li>
                  </ul>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-xl font-light mb-2">Marine Mechanic</h3>
                  <p className="text-gray-600 mb-2">IR SHIPPING Company • Jun 2020 - Dec 2020</p>
                  <p className="text-gray-600 mb-2">Rasht, Gilan Province, Iran</p>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-xl font-light mb-2">Solar Energy Consultant</h3>
                  <p className="text-gray-600 mb-2">NOAVARAN NIROO SHIRAZ • Mar 2018 - Sep 2018</p>
                  <p className="text-gray-600 mb-2">Shiraz, Fars Province, Iran</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Renewable energy consultant for rooftop systems</li>
                    <li>Designed electrification systems for rural areas</li>
                  </ul>
                </div>

                <div className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-xl font-light mb-2">Computer Numerical Control Programmer</h3>
                  <p className="text-gray-600 mb-2">Dehghan Agricultural Equipment Factory • Mar 2017 - Sep 2017</p>
                  <p className="text-gray-600 mb-2">Shiraz, Fars Province, Iran</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Design and Control technician</li>
                    <li>HSE-MS junior engineer</li>
                    <li>Responsible for mechanical design, CAD model development with CATIA and drawing of components.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <section className="mt-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-6">Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-blue-600 font-medium mb-2">Programming</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Python</li>
                    <li>CUDA Programming</li>
                    <li>Julia</li>
                    <li>Matlab</li>
                    <li>R</li>
                    <li>Typescript</li>
                    <li>Modelica</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-600 font-medium mb-2">Design</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>CAD (AutoCad, SolidWorks & CATIA, Revit)</li>
                    <li>Script-based CAD (Blender, CadQuery)</li>
                    <li>CNC Programming</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-600 font-medium mb-2">Simulation</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Modelica & Simulink</li>
                    <li>Aspen+</li>
                    <li>FEM (COMSOL, Ansys)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-600 font-medium mb-2">Python Specialization</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>ML & DL</li>
                    <li>Computer Vision</li>
                    <li>MLOps</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-600 font-medium mb-2">Energy & Sustainability</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Solar Energy</li>
                    <li>Renewable Energy Systems</li>
                    <li>Energy Policy</li>
                    <li>Circular Economy</li>
                    <li>Carbon Emissions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-600 font-medium mb-2">Analysis & Development</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Techno-economic Analysis</li>
                    <li>Data Analysis</li>
                    <li>KPI Dashboards</li>
                    <li>Energy Assessment</li>
                    <li>Business Development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-600 font-medium mb-2">Languages</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>English </li>
                    <li>German </li>
                    <li>Italian </li>
                    <li>Persian </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 