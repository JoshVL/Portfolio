import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ProfileImage } from './HeroStyles';
import { AiFillLinkedin } from 'react-icons/ai';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World!<br />
        I'm Josh Villanueva.
      </SectionTitle>
      <br />
        <ProfileImage src='/images/me.png' alt="Josh Villanueva" height="300" width="300" />
      <br /><br />
      <SectionText>
        Heyo, what's up? I'm a Software Engineer at Northwestern Mutual, previously 
        at Target Corporate, and a University of Wisconsin - Madison alumni. 
        I'm interested in exploring and learning all areas of computer science, including frontend development, backend development, software engineering, and information technology and development areas.

      </SectionText>
      <a href="https://www.linkedin.com/in/joshvl/" target="_blank">
        <Button> Let's Connect <br /> <AiFillLinkedin size="3rem" /> </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;