import React from 'react';
import styled from 'styled-components';

// Define the styled component
const GifShape = styled.img`
  width: 500px;
  height: auto;
`;

function Gif({ link }) {
  return (
    <div>
      <GifShape src={link} alt="gif" />
    </div>
  );
}

export default Gif;