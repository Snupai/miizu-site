"use client"

import { IconChevronDown } from "@tabler/icons-react"
import SocialMediaLinks from "./_components/SocialMediaLinks"
import AnimatedText from "./_components/AnimatedText"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

type Card = {
  href: string;
  src: string;
  alt: string;
  title: string;
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [isMounted, setIsMounted] = useState(false)

  const cards: readonly {
    href: string;
    src: string;
    alt: string;
    title: string;
  }[] = [
    {
      href: "/animations",
      src: "/images/animations.png",
      alt: "Examples of my Animation Work",
      title: "Animations",
    },
    {
      href: "/vfx",
      src: "/images/vfx.png",
      alt: "Examples of my Visual Effects and Compositing Work",
      title: "VFX",
    },
    {
      href: "/thumbnails",
      src: "/images/thumbnails.png",
      alt: "Examples of my YouTube Thumbnail Designs",
      title: "Thumbnails",
    },
    {
      href: "/commissions",
      src: "/images/commissions.png",
      alt: "Examples of my Commission Work",
      title: "Commissions",
    },
  ] as const;

  // Parallax effects
  const videoScale = useTransform(scrollY, [0, 1000], [1, 1.1])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroY = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToNextSection = () => {
    const targetElement = document.getElementById("cards")
    if (!targetElement) return

    const start = window.scrollY
    const target = targetElement.offsetTop
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeInOutQuart = (x: number): number => {
        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
      }

      window.scrollTo(0, start + (target - start) * easeInOutQuart(progress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  // Replace the random rotation calculation with fixed values
  const rotationValues = [-8, 8, -8, 8]; // Fixed rotation values for each card

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#000000] to-[#15162c] text-white overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-animated opacity-30" />
      </div>

      {/* Fixed Hero Section */}
      <motion.div className="fixed inset-0 z-10">
        {/* Video Background with Parallax */}
        <motion.div className="absolute inset-0 w-screen h-screen overflow-hidden" style={{ scale: videoScale }}>
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            >
              <source src="/videos/Cc3tLIvmX7U_720-5120w.mp4" media="(min-width: 2560px)" type="video/mp4" />
              <source src="/videos/Cc3tLIvmX7U_720-2560w.mp4" media="(min-width: 1920px)" type="video/mp4" />
              <source src="/videos/Cc3tLIvmX7U_720-1920w.mp4" media="(min-width: 1280px)" type="video/mp4" />
              <source src="/videos/Cc3tLIvmX7U_720-1280w.mp4" media="(min-width: 640px)" type="video/mp4" />
              <source src="/videos/Cc3tLIvmX7U_576-640w.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2.5px]"></div>
        </motion.div>
        {/* Hero Content with Fade */}
        <motion.div
          className="relative flex h-full min-h-[80vh] flex-col items-center justify-center text-center pt-16"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-12 text-6xl font-bold tracking-tight">
              <AnimatedText text="Hey I'm Miizu" speed={40} />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="mb-12 text-xl text-gray-200">
              <AnimatedText text="wanna see something cool?" delay={1000} speed={30} />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SocialMediaLinks />
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-0 right-0 mx-auto text-xl font-semibold text-gray-400 
              transition-colors duration-300 cursor-pointer titillium-web-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              aria-label="Scroll down"
              onClick={scrollToNextSection}
              className="hover:text-white transition-colors"
            >
              <IconChevronDown
                className="h-20 w-20 transition-all duration-300 hover:animate-soft-bounce"
                aria-hidden="true"
              />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Cards Section with Blur Transition */}
      <div className="relative">
        <div className="h-[90vh]" />

        <div className="sticky top-0 z-10 pointer-events-none">
          <div className="blur-transition relative overflow-hidden" />
        </div>

        {/* Cards Content */}
        <div id="cards" className="relative bg-[#15162c] min-h-screen z-30">
          <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
            <section>
              <motion.div
                className="grid grid-cols-2 gap-4 max-w-4xl mx-auto relative isolate"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {cards.map((card: Card, index) => {
                  return (
                    <motion.a
                      key={card.href}
                      href={card.href}
                      className="group relative overflow-hidden rounded-xl transform [transform-style:preserve-3d] motion-safe:transition-transform"
                      style={{ aspectRatio: "1381/1080" }}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 50,
                          x: index % 2 === 0 ? -50 : 50,
                          rotate: rotationValues[index],
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          rotate: 0,
                          transition: {
                            type: "spring",
                            bounce: 0.2,
                            duration: 1.5,
                            damping: 15,
                            stiffness: 40,
                          },
                        },
                      }}
                      whileHover={{
                        scale: 1.15,
                        zIndex: 50,
                        rotate: rotationValues[index] ? rotationValues[index] / 2 : 0,
                        x: index % 2 === 0 ? -10 : 10,
                        y: -10,
                        filter: "drop-shadow(0 35px 35px rgb(0 0 0 / 0.5))",
                        transition: {
                          type: "spring",
                          stiffness: 150,
                          damping: 15,
                          mass: 0.8,
                          velocity: 2,
                        },
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <motion.div
                        className="relative h-full w-full rounded-xl overflow-hidden [backface-visibility:hidden]"
                        whileHover={{
                          scale: 1.05,
                          transition: {
                            type: "spring",
                            stiffness: 150,
                            damping: 15,
                            mass: 0.8,
                          },
                        }}
                      >
                        <Image
                          src={card.src!}
                          alt={card.alt!}
                          width={1381}
                          height={1080}
                          className="object-cover w-full h-full"
                        />
                        <div className="card-overlay absolute inset-0 flex items-center justify-center">
                          <motion.h3
                            className="text-xl font-bold relative z-10"
                            initial={{ opacity: 0.8 }}
                            whileHover={{
                              opacity: 1,
                              scale: 1.1,
                              transition: {
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                              },
                            }}
                          >
                            {card.title}
                          </motion.h3>
                        </div>
                      </motion.div>
                    </motion.a>
                  )
                })}
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

