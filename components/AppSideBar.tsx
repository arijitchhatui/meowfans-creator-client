'use client';

import { Box, Button } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { AppLogo } from './AppLogo';

interface Props {
  appSideBarButtonOptions: { icon: React.JSX.Element; path: string; label: string }[];
}

export const AppSideBar: React.FC<Props> = ({ appSideBarButtonOptions }) => {
  const router = useRouter();
  const pathname = usePathname();

  const getPath = (path: string): string => {
    return pathname === path ? 'GrayText' : 'Background';
  };
  return (
    <Box
      position="fixed"
      top="80px"
      left={0}
      width="220px"
      height="calc(100vh - 90px)"
      borderRight="1px solid"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      p={2}
      bgcolor="background.paper"
    >
      <Box display="flex" flexDirection="column" gap={2} width="100%">
        {appSideBarButtonOptions.map((option, idx) => (
          <Box key={idx} sx={{ backgroundColor: getPath(option.path) }}>
            <Button
              startIcon={option.icon}
              sx={{
                justifyContent: 'flex-start',
                width: '100%',
                boxShadow: 1,
                '&:hover': { boxShadow: 4, transform: 'scale(1.01)' }
              }}
              onClick={() => router.push(option.path)}
            >
              {option.label}
            </Button>
          </Box>
        ))}
        <AppLogo />
      </Box>
    </Box>
  );
};
