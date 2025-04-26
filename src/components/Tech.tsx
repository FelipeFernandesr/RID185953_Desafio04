import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { StyledDiv } from './StyledDiv'

const Title = styled.h2`
  font-weight: 600;
  font-size: ${pxToRem(64)};
  line-height: 100%;
  letter-spacing: 0%;
`

const Texto = styled.p`
  font-weight: 600;
  font-size: ${pxToRem(36)};
  line-height: 100%;
  letter-spacing: 0%;
  margin: 34px 3.5vw ${pxToRem(150)};
`

const Divtech = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4vw;
  width: 50vw;
  margin: auto;
`

const img = [
  '/html.svg',
  '/css.svg',
  '/js.svg',
  '/ts.svg',
  '/react.svg',
  '/bootstrap.svg',
  '/sass.svg',
  '/php.svg',
  '/laravel.svg',
  '/jQuery.svg',
  '/git.svg',
]

function Tech() {
  return (
    <StyledDiv>
      <Title>Tecnologias</Title>
      <Texto>
        Essas são as linguagens, frameworks e libs que gosto de utilizar no meu
        desenvolvimento.
      </Texto>
      <Divtech>
        {img.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={src.replace(/^\/|\.svg$/g, '')}
            style={{ width: 200, margin: 10 }}
          />
        ))}
      </Divtech>
    </StyledDiv>
  )
}

export default Tech
