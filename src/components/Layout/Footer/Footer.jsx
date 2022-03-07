import React from "react";

import { WhiteAnchor, Container, Columns } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <Columns>
        <div>
          <span>Acceso de por vida</span>
        </div>
        <div>
          <span>7 Días de garantía</span>
        </div>
        <div>
          <span>
            <WhiteAnchor target="_blank" href="https://wa.me/573104220728">
              Whatsapp
            </WhiteAnchor>
          </span>
        </div>
      </Columns>
    </Container>
  );
};
