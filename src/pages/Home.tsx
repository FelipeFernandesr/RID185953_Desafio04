import { Box, Container, Grid } from '@mui/material'
import { NavBar, Hero, Projetos } from '@/components'

function Home() {
  return (
    <>
      <NavBar />
      <Box>
        <Grid container>
          <Grid>
            <Container>
              <Hero />
              <Projetos />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
