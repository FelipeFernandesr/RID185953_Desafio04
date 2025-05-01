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
  flex-direction: column;
  gap: ${pxToRem(10)};
  height: ${pxToRem(430)};
  margin: ${pxToRem(60)} 0;
`

const TimelineBar = styled.div`
  position: relative;
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
  z-index: 3;
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

const DivLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`

const GridItem = styled.div`
  width: 25%;
  justify-content: center;
  gap: ${pxToRem(60)};
  text-align: center;
`

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${pxToRem(50)};
  margin: ${pxToRem(20)} 0;
`

const sobreTexts = [
  {
    ano: '2019',
    descricao: 'Me formei em Análise e Desenvolvimento de Sistemas',
  },
  {
    ano: '2022',
    descricao:
      'Iniciei um curso de desenvolvimento web front-end voltado para linguagem PHP',
  },
  {
    ano: '2024',
    descricao: 'Entrei na formação de Tecnologia da escola DNC.',
  },
  {
    ano: '2024',
    descricao: 'Meu primeiro freelancer.',
  },
]

function Sobre() {
  return (
    <StyledDiv id="sobre-mim">
      <TitleSobre>Sobre mim</TitleSobre>
      <TimelineWrapper>
        <DivLine>
          {sobreTexts.map((item, index) => (
            <GridItem key={index}>
              <Date>{item.ano}</Date>
            </GridItem>
          ))}
        </DivLine>
        <DivLine>
          <TimelineContainer>
            <TimelineBar />
            <Point left="13%" />
            <Point left="38%" />
            <Point left="63%" />
            <Point left="88%" />
          </TimelineContainer>
        </DivLine>
        <DivLine>
          {sobreTexts.map((item, index) => (
            <GridItem key={index}>
              <Text>{item.descricao}</Text>
            </GridItem>
          ))}
        </DivLine>
      </TimelineWrapper>
    </StyledDiv>
  )
}

export default Sobre
