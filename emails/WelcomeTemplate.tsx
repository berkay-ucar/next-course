import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Preview,
  Tailwind,
  Container,
  Text,
  Link,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body style={body}>
        <Container>
          <Text style={heading}>Hello {name}</Text>
          <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

const body: CSSProperties = {
  //background: "#f5f",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
