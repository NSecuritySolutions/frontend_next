'use client';
import styles from './page.module.css';
import { Header } from '../widgets/Header';
import { headerNavLinks } from '../shared/constants/texts/header-nav-items';
import { Info } from '../widgets/Info';
import { OurServices } from '../widgets/OurServices';
import { ReadySolutionSection } from '../widgets/ReadySolutionSection';
import { AdvantagesBlock } from '../widgets/AdvantagesBlock';
import { ProjectStage } from '../widgets/ProjectStage';
import { OurTeam } from '../widgets/OurTeam';
import { Questions } from '../widgets/Questions';
import { ReviewsBlock } from '../widgets/ReviewsBlock';
import { ExamplesSlider } from '../widgets/ExamplesSlider';
import { OurClients } from '../widgets/OurClients';
import { ContactForm } from '../widgets/ContactForm';
import { Footer } from '../widgets/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header navLinks={headerNavLinks} />
      <Info />
      <OurServices />
      <ReadySolutionSection />
      <AdvantagesBlock />
      <ProjectStage />
      <OurTeam />
      <Questions />
      <ReviewsBlock />
      <ExamplesSlider />
      <OurClients />
      <ContactForm />
      <Footer />
    </main>
  );
}
