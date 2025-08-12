import { AboutPreview } from "../../components/about-preview/AboutPreview";
import { ContactCTA } from "../../components/contact-cta/Contact-CTA";
import { FeaturedProjects } from "../../components/featured-project/FeaturedProject";
import { Hero } from "../../components/hero/hero";
import { NewsPreview } from "../../components/news-preview/NewsPreview";

export default function HomePage() {
    return (
      <main className="min-h-screen">
        <Hero />
        <AboutPreview />
        <FeaturedProjects />
        <NewsPreview />
        <ContactCTA />
      </main>
    )
  }