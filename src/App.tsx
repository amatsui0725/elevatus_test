import { Box, Container, CssBaseline, Typography } from '@mui/material';
import JobsContainer from './container/Jobs';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: '#000' }}>
        <Container fixed>
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ height: 72 }}>
            <Typography variant="h4" sx={{ textTransform: 'uppercase', color: '#fff' }}>Elevatus</Typography>
            <Typography sx={{ color: '#fff' }}>Akira Matsui</Typography>
          </Box>
        </Container>
      </Box>
      <JobsContainer />
    </>
  );
}

export default App;
