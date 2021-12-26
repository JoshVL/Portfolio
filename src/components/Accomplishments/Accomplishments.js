import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
import { AccomplishmentsData } from '../../constants/constants';

const Accomplishments = () => (
  <Section>
    <SectionTitle>
      Fun Stats
    </SectionTitle>
    <Boxes>
      {AccomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
