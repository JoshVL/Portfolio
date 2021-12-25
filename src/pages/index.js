import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import AboutMe from '../components/AboutMe/AboutMe';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
      <AboutMe />
      <Accomplishments />
    </Layout>
  );
};

export default Home;
