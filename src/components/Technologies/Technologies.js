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
      Here's all the technologies and programming languages that I've learned throughout my career, college, and other applications!
    </SectionText>
    <List>
      <ListItem>
        <FaTerminal size="3rem" />
        <ListContainer>
          <ListTitle>Technologies</ListTitle>
          <ListParagraph>
            Kotlin / Java / Groovy <br />
            TypeScript / Javascript <br />
            PostgreSQL / Oracle<br />
            React / HTML / CSS<br />
            JUnit / Jest / Cypress<br />
            Micronaut<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaReadme size="3rem" />
        <ListContainer>
          <ListTitle>Skills</ListTitle>
          <ListParagraph>
            Agile Development <br />
            REST API Development <br />
            Unit/Func/Integration Testing <br />
            CI/CD Pipelines & Automation<br />
            Database Management <br />
            On Call Support<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaGlasses size="3rem" />
        <ListContainer>
          <ListTitle>Other Knowledge</ListTitle>
          <ListParagraph>
            Git / GitHub <br />
            Jira / Confluence / Figma <br />
            Unity / Oculus VR<br />
            Terminal & Basic Unix<br />
            Adobe CC <br />
            Office / Drive <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
