"use client"

import { IconBrandX, IconBrandInstagram, IconBrandYoutubeFilled, IconMailFilled } from "@tabler/icons-react"
import { motion } from "framer-motion"

export default function SocialMediaLinks() {
  const iconVariants = {
    hover: {
      y: -5,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.3,
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  }

  const icons = [
    {
      href: "https://x.com/@heyMiizu",
      Icon: IconBrandX,
      label: "Folge mir auf X (Twitter)",
      delay: 0,
    },
    {
      href: "https://www.instagram.com/Miizumelon",
      Icon: IconBrandInstagram,
      label: "Folge mir auf Instagram",
      delay: 0.1,
    },
    {
      href: "https://www.youtube.com/@Miizumelon",
      Icon: IconBrandYoutubeFilled,
      label: "Besuche meinen YouTube-Kanal",
      delay: 0.2,
    },
    {
      href: "mailto:SNTIMedia@gmx.de",
      Icon: IconMailFilled,
      label: "Schreibe mir eine E-Mail",
      delay: 0.3,
    },
  ]

  return (
    <div className="flex justify-center gap-8">
      {icons.map(({ href, Icon, label, delay }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover="hover"
          variants={iconVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay, duration: 0.5 },
          }}
          className="transform-gpu"
        >
          <Icon className="h-6 w-6 transition-colors duration-300 hover:text-purple-400" aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </motion.a>
      ))}
    </div>
  )
}

