import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  {
    title: "MANAGE 5.0 EU Project",
    description: "Energy Engineer & Data Scientist Researcher working on integrating BIM, BEM, and Deep Learning for Enhanced Energy Forecasting in Industrial Facilities. Developing a Multi-Model Approach for Predictive Analytics and Real-Time Visualization.",
    tags: ["Deep Learning", "BIM", "BEM", "Energy Forecasting", "Data Science"],
    image: "/stellantis-factory.jpg",
    links: {}
  },
  {
    title: "Circular and Sustainable Inputs for Renewable Energy",
    description: "Developed innovative solutions to reduce environmental impact and social risks in renewable energy through circular materials, technical/economic evaluation, and supplier ecosystem synergies. Project held by Clik from Challenge at Politecnico di Torino.",
    tags: ["Solar Energy", "Techno-economic Analysis", "Data Analysis", "KPI Dashboards", "Circular Economy"],
    image: "/enel-green-power.jpg",
    links: {
      other: [{
        label: "Website",
        url: "https://clik.polito.it/challenge/circular-and-sustainable-inputs-for-renewable-energy-_by-enel-green-power/"
      }]
    }
  },
  {
    title: "A NEW Life for Alumina-based Wastes (NewLAW)",
    description: "Developed innovative methods for aftertreatment and new product development in the alumina industry. Proposed calcium aluminate cement (CAC) as a sustainable solution with comprehensive technical and economic analysis.",
    tags: ["Industrial Waste Management", "Techno-economic Analysis", "Circular Economy", "Energy Policy"],
    image: "/alumina-industry.jpg",
    links: {
      other: [{
        label: "Website",
        url: "https://clik.polito.it/challenge/a-new-life-for-alumina-based-wastes-newlaw_by-sacal/"
      }]
    }
  },
  {
    title: "KPIs for Green Mobility Services Hitachi Rail",
    description: "Evaluated public transport system with focus on sustainability. Developed case study for realistic overview of management layers and created dashboard for decision-making using green mobility indexes.",
    tags: ["Data Analysis", "Carbon Emissions", "Simulink", "Energy Policy", "KPI Dashboards"],
    image: "/green-mobility.jpg",
    links: {
      other: [{
        label: "Website",
        url: "https://clik.polito.it/news/pianificare-la-mobilita-sostenibile-del-futuro/"
      }]
    }
  },
  {
    title: "Comprehensive Techno-Economic Analysis",
    description: "Conducted comprehensive techno-economic evaluation of CAES, biogas-based SOFC system in WWT, and Solar Thermal System in Domestic Application. Provided 4E framework analysis.",
    tags: ["Techno-economic Analysis", "Energy Systems", "Renewable Energy", "Data Analysis"],
    image: "/energy-systems.jpg",
    links: {}
  },
  {
    title: "Pre-design and Re-design of WEC and Wind Farm",
    description: "Pre-design of a wave energy converter in Bulgaria and Re-Design and Repowering wind farm in Roio del Sangro, Abruzzo, Italy.",
    tags: ["Wind Energy", "Wave Energy", "Renewable Energy", "Energy Systems"],
    image: "/wind-farm.jpg",
    links: {}
  },
  {
    title: "Degradation Mechanism of RSOFC",
    description: "Conducted literature review and study over Degradation Mechanism of RSOFC, with modeling via COMSOL and Matlab.",
    tags: ["COMSOL", "MATLAB", "Energy Systems", "Research"],
    image: "/fuel-cell.jpg",
    links: {}
  },
  {
    title: "Solar Energy Consulting",
    description: "Worked as a renewable energy consultant, designing rooftop systems and electrification of rural areas. Provided comprehensive solar energy solutions and technical expertise.",
    tags: ["Solar Energy", "Renewable Energy", "Energy Systems", "Technical Consulting"],
    image: "/solar-installation.jpg",
    links: {}
  }
]

export default function Projects() {
  return (
    <>
      <Navbar />
      
      <HeroSection
        title="Projects Portfolio"
        subtitle="Showcasing my work in energy engineering, data science, and sustainable solutions"
        image="/plant4.jpg"
        imageAlt="Energy Projects"
      />
      
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full">
              <span className="text-sm font-medium">Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">Featured Projects</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mb-8 sm:mb-12">
              A collection of my professional projects in energy engineering, data science, 
              and sustainable solutions, including research work and industry collaborations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    image={project.image}
                    links={project.links}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
} 