import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography fontSize="100px" fontWeight='bold'>404</Typography>
            <Typography fontSize='20px'>The page you’re looking for doesn’t exist.</Typography>
            <Button
              variant="contained"
              onClick={() => navigate(-1)}
              sx={{ bgcolor: 'rgb(100, 149, 237)' }}>
              Back to Dashboard
            </Button>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
