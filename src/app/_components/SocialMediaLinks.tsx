import { IconBrandX, IconBrandInstagram, IconBrandYoutubeFilled, IconMailFilled } from '@tabler/icons-react'

export default function SocialMediaLinks() {
  return (
    <div className="flex justify-center gap-8">
      <a href="https://x.com/@heyMiizu" target="_blank" rel="noopener noreferrer">
        <IconBrandX className="h-6 w-6" />
      </a>
      <a href="https://www.instagram.com/Miizumelon//" target="_blank" rel="noopener noreferrer">
        <IconBrandInstagram className="h-6 w-6" />
      </a>  
      <a href="https://www.youtube.com/@Miizumelon" target="_blank" rel="noopener noreferrer">
        <IconBrandYoutubeFilled className="h-6 w-6" />
      </a>
      <a href="mailto:SNTIMedia@gmx.de" target="_blank" rel="noopener noreferrer">
        <IconMailFilled className="h-6 w-6" />
      </a>
    </div>
  )
}
