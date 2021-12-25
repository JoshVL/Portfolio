import React from 'react';
import { FaTerminal, FaFigma, FaGitAlt } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle main>Skills and Knowledge</SectionTitle>
    <SectionText>
      Here's all the technologies and programming languages that I've learned throughout my undergrad experience and other applications!
    </SectionText>
    <List>
      <ListItem>
        <FaTerminal size="3rem" />
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Python, Java, <br />
            Javascript, <br />
            C, C++, C# <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaFigma size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Vue <br />
            Three.JS <br />
            React <br />
            Figma <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaGitAlt size="3rem" />
        <ListContainer>
          <ListTitle>Other Knowledge</ListTitle>
          <ListParagraph>
            Git <br />
            Unity <br />
            Basic Linux <br />
            IT Help Desk <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
