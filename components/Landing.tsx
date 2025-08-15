'use client';

import AddCommentIcon from '@mui/icons-material/AddComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';

export const LandingPage = () => {
  const footerOptions = [
    { icon: <FavoriteBorderIcon />, title: 'Like' },
    { icon: <AddCommentIcon />, title: 'Add Comment' },
    { icon: <ThumbDownIcon />, title: 'Dislike' },
    { icon: <RecommendIcon />, title: 'Recommend more' },
    { icon: <MoreVertIcon />, title: 'Info' }
  ];

  return (
    <Box display={'flex'} justifySelf={'center'} position={'absolute'} mt={6}>
      <Box justifyContent={'center'} alignItems={'center'}>
        {Array(12)
          .fill(0)
          .map((_, idx) => {
            return (
              <Box key={idx} m={1} mb={3}>
                {/* IMAGE HEADER */}
                <Box
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  sx={{
                    border: '1px solid',
                    borderRadius: '30px',
                    mb: 0.3
                  }}
                >
                  <Box display={'flex'} flexDirection={'row'} alignContent={'center'} alignItems={'center'} gap={1}>
                    <Avatar
                      src="/assets/1.jpg"
                      alt="avatar-url"
                      slotProps={{
                        fallback: 'var(--foreground)'
                      }}
                    />
                    <Typography variant="h6">John Hulk</Typography>
                  </Box>
                  <Box>
                    <IconButton>
                      <BookmarkIcon />
                    </IconButton>
                  </Box>
                </Box>
                {/* IMAGE CONTENT */}
                <Box mx={2} border={'ActiveBorder'}>
                  <Image width={400} height={400} src={`/assets/${idx + 1}.jpg`} alt={'image'} loading="lazy" />
                </Box>
                {/* IMAGE FOOTER */}
                <Box
                  sx={{
                    backdropFilter: 'blur(6px)',
                    border: '1px solid',
                    borderRadius: '30px',
                    mt: 0.3
                  }}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'row'}
                    alignContent={'center'}
                    alignItems={'center'}
                    gap={1}
                    justifyContent={'space-between'}
                  >
                    {footerOptions.map(({ icon, title }, idx) => (
                      <Box key={idx}>
                        <Tooltip title={title}>
                          <IconButton>{icon}</IconButton>
                        </Tooltip>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
