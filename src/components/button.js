import React from 'react'
import styled from 'styled-components'

export default function button({ children, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-family: Monument Bold;
  background: yellow;
  padding: .5rem;
  border-radius: 150px;
  margin-bottom: 1rem;
  color: black;
  mix-blend-mode: screen;
  text-align: center;
  cursor: pointer;
  transition: all .2s ease-in-out;
  display: inline-block;

  &:hover {
    transform: scale(1.1);
  }
`

