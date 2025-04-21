import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { pxToRem } from '@/utils'
import { StyledDiv } from './StyledDiv'
import { StyledButton } from './StyledButton'
import { Repo } from '@/types'

const TitleProjects = styled.h2`
  font-weight: 600;
  font-size: ${pxToRem(64)};
  line-height: 100%;
  letter-spacing: 0%;
`

const RepoCard = styled.div`
  width: 30vw;
  height: 90vh;
  margin-top: ${pxToRem(24)};
  padding: ${pxToRem(25)};
  border: 1px solid #ccc;
  border-radius: ${pxToRem(8)};
  border-radius: 50px 0;
`
const RepoName = styled.h3`
  font-weight: 600;
  font-size: 36px;
  text-align: center;
`

const DivProjetos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8vw;
  margin: ${pxToRem(93)} 0 0 6vw;
`
const DivCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 81vh;
`
const ImgProject = styled.img`
  width: 30vw;
`

function Projetos() {
  const [repos, setRepos] = useState<Repo[]>([])
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
              <DivCenter>
                <ImgProject
                  src={`https://raw.githubusercontent.com/FelipeFernandesr/${repo.name}/main/public/imgProject.png`}
                  alt="Imagem do projeto"
                />
                <RepoName>{repo.name}</RepoName>
                <p>{repo.description || 'sem descrição disponivel'}</p>
              </DivCenter>
              {/*<small>⭐ {repo.stargazers_count}</small>*/}
              <StyledButton
                style={{
                  width: pxToRem(200),
                  marginLeft: `0`,
                  height: pxToRem(60),
                }}
                onClick={() => window.open(repo.html_url, '_blank')}
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
