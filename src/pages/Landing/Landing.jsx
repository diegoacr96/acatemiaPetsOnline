import { Course } from "../../components";
import { Container, Heading, Content } from "./styles";

import { links } from "../../utils";

export const Home = () => {
  return (
    <Container>
      <Content>
        <Heading>Cursos</Heading>
        {links.map((link, idx) => (
          <Course
            key={idx}
            title={link.title}
            buyLink={link.buyLink}
            infoLink={link.infoLink}
          />
        ))}
      </Content>
    </Container>
  );
};
