import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { StyledDiv } from './StyledDiv'
import inLogo from '/inlogo1.svg'
import gitLogo from '/gitlogo1.svg'
import figma from '/figma.svg'

const DivFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const DivContato = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${pxToRem(114)};
  font-size: clamp(1rem, 2vw, 2rem);
`
const Contato = styled.div`
  text-align: start;
`
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${pxToRem(348)};
`
const ImgLogo = styled.img`
  width: ${pxToRem(69)};
  height: auto;
  display: flex;
`

function Footer() {
  return (
    <StyledDiv>
      <DivFooter>
        <DivContato>
          <Contato>
            <p>Meu contato:</p>
            <p>21 97908-6285</p>
          </Contato>
          <Contato>
            <p>Email:</p>
            <p>felipefrf9@gmail.com</p>
          </Contato>
        </DivContato>
        <Logo>
          <a href="https://github.com/FelipeFernandesr" target="_blank">
            <ImgLogo src={gitLogo} />
          </a>
          <a
            href="https://www.linkedin.com/in/felipefernandesr/"
            target="_blank"
          >
            <ImgLogo src={inLogo} />
          </a>
          <a
            href="https://www.figma.com/files/team/1411155321952021840/all-projects?fuid=1411155320225249216"
            target="_blank"
          >
            <ImgLogo
              style={{ width: '40px', height: `${pxToRem(57)}` }}
              src={figma}
            />
          </a>
        </Logo>
      </DivFooter>
    </StyledDiv>
  )
}

export default Footer
