import { IconBrandX, IconBrandInstagram, IconBrandYoutubeFilled, IconMailFilled } from '@tabler/icons-react'

export default function SocialMediaLinks() {
  return (
    <div className="flex justify-center gap-8">
      <a href="https://x.com/@heyMiizu" target="_blank" rel="noopener noreferrer" aria-label="Folge mir auf X (Twitter)">
        <IconBrandX className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">X (Twitter)</span>
      </a>
      <a href="https://www.instagram.com/Miizumelon" target="_blank" rel="noopener noreferrer" aria-label="Folge mir auf Instagram">
        <IconBrandInstagram className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">Instagram</span>
      </a>  
      <a href="https://www.youtube.com/@Miizumelon" target="_blank" rel="noopener noreferrer" aria-label="Besuche meinen YouTube-Kanal">
        <IconBrandYoutubeFilled className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">YouTube</span>
      </a>
      <a href="mailto:SNTIMedia@gmx.de" target="_blank" rel="noopener noreferrer" aria-label="Schreibe mir eine E-Mail">
        <IconMailFilled className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">E-Mail</span>
      </a>
    </div>
  )
}
