import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getGalleryImages } from '@/lib/cloudinary'
import { siteConfig } from '@/lib/config'

export default async function Home() {
  const images = await getGalleryImages(siteConfig.cloudinaryFolder)

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery images={images} />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
