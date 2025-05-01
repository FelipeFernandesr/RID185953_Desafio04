import { Box, Container, Grid } from '@mui/material'
import { NavBar, Hero, Projetos, Sobre, Footer } from '@/components'

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
              <Footer />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
