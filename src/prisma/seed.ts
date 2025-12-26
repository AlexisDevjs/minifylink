import { PrismaClient, Prisma } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
})

const linkData: Prisma.LinkCreateInput[] = [
  {
    slug: 'gh-alexis',
    targetUrl: 'https://github.com/AlexisDevjs',
    analytics: {
      create: [
        {
          ip: '190.12.45.10',
          country: 'EC',
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        },
        {
          ip: '181.54.22.91',
          country: 'CO',
          userAgent: 'Mozilla/5.0 (Linux; Android 13)',
        },
        {
          ip: '34.201.88.4',
          country: 'US',
          userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X)',
        },
      ],
    },
  },
  {
    slug: 'yt-short-ai',
    targetUrl: 'https://google.com/search?q=short+ai',
    analytics: {
      create: [
        {
          ip: '190.98.120.33',
          country: 'EC',
          userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)',
        },
        {
          ip: '201.18.77.9',
          country: 'BR',
          userAgent: 'Mozilla/5.0 (Android 12; Mobile)',
        },
        {
          ip: '52.91.14.221',
          country: 'US',
          userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64)',
        },
      ],
    },
  },
]

export async function main() {
  for (const u of linkData) {
    await prisma.link.create({ data: u })
  }
}

main()
