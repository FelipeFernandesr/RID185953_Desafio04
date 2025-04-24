import { Box, Container, Grid } from '@mui/material'
import { NavBar, Hero, Projetos, Sobre } from '@/components'

function Home() {
  return (
    <>
      <NavBar />
      <Box>
        <Grid container>
          <Grid>
            <Container maxWidth={false}>
              <Hero />
              <Projetos />
              <Sobre />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
