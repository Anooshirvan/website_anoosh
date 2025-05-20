import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'

const labExperience = {
  dataScience: {
    title: 'Data Science - Developer',
    description: 'Data Scientist & ML engineer role in the EU project of MAN-AGE 5.0',
    items: [
      'Python Developer in the EU project of MAN-AGE 5.0 (AI-Integerated Energy management application for stellantis Auto-manufacturing Facility)',
    ],
  },
  mechanical: {
    title: 'Mechanical Lab',
    description: 'Mechanical engineering and testing experience',
    items: [
      'CAD & CAM',
      'Mechanical testing and certification of the workshop',
      'Marine mechanic (ICE engine, steam tanks, hydraulics and pumps) & maintenance',
    ],
  },
  electrical: {
    title: 'Electrical Lab',
    description: 'Electrical and energy systems experience',
    items: [
      'PV system design and grid connection traineeship (PVsyst), Iran TVTO',
      'BMS & BAS Iran TVTO (Smart building)',
    ],
  },
  hse: {
    title: 'HSE-MS',
    description: 'Health, Safety, and Environment Management Systems',
    items: [
      'HSE-MS and Laboratory and workshop Standardization traineeship in Iran TVTO',
    ],
  },
}

export default function Academia() {
  return (
    <div className="min-h-screen pt-0">
      <HeroSection
        title="Academic Work & Research"
        subtitle="Exploring the intersection of energy engineering, data science, and innovation."
        image="/Politecnico-di-Torino.jpg"
        imageAlt="Politecnico di Torino"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Education */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4 sm:mb-6">Education</h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-4">
                <h3 className="text-lg sm:text-xl font-light mb-2">Master's degree in Renewable Energy Systems</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">Polytechnic University of Turin-PoliTo • Jan 2021 - Nov 2024</p>
                <p className="text-sm sm:text-base text-gray-600 mb-2">Turin, Italy</p>
                <div className="mt-2">
                  <span className="text-xs sm:text-sm text-gray-500">Skills: Renewable Energy Systems, Techno-economic Analysis, Energy Policy, Building Energy Analysis, Energy Systems Analysis</span>
                </div>
              </div>

              <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-4">
                <h3 className="text-lg sm:text-xl font-light mb-2">Bachelor of Science in Mechanical Engineering</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">Islamic Azad University • Sep 2014 - Apr 2019</p>
                <div className="mt-2">
                  <span className="text-xs sm:text-sm text-gray-500">Skills: Renewable Energy Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Experience */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4 sm:mb-6">Lab Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {/* Data Science */}
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border-l-4 border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">{labExperience.dataScience.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{labExperience.dataScience.description}</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                  {labExperience.dataScience.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Mechanical Lab */}
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border-l-4 border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">{labExperience.mechanical.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{labExperience.mechanical.description}</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                  {labExperience.mechanical.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Electrical Lab */}
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border-l-4 border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">{labExperience.electrical.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{labExperience.electrical.description}</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                  {labExperience.electrical.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* HSE-MS */}
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border-l-4 border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">{labExperience.hse.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{labExperience.hse.description}</p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
                  {labExperience.hse.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-4 sm:mb-6">Academic Projects & Research</h2>
            <div className="space-y-6 sm:space-y-8">
              {/* Master's Thesis */}
              <div className="border-l-4 border-blue-200 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-4 sm:py-6">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3 sm:mb-4">Master's Thesis</h3>
                <h4 className="text-base sm:text-lg font-light mb-2">Integrating BIM, BEM, and Deep Learning for Enhanced Energy Forecasting in Industrial Facilities: A Multi-Model Approach for Predictive Analytics and Real-Time Visualization</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Politecnico di Torino • 2024</p>
                
                <div className="mb-3 sm:mb-4">
                  <h5 className="text-sm sm:text-md font-medium text-blue-700 mb-2">Academic Supervisors:</h5>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-600">
                    <li>Prof. Anna Osello</li>
                    <li>Prof. Matteo Del Giudice</li>
                    <li>Prof. Edoardo Patti</li>
                    <li>Prof. Enrico Macii</li>
                  </ul>
                </div>

                <div className="mb-3 sm:mb-4">
                  <h5 className="text-sm sm:text-md font-medium text-blue-700 mb-2">Abstract:</h5>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">
                    This thesis presents an advanced framework for energy management in industrial facilities, focusing on the PCMA San Benigno facility in Turin, Italy. The research combines predictive energy modeling with real-time visualization tools to enhance decision-making processes.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-2">
                    The study develops machine learning models (FCNN, CNN, LSTM, Bi-LSTM) for energy consumption forecasting, integrating Building Information Modeling (BIM) and Building Energy Modeling (BEM) to capture interactions between HVAC systems, environmental factors, and operational conditions.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    A real-time visualization application was developed for multi-zone energy monitoring, providing detailed insights into zone-specific energy performance metrics and supporting targeted optimization of HVAC operations.
                  </p>
                </div>

                <div className="mt-3 sm:mt-4">
                  <h5 className="text-sm sm:text-md font-medium text-blue-700 mb-2">Keywords:</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs sm:text-sm bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full">Digital Twin for Industrial Facilities</span>
                    <span className="text-xs sm:text-sm bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full">Neural Networks for HVAC Prediction</span>
                    <span className="text-xs sm:text-sm bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full">Data-Driven Energy Management</span>
                    <span className="text-xs sm:text-sm bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full">Deep Learning for Energy Forecasting</span>
                  </div>
                </div>
              </div>

              {/* Completed Projects */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">Completed Projects</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Pre-design of Wave Energy Converter</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino • Oct 2022 - Present</p>
                    <p className="text-sm sm:text-base text-gray-600">Pre-design of a wave energy converter in Bulgaria.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Marine Energy Systems, Wave Energy Conversion, Energy System Design</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Re-Design and Repowering Wind Farm</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino • Oct 2022 - Present</p>
                    <p className="text-sm sm:text-base text-gray-600">Re-Design and Repowering wind farm in Roio del Sangro, Abruzzo, Italy.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Wind Energy Systems, Power Plant Optimization, Energy Infrastructure</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Techno-economic Evaluation of Biogas-based SOFC System</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino • Oct 2022 - Present</p>
                    <p className="text-sm sm:text-base text-gray-600">Techno-economic evaluation of a biogas-based SOFC system for waste water treatment plant in Ivrea, Italy.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Fuel Cell Technology, Biogas Systems, Waste-to-Energy, Techno-economic Analysis</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Comprehensive Techno-Economic Analysis of CAES</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino • Oct 2022 - Present</p>
                    <p className="text-sm sm:text-base text-gray-600">Techno-economic evaluation of a compressed air energy storage for peak shaving scenario, for a case study in southern regions of Italy.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Energy Storage Systems, Peak Load Management, Grid Integration, Techno-economic Analysis</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Gas Spring Energy Storage</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino • Apr 2022 - Jun 2022</p>
                    <p className="text-sm sm:text-base text-gray-600">Dynamic analysis of Gas Spring Energy Storage charged by solar photovoltaic systems for storing 5 kWh and discharging phase via Simulink and Simscape.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Energy Storage, Dynamic System Modeling, Simulink, Simscape, Solar Integration</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Comprehensive Analysis of Solar Thermal System</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino</p>
                    <p className="text-sm sm:text-base text-gray-600">Energy Production and Economic evaluation of Solar Thermal system in Monaco for Domestic use (Heating, Cooling) via Polysun.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Solar Thermal Systems, Building Energy Systems, Polysun, HVAC Design</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Degradation Mechanism of Reversible Solid Oxide Fuel Cell</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino</p>
                    <p className="text-sm sm:text-base text-gray-600">Comprehensive Study over degradation Mechanism of different Components of RSOC, Modelling via COMSOL.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Fuel Cell Technology, Material Science, COMSOL Multiphysics, Electrochemical Systems</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Energy Network Modeling</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino</p>
                    <p className="text-sm sm:text-base text-gray-600">Energy Network Project containing:</p>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 mt-2">
                      <li>Power Network (Managing The Distribution System of Prosumer Community)</li>
                      <li>Designing a GAS Network System (A medium pressure gas network, Multi-component modelling)</li>
                      <li>Heat Network (Design of a District Heating System)</li>
                    </ul>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Smart Grid Systems, District Heating, Gas Network Design, Multi-energy Systems</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Molecular Dynamic Simulation of Thermal Conductivity</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino</p>
                    <p className="text-sm sm:text-base text-gray-600">Simulation of thermal conductivity of single wall carbon nanotube filler to enhance thermal response of material for sorption of Thermal storage/transfer. Used Nanostructure Builder engine of VMD software.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Molecular Dynamics, Nanotechnology, Thermal Analysis, VMD Software, Material Science</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Optimal Design of Heat Storage with PCM</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">Politecnico di Torino</p>
                    <p className="text-sm sm:text-base text-gray-600">Study of heat storage based on Phase Change Material (PCM) for coupling with a District Heating System. Included steady state and transient optimization (convex optimization) considering 2D horizontal cross section and design improvements. Simulation done via COMSOL.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Thermal Energy Storage, Phase Change Materials, COMSOL, Optimization Methods, District Heating</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-blue-100 pl-4 sm:pl-6 bg-blue-50 rounded-lg py-3 sm:py-4">
                    <h4 className="text-base sm:text-lg font-light mb-2">Technical Translation Project</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">NOAVARAN NIROO SHIRAZ • Dec 2020 - May 2021</p>
                    <p className="text-sm sm:text-base text-gray-600">Translated and published "Technical Application Papers No.10 Photovoltaic Plants" ABB handbook into Persian.</p>
                    <div className="mt-2">
                      <span className="text-xs sm:text-sm text-gray-500">Skills: Technical Translation, Solar Energy Documentation, Technical Writing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
} 