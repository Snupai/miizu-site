import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchQuery = request.nextUrl.searchParams.get('q')?.toLowerCase() || '';

  const pages = [
    {
      path: '/',
      name: 'Home',
      description: 'Welcome to my portfolio',
      content: 'Portfolio homepage main page home Miizu Miizumelon',
      matches: 0
    },
    {
      path: '/animations',
      name: 'Animations',
      description: 'My animations',
      content: 'Portfolio animations AE After Effects special effects',
      matches: 0
    },
    {
      path: '/vfx',
      name: 'VFX',
      description: 'My VFX',
      content: 'Portfolio VFX',
      matches: 0
    },
    {
      path: '/thumbnails',
      name: 'Thumbnails',
      description: 'Thumbnails',
      content: 'Portfolio thumbnails youtube clients showcase Miizu Miizumelon Minecraft Cinema Wallpapers',
      matches: 0
    },
    {
      path: '/commissions',
      name: 'Commissions',
      description: 'Commissions',
      content: 'Portfolio commissions contact Miizu Instagram',
      matches: 0
    }
    // Add more pages as needed
  ];

  if (searchQuery) {
    return NextResponse.json({
      pages: pages.map(page => {
        const matches = [
          ...page.name.toLowerCase().matchAll(new RegExp(searchQuery, 'g')),
          ...page.description.toLowerCase().matchAll(new RegExp(searchQuery, 'g')),
          ...page.content.toLowerCase().matchAll(new RegExp(searchQuery, 'g'))
        ].length;

        return {
          ...page,
          matches
        };
      }).filter(page => page.matches > 0)
      .sort((a, b) => b.matches - a.matches)
    });
  }

  return NextResponse.json({ pages });
} 