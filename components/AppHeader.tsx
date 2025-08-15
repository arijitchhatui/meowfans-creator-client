'use client';

import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Box, IconButton, Typography } from '@mui/material';

export const AppHeader = () => {
  return (
    <Box
      position={'fixed'}
      zIndex={10}
      sx={{ backdropFilter: 'blur(16px)' }}
      width={'100%'}
      justifyContent={'space-between'}
      alignContent={'center'}
      alignItems={'center'}
      border={'1px solid'}
      borderRadius={'35px'}
      m={1}
    >
      <Box
        justifyContent={'space-evenly'}
        alignContent={'center'}
        alignItems={'center'}
        display={'flex'}
        flexDirection={'row'}
      >
        <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'} gap={1}>
          <IconButton>
            <WidgetsIcon />
          </IconButton>
          <Typography variant="body1" fontSize={25}>
            {' '}
            | M E O W |
          </Typography>
        </Box>
        <Box justifyContent={'inherit'} alignContent={'center'} alignItems={'center'} gap={1}>
          <IconButton>
            <VideoCameraBackIcon />
          </IconButton>
          <IconButton>
            <ControlCameraIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
