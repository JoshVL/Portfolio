import React from 'react';
import { FaTerminal, FaReadme, FaGlasses } from 'react-icons/fa';
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
            Python<br />
            Java <br />
            Javascript <br />
            Vue <br />
            C <br />
            C++ <br />
            C# <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaReadme size="3rem" />
        <ListContainer>
          <ListTitle>Relevant Classwork</ListTitle>
          <ListParagraph>
            Software Engineering <br />
            Data Structures <br />
            AI and Machine Learning<br />
            Operating Systems <br />
            Algorithms<br />
            Computer Graphics <br />
            Game Design<br />
            Virtual Reality <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaGlasses size="3rem" />
        <ListContainer>
          <ListTitle>Other Knowledge</ListTitle>
          <ListParagraph>
            Git <br />
            Unity <br />
            Oculus VR <br />
            Basic Linux <br />
            IT Help Desk <br />
            Figma <br />
            Adobe CC <br />
            Office / Drive <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
