import React from 'react'
import styled from 'styled-components'
import modelSImage from '../images/model-s.jpg';

function Section() {
  return (
    <Wrap> 
        Section
    </Wrap>
  )
}

export default Section


const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${modelSImage});;
  `;
