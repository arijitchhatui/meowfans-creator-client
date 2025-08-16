import { AppHeader } from '@/components/AppHeader';
import { AppSideBar } from '@/components/AppSideBar';
import { AppConfig } from '@/lib/app.config';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CollectionsIcon from '@mui/icons-material/Collections';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SearchIcon from '@mui/icons-material/Search';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { Box } from '@mui/material';
import React from 'react';

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  const appSideBarButtonOptions = [
    { icon: <HomeIcon />, label: 'Home', path: '/home' },
    { icon: <NotificationsIcon />, label: 'Notifications', path: '/notifications' },
    { icon: <ChatBubbleOutlineIcon />, label: 'Channels', path: '/channels' },
    { icon: <CollectionsIcon />, label: 'Assets', path: '/assets' },
    { icon: <PersonIcon />, label: 'Subscriptions', path: '/subscriptions' },
    { icon: <CreditCardIcon />, label: ' Add card', path: '/billing' },
    { icon: <PersonIcon />, label: 'My profile', path: `/${AppConfig.title}` },
    { icon: <MoreHorizIcon />, label: 'More', path: '/more' }
  ];

  const appHeaderButtonOptions = {
    center: [
      { icon: <BarChartIcon sx={{ width: 30, height: 30 }} />, title: 'Stats', typo: 'Stats' },
      { icon: <PeopleIcon sx={{ width: 30, height: 30 }} />, title: 'Meow Community', typo: 'Community' },
      { icon: <VideoCameraBackIcon sx={{ width: 30, height: 30 }} />, title: 'Make a meow', typo: 'Create' },
      { icon: <CloudUploadIcon sx={{ width: 30, height: 30 }} />, title: 'Upload a meow', typo: 'Upload' },
      { icon: <PlayCircleFilledIcon sx={{ width: 30, height: 30 }} />, title: 'Your Meows', typo: 'Meows' }
    ],
    right: [{ icon: <SearchIcon sx={{ width: 30, height: 30 }} />, title: 'Search' }]
  };

  return (
    <Box display={'block'} flexDirection={'row'}>
      <AppHeader appHeaderButtonOptions={appHeaderButtonOptions} />
      <AppSideBar appSideBarButtonOptions={appSideBarButtonOptions} />
      {children}
    </Box>
  );
}
