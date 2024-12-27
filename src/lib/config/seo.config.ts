import { Metadata } from "next"

const APP_URL = process.env.APP_URL || "http://localhost:3000"
const APP_NAME = "Svyatoslavw"

export const APP_TITLE = `${APP_NAME} - Portfolio`

const SEO = {
  CREATOR: "svyatoslavw",
  GITHUB_URL: "https://github.com/svyatoslavw",
  SITE_KEYWORDS: [
    "Next.js",
    "ReactJS",
    "Javascript",
    "Typescript",
    "Web developing",
    "Programming community",
    "Ukraine",
    "Frontend",
    "React",
    "Next",
    "Portfolio",
    "Svyatoslav",
    "Svyatoslavw",
    "svyatoslavw",
    "svy4tosl0v3",
    "sviatoslavvww",
    "sviatoslavvww@gmail.com"
  ]
}

export const APP_METADATA: Metadata = {
  description: "AI-powered resume builder",
  icons: {
    icon: "/images/512x512.png",
    shortcut: "/images/256x256.png"
  },
  metadataBase: new URL(APP_URL),
  applicationName: APP_NAME,
  creator: SEO.CREATOR,
  authors: {
    name: SEO.CREATOR,
    url: SEO.GITHUB_URL
  },
  keywords: SEO.SITE_KEYWORDS,
  openGraph: {
    type: "website",
    description: "AI-powered resume builder",
    url: APP_URL,
    locale: "en-US",
    siteName: APP_NAME,
    emails: `sviatoslavvww@gmail.com`,
    images: [
      {
        url: `${APP_URL}/images/opengraph.png`,
        width: 1280,
        height: 640,
        alt: APP_NAME
      }
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_NAME,
    startupImage: {
      url: "/images/256x256.png"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: APP_URL
  }
}
