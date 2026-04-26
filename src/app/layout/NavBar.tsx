import { Group } from "@mui/icons-material"
import { Box, AppBar , Toolbar, Typography,Button, Container } from "@mui/material"

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
      }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Group fontSize='large' sx={{ color: 'white' }} />
              <Typography variant='h4' sx={{ fontWeight: 'bold'}}>Reactivities</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold', color: 'white'}}>
                Activities
              </Button>
              <Button sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold', color: 'white'
              }}>
                About
              </Button>
              <Button sx={{
                fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold', color: 'white'
              }}>
                Contact
              </Button>
            </Box>
            <Button size="large" variant="contained" color="warning">Create activity</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Navbar