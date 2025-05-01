// NavBar.jsx
import styled from 'styled-components'
import { pxToRem } from '@/utils'
import inLogo from '/inlogo1.svg'
import gitLogo from '/gitlogo1.svg'

const NavArea = styled.div``

const Nav = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  background-color: #0f1624;
  padding: 1rem 0;
`

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 85vw;
`

const NavItem = styled.li`
  @media screen and (max-width: 768px) {
    a {
      font-size: ${pxToRem(16)};
    }
  }
`

const NavLink = styled.a`
  font-weight: 500;
  font-size: ${pxToRem(30)};
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  align-items: center;
  line-height: ${pxToRem(30)};
  &:hover {
    color: #00bfff;
  }
`

const CenterLogos = styled.div`
  display: flex;
  justify-content: left;
  gap: ${pxToRem(29)};
  align-items: center;
  width: 15vw;
  box-sizing: border-box;

  max-width: ${pxToRem(29.91)}; /* Define um tamanho máximo */
    height: auto;              /* Mantém a proporção */
    transition: transform 0.2s ease;

    /**&:hover {
      transform: scale(1.1); /* Pequeno zoom ao passar o mouse (opcional) */
    }*/
  }
`

const ImgLogo = styled.img`
  width: ${pxToRem(26)};
  height: auto;
  display: flex;
  aling-items: center;

  @media screen and (max-width: 768px) {
    width: ${pxToRem(16)};
  }
`

function NavBar() {
  return (
    <NavArea>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="/">Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/tecnologias">Tecnologias</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#sobre-mim">Sobre mim</NavLink>
          </NavItem>
        </NavList>
        <CenterLogos>
          <NavLink href="https://github.com/FelipeFernandesr" target="_blank">
            <ImgLogo src={gitLogo} alt="" />
          </NavLink>
          <NavLink
            href="https://www.linkedin.com/in/felipefernandesr/"
            target="_blank"
          >
            <ImgLogo src={inLogo} alt="" />
          </NavLink>
        </CenterLogos>
      </Nav>
    </NavArea>
  )
}

export default NavBar
