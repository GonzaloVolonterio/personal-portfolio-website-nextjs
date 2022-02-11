import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./Herostyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My name is Gonzalo Volonterio the developer you need to do interactive attractive and nice application. I live in San Fernando, Buenos Aires Argentina. Here you can see my last project.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
