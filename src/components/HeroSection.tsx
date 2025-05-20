import { motion } from 'framer-motion'

interface HeroSectionProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export default function HeroSection({ title, subtitle, image, imageAlt }: HeroSectionProps) {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-3 sm:mb-4 md:mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  )
} 