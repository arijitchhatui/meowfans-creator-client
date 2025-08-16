'use client';

import { AppConfig } from '@/lib/app.config';

import WidgetsIcon from '@mui/icons-material/Widgets';
import { Box, IconButton, Tooltip } from '@mui/material';
import Image from 'next/image';

interface Props {
  appHeaderButtonOptions: {
    center: { icon: React.JSX.Element; title: string; typo: string }[];
    right: { icon: React.JSX.Element; title: string }[];
  };
}

export const AppHeader: React.FC<Props> = ({ appHeaderButtonOptions }) => {
  return (
    <Box
      position={'fixed'}
      zIndex={10}
      sx={{ backdropFilter: 'blur(20px)' }}
      width={'100%'}
      justifyContent={'space-between'}
      alignContent={'center'}
      alignItems={'center'}
      borderBottom={'1px solid'}
      p={0}
    >
      <Box
        justifyContent={'space-between'}
        alignContent={'center'}
        alignItems={'center'}
        display={'flex'}
        flexDirection={'row'}
        borderRadius={'35px'}
        mx={3}
        px={2}
        pt={1}
      >
        {/* LEFT SIDE BUTTONS */}
        <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'} gap={1}>
          <Tooltip title={'Menu'}>
            <IconButton size="large">
              <WidgetsIcon sx={{ width: 30, height: 30 }} />
            </IconButton>
          </Tooltip>
          <Box width={50} height={50} sx={{ cursor: 'pointer' }}>
            <Image src={AppConfig.icon} alt="logo" width={100} height={100} />
            ᴹᴱᴼᵂ
          </Box>
        </Box>
        {/* CENTER BUTTONS */}
        <Box
          justifyContent={'space-between'}
          alignContent={'center'}
          alignItems={'center'}
          display={'flex'}
          flexDirection={'row'}
          gap={3}
        >
          {appHeaderButtonOptions.center.map((button, idx) => (
            <Box
              key={idx}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignContent={'center'}
              alignItems={'center'}
              textTransform={'uppercase'}
              sx={{
                fontSize: '18px',
                textAlign: 'center'
              }}
            >
              <Tooltip title={button.title}>
                <IconButton size={'large'} sx={{ mx: 1 }}>
                  {button.icon}
                </IconButton>
              </Tooltip>
              {button.typo}
            </Box>
          ))}
        </Box>
        {/* RIGHT SIDE BUTTONS */}
        {appHeaderButtonOptions.right.map((button, idx) => (
          <Box key={idx} justifyContent={'space-between'} alignContent={'center'} alignItems={'center'}>
            <Tooltip title={button.title}>
              <IconButton size="large">{button.icon}</IconButton>
            </Tooltip>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
