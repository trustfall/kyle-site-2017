import React from 'react';
import styled from 'styled-components';

const LogoEmail = ({ color }) => (
  <Image
    width="100%"
    height="100%"
    viewBox="0 0 66 49"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M0,0l0,48.188l65.029,-0.001l0,-48.187l-65.029,0Zm22.591,29.534l9.923,7.874l9.924,-7.874l15.86,14.903l-51.567,0l15.86,-14.903Zm-18.697,12.329l0,-27.164l15.673,12.436l-15.673,14.728Zm41.568,-14.728l15.673,-12.436l0,27.164l-15.673,-14.728Zm15.673,-23.385l0,6.09l-28.621,22.709l-28.62,-22.709l0,-6.09l57.241,0Z"
      style={color ? { fill: color } : { fill: '#7e2b71' }}
    />
  </Image>
);

export default LogoEmail;

const Image = styled.svg`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 1.41421;
`;

const Path = styled.path`
  fill: #963f94;
  fill-rule: nonzero;
`;
