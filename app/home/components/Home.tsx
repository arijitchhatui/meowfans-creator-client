/* eslint-disable @next/next/no-img-element */
'use client';

import AddCommentIcon from '@mui/icons-material/AddComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  Skeleton,
  Tooltip,
  Typography
} from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';

export const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const messages = {
    fullName: 'John Walker',
    title: 'New Message',
    message: 'You have received a new message from John.',
    timestamp: '2025-08-16T14:32:00Z',
    read: false,
    type: 'SUBSCRIBER'
  };
  const footerOptions = [
    { icon: <FavoriteBorderIcon />, title: 'Like' },
    { icon: <AddCommentIcon />, title: 'Add Comment' },
    { icon: <ThumbDownIcon />, title: 'Dislike' },
    { icon: <RecommendIcon />, title: 'Recommend more' },
    { icon: <MoreVertIcon />, title: 'Info' }
  ];
  return (
    <List
      sx={{
        position: 'absolute',
        justifySelf: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        top: '80px',
        margin: 'auto'
      }}
    >
      {loading
        ? Array.from({ length: 1 }).map((_, idx) => (
            <Box key={idx}>
              <Card sx={{ minWidth: 400, minHeight: 100, m: 2 }}>
                <CardHeader
                  avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                  title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
                  subheader={<Skeleton animation="wave" height={10} width="40%" />}
                />
                <Box mx={2} border={'ActiveBorder'}>
                  <Skeleton width={400} height={400} variant="rectangular" />
                </Box>
                <CardContent>
                  <React.Fragment>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                  </React.Fragment>
                </CardContent>
              </Card>
            </Box>
          ))
        : Array(40)
            .fill(0)
            .map((_, idx) => {
              return (
                <Box key={idx} width={'100%'}>
                  <Card sx={{ minWidth: 400, minHeight: 100, m: 0.5 }}>
                    <CardHeader
                      avatar={<Avatar src="/assets/3.jpg" sx={{ width: 40, height: 40 }} />}
                      title={<Typography mr={5}>{messages.fullName}</Typography>}
                      subheader={<Typography>{moment(messages.timestamp).fromNow()}</Typography>}
                      action={
                        <Box>
                          <IconButton>
                            <BookmarkIcon />
                          </IconButton>
                          <IconButton>
                            <KeyboardArrowDownIcon />
                          </IconButton>
                        </Box>
                      }
                    />
                    <Box
                      mx={2}
                      border={'ActiveBorder'}
                      width={400}
                      height={300}
                      sx={{ overflow: 'hidden', objectFit: 'cover' }}
                    >
                      <img
                        src={`/assets/${7}.jpg`}
                        alt={'image'}
                        loading="lazy"
                        style={{ objectFit: 'cover', overflow: 'hidden' }}
                      />
                    </Box>
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                        zIndex: 100
                      }}
                    >
                      {footerOptions.map(({ icon, title }, idx) => (
                        <Box key={idx}>
                          <Tooltip title={title}>
                            <IconButton>{icon}</IconButton>
                          </Tooltip>
                        </Box>
                      ))}
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
    </List>
  );
};
