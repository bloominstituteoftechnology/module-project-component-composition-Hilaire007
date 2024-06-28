import React from "react";
import styled from "styled-components";

const StyledFigure = styled.figure`
  max-width: 500px;

  figcaption {
    font-style: italic;
  }
`;

export default function Figure({ imageURL, caption }) {
  return (
    <StyledFigure>
      <img src={imageURL} />
      <figcaption>Cool picture taken on {caption}</figcaption>
    </StyledFigure>
  );
}
