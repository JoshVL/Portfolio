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
      Heyo, I'm Josh! I'm a new graduate straight out of Wisconsin. I'm currently looking for opportunties to apply the skills and knowledge that I have obtained from studying at the University of Wisconsin - Madison and my student jobs working in IT. I'm interested in pursuing all areas of computer science, including frontend development, backend development, software engineering, and information technology and development areas.
      </SectionText>
      <Button onClick={() => window.open('https://joshvl.com/resume.pdf', '_blank')}>
        View Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;