import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { StyledDiv } from './StyledDiv'

const TitleSobre = styled.h2`
  font-weight: 600;
  font-size: ${pxToRem(64)};
`

const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: ${pxToRem(10)};
  height: ${pxToRem(430)};
  margin: ${pxToRem(60)} 0;
`

const TimelineBar = styled.div`
  position: absolute;
  align-items: center;
  width: 59vw;
  margin: auto;
  top: 49%;
  left: 0;
  right: 0;
  height: 12px;
  background-color: #fff;
  transform: translateY(-50%);
`

const Point = styled.div<{ left: string }>`
  position: absolute;
  top: 49%;
  left: ${(props) => props.left};
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #fff;
  z-index: 1;
`
const Date = styled.h3`
  font-weight: 600;
  font-size: ${pxToRem(36)}};
`

const Text = styled.p`
  font-size: ${pxToRem(28)};
  line-height: 100%;
  align-items: flex-end;
`

const GridItem = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  gap: ${pxToRem(55)};
  flex-direction: column;
  text-align: center;
`

function Sobre() {
  return (
    <StyledDiv id="sobre-mim">
      <TitleSobre>Sobre mim</TitleSobre>
      <TimelineWrapper>
        <GridItem>
          <Date>2019</Date>
          <Text>Me formei em Análise e Desenvolvimento de Sistemas</Text>
        </GridItem>
        <GridItem>
          <Date>2022</Date>
          <Text>
            Iniciei um curso de desenvolvimento web front-end voltado para
            linguagem PHP.
          </Text>
        </GridItem>
        <GridItem>
          <Date>2024</Date>
          <Text>Entrei na formação de Tecnologia da escola DNC.</Text>
        </GridItem>
        <GridItem>
          <Date>2024</Date>
          <Text>Meu primeiro freelancer.</Text>
        </GridItem>

        <TimelineBar />
        {/* Bolinhas e Labels estáticos */}
        <Point left="13%" />
        <Point left="38%" />
        <Point left="63%" />
        <Point left="88%" />
      </TimelineWrapper>
    </StyledDiv>
  )
}

export default Sobre
