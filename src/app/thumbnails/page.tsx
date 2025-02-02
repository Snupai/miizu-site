'use client';

import Image from 'next/image';

const youtubeImages = [
  {
    src: "/thumbnails/own-youtube/VRCHAT_UNCENSORED.jpg",
    title: "Thumbnail for the VRCHAT UNCENSORED Trailer / Youtube: Miizumelon",
    fullWidth: false,
    subtext: true
  },
  {
    src: "/thumbnails/own-youtube/Index_controller_review.jpg", 
    title: "Thumbnail for my Index controller review / Youtube: Miizumelon",
    fullWidth: false,
    subtext: true
  },
  {
    src: "/thumbnails/own-youtube/Wie_ich_meine_Videos_mache.jpg",
    title: "Thumbnail for \"Wie ich meine Videos mache\" / Youtube: Miizumelon",
    fullWidth: false,
    subtext: true
  },
  {
    src: "/thumbnails/own-youtube/AI_Voice.jpg",
    title: "/ Youtube: Miizumelon",
    fullWidth: false,
    subtext: true
  },
  {
    src: "/thumbnails/own-youtube/HP_Reverb_G2_review.jpg",
    title: "Thumbnail for my HP Reverb G2 review / Youtube: Miizumelon",
    fullWidth: false,
    subtext: true
  },
  {
    src: "/thumbnails/own-youtube/Alles_ueber_VRCHAT.jpg",
    title: "/ Youtube: Miizumelon",
    fullWidth: false,
    subtext: true
  },
  {
    src: "/thumbnails/own-youtube/Das_teuerste_Spiel_der_Welt.jpg",
    title: "/ Youtube: Miizumelon",
    fullWidth: false,
    subtext: true
  },
  {
    src: "/thumbnails/own-youtube/Fühlen_in_VR.jpg",
    title: "/ Youtube: Miizumelon",
    fullWidth: false,
    subtext: true
  }
];

const commissionedImages = [
  {
    src: "/thumbnails/commissions/Thumbnail_for_JuriiK.jpg",
    title: "Thumbnail for JuriiK (GestiefelterCutter)",
    fullWidth: true,
    subtext: true
  }
];

const minecraftImages = [
  {
    src: "/thumbnails/minecraft/Project_Alive.jpg",
    title: "Thumbnail for Project Alive",
    fullWidth: false,
    subtext: false
  },
  {
    src: "/thumbnails/minecraft/After_Humans.png",
    title: "Thumbnail for After Humans",
    fullWidth: false,
    subtext: false
  },
  {
    src: "/thumbnails/minecraft/After_Humans_1.png",
    title: "Thumbnail for After Humans",
    fullWidth: false,
    subtext: false
  },
  {
    src: "/thumbnails/minecraft/Melfix_BTS.png",
    title: "Thumbnail for Melfix BTS",
    fullWidth: false,
    subtext: false
  },
  {
    src: "/thumbnails/minecraft/miizu_star.png",
    title: "Thumbnail for Miizu Star",
    fullWidth: false,
    subtext: false
  },
  {
    src: "/thumbnails/minecraft/cursed.jpg",
    title: "Thumbnail for Cursed",
    fullWidth: false,
    subtext: false
  },
  {
    src: "/thumbnails/minecraft/Melfix_BTS_1.png",
    title: "Thumbnail for Melfix BTS",
    fullWidth: false,
    subtext: false
  }
];

const minecraftCinemaWallpapers = [
  {
    src: "/images/minecraft-cinema/Alexando.png",
    title: "Wallpaper for Alexando",
    fullWidth: false,
    portrait: true,
    subtext: false
  },
  {
    src: "/images/minecraft-cinema/Imperishability.png",
    title: "Wallpaper for Imperishability",
    fullWidth: false,
    portrait: true,
    subtext: false
  },
  {
    src: "/images/minecraft-cinema/Lambrowo.png",
    title: "Wallpaper for Lambrowo",
    fullWidth: false,
    portrait: true,
    subtext: false
  },
  {
    src: "/images/minecraft-cinema/Levonex.png",
    title: "Wallpaper for Levonex",
    fullWidth: false,
    portrait: true,
    subtext: false
  },
  {
    src: "/images/minecraft-cinema/Miizumelon.png",
    title: "Wallpaper for Miizumelon",
    fullWidth: false,
    portrait: true,
    subtext: false
  },
  {
    src: "/images/minecraft-cinema/Nachtiuwu.png",
    title: "Wallpaper for Nachtiuwu",
    fullWidth: false,
    portrait: true,
    subtext: false
  },
  {
    src: "/images/minecraft-cinema/Raafii.png",
    title: "Wallpaper for Raafii",
    fullWidth: false,
    portrait: true,
    subtext: false
  }
];

function ImageGrid({ images, images_per_row}: { 
  images: { src: string; title: string; fullWidth: boolean; portrait?: boolean; subtext?: boolean }[], 
  images_per_row: number 
}) {
  // Calculate items in the last row
  const totalImages = images.length;
  const lastRowItems = totalImages % images_per_row;
  
  // Create a mapping for grid columns
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[images_per_row] ?? 'md:grid-cols-1';
  
  return (
    <div className={`grid grid-cols-1 ${gridColsClass} gap-6 max-w-7xl mx-auto`}>
      {images.map((image, index) => {
        // Check if this item is in the last row and needs centering
        const isLastRow = index >= totalImages - lastRowItems;
        const shouldCenter = lastRowItems === 1 && isLastRow && !image.fullWidth;
        
        return (
          <div 
            className={`flex flex-col ${
              image.fullWidth 
                ? 'md:col-span-2 md:w-[80%] md:mx-auto' 
                : shouldCenter
                  ? 'md:col-span-full md:w-1/2 md:mx-auto' 
                  : ''
            }`} 
            key={index}
          >
            <div className={`${
              image.portrait ? 'aspect-[3/4]' : 'aspect-video'
            } relative`}>
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-contain" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {image.subtext && <p className="text-white text-center text-sm mt-2">{image.title}</p>}
          </div>
        );
      })}
    </div>
  );
}
export default function ThumbnailsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000000] to-[#15162c] text-white pt-20 pb-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-8 mt-8 md:mt-16 text-center">Thumbnails</h1>
        <p className="text-lg md:text-xl mb-8 md:mb-16 text-center">Thumbnails i made either for myself or clients.</p>
        
        <div className="mb-8 md:mb-16">
          <ImageGrid images={youtubeImages} images_per_row={2} />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 mt-16 md:mt-32 text-center">Commissioned</h2>
        <div className="mb-8 md:mb-16">
          <ImageGrid images={commissionedImages} images_per_row={2} />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 mt-16 md:mt-32 text-center">Minecraft Thumbnails</h2>
        <p className="text-lg md:text-xl mb-8 md:mb-16 text-center">Skinrender and Wallpapers.</p>
        <div className="mb-8 md:mb-16">
            <ImageGrid images={minecraftImages} images_per_row={2} />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 mt-16 md:mt-32 text-center">Minecraft Cinema Wallpapers</h2>
        <div className="mb-8 md:mb-16">
            <ImageGrid images={minecraftCinemaWallpapers} images_per_row={3} />
        </div>
      </div>
    </main>
  );
}
