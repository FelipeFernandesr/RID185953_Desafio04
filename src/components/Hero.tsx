import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { StyledButton } from './StyledButton'
import { StyledDiv } from './StyledDiv'

const TitleHero = styled.h1`
  font-weight: 600;
  font-size: ${pxToRem(64)};
  line-height: 100%;
  letter-spacing: 0%;
`
const TextHero = styled.p`
  font-weight: 600;
  font-size: ${pxToRem(36)};
  line-height: 100%;
  letter-spacing: 0%;
  margin: 34px 3.5vw 50px;
`

function Hero() {
  return (
    <StyledDiv>
      <TitleHero>Bem-vindo ao meu portfólio!</TitleHero>
      <TextHero>
        Sou Felipe, desenvolvedor React, apaixonado por transformar ideias em
        interfaces intuitivas.
      </TextHero>
      <StyledButton children={'Saiba mais...'} />
    </StyledDiv>
  )
}

export default Hero
