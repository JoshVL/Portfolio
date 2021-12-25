import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
import { AccomplishmentsData } from '../../constants/constants';

const Accomplishments = () => (
  <Section>
    <br />
    <SectionDivider />
    <SectionTitle main>Fun Facts</SectionTitle>
    <Boxes>
      {AccomplishmentsData.map((card, index) => (
        <Box key={index}>

          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
