import Image from 'next/image'
import BannerSection from './components/BannerSection'
import AllReelBlocks from './components/reelBlocks/AllReelBlocks'

export default function Home() {
  return (
    <main className="min-h-screen max-w-full box-border">
      <BannerSection />
      <AllReelBlocks />
    </main>
  )
}
