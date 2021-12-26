import React from 'react';

import { Section, SectionDivider, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
import { AccomplishmentsData } from '../../constants/constants';

const Accomplishments = () => (
  <Section>
    <SectionText>
      Fun Facts and Stats
    </SectionText>
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
