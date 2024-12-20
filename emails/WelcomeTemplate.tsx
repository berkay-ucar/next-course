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
      <Tailwind>
        <Body className="bg-pink-400">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
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
