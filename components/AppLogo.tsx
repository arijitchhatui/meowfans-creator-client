'use client';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const show = keyframes`
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}
`;

export const AppLogo = () => {
  return (
    <Box
      sx={{
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        mt: 4
      }}
    >
      <Box
        sx={{
          height: '30px',
          overflow: 'hidden',
          display: 'inline-block',
          verticalAlign: 'middle'
        }}
      >
        <Box sx={{ animation: `${show} 5s linear infinite` }}>
          <Box
            sx={{
              color: '#fff',
              px: 1.5,
              height: '25px',
              mb: '25px',
              display: 'inline-block',
              background: '#4ec7f3'
            }}
          >
            MEOW
          </Box>
          <Box
            sx={{
              color: '#fff',
              px: 1.5,
              height: '25px',
              mb: '25px',
              display: 'inline-block',
              background: '#42c58a'
            }}
          >
            Meow
          </Box>
          <Box
            sx={{
              color: '#fff',
              px: 1.5,
              height: '25px',
              mb: '25px',
              display: 'inline-block',
              background: '#DC143C'
            }}
          >
            MEOW
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
