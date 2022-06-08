import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World!<br />
        I'm Josh Villanueva.
      </SectionTitle>
      <br />
        <img src='/images/me.png' height="300" width="300" />
      <br /><br />
      <SectionText>
      Heyo, I'm Josh! I graduated from the University of Wisconsin - Madison in December 2021, and am currently a software engineer at Target within their Technology Leadership Program. I'm interested in learning and exploring all areas of computer science, including frontend development, backend development, software engineering, and information technology and development areas.
      </SectionText>
      <a href="https://joshvl.com/resume.pdf" target="_blank">
        <Button> View Resume </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;