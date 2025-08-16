'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Box, Card, CardHeader, Chip, IconButton, List, Skeleton, Typography } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';

export const Channels = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const messages = {
    fullName: 'John Walker',
    title: 'New Message',
    message: 'You have received a new message from John.',
    timestamp: '2025-08-16T14:32:00Z',
    read: false,
    type: 'SUBSCRIBER'
  };
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
        ? Array.from({ length: 5 }).map((_, idx) => (
            <Box key={idx}>
              <Card sx={{ minWidth: 600, minHeight: 100, m: 2 }}>
                <CardHeader
                  avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                  title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
                  subheader={<Skeleton animation="wave" height={10} width="40%" />}
                />
              </Card>
            </Box>
          ))
        : Array(40)
            .fill(0)
            .map((_, idx) => {
              return (
                <Box key={idx} width={'100%'}>
                  <Card sx={{ minWidth: 600, minHeight: 100, m: 0.5, background: idx % 2 === 0 ? 'grey' : 'white' }}>
                    <CardHeader
                      avatar={<Avatar src="/assets/3.jpg" sx={{ width: 40, height: 40 }} />}
                      title={
                        <Box display={'flex'} flexDirection={'row'}>
                          <Typography mr={5}>{messages.fullName}</Typography>
                          <Chip label={messages.type} color="primary" />
                        </Box>
                      }
                      subheader={
                        <Box display={'flex'} flexDirection={'row'}>
                          <Typography mr={3}>{messages.message}</Typography>
                          <Typography>{moment(messages.timestamp).fromNow()}</Typography>
                        </Box>
                      }
                      action={
                        <IconButton>
                          <KeyboardArrowDownIcon />
                        </IconButton>
                      }
                    />
                  </Card>
                </Box>
              );
            })}
    </List>
  );
};
