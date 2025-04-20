import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { StyledDiv } from './StyledDiv'
import { StyledButton } from './StyledButton'

const TitleProjects = styled.h2`
  font-weight: 600;
  font-size: ${pxToRem(64)};
  line-height: 100%;
  letter-spacing: 0%;
`

const RepoCard = styled.div`
  width: 550px;
  height: 700px;
  margin-top: ${pxToRem(24)};
  padding: ${pxToRem(16)};
  border: 1px solid #ccc;
  border-radius: ${pxToRem(8)};
`
const RepoName = styled.h3`
  font-weight: 600;
  font-size: 36px;
  text-align: center;
`

const DivProjetos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
`

function Projetos() {
  const [repos, setRepos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/FelipeFernandesr/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data)
        setCarregando(false)
      })
      .catch((err) => {
        console.error('Erro ao buscar repositórios:', err)
        setCarregando(false)
      })
  }, [])

  return (
    <StyledDiv>
      <TitleProjects>Projetos</TitleProjects>
      <DivProjetos>
        {carregando ? (
          <p>Carregando projetos...</p>
        ) : (
          repos.map((repo) => (
            <RepoCard key={repo.id}>
              <RepoName>{repo.name}</RepoName>

              <p>{repo.description}</p>
              <small>⭐ {repo.stargazers_count}</small>
              <a></a>
              <StyledButton
                style={{
                  width: pxToRem(200),
                  marginLeft: `0`,
                  height: pxToRem(60),
                }}
                onClick={() => window.open(repo.html_url, '_blank')}
                target="_blank"
                rel="noreferrer"
              >
                Clique aqui
              </StyledButton>
            </RepoCard>
          ))
        )}
      </DivProjetos>
    </StyledDiv>
  )
}

export default Projetos
