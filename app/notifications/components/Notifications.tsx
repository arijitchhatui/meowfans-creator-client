'use client';
import { Avatar, Box, Card, CardHeader, List, Skeleton, Typography } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';

export const Notifications = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const messages = {
    fullName: 'John Walker',
    title: 'New Message',
    message: 'You have received a new message from John.',
    timestamp: '2025-08-16T14:32:00Z',
    read: false,
    type: 'message'
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
                  <Box display={'flex'} flexDirection={'column'} m={1} width={'100%'}>
                    <Box
                      width={'100%'}
                      minHeight={100}
                      minWidth={600}
                      sx={{
                        transform: 'all 0.3s ease',
                        cursor: 'pointer',
                        boxShadow: 1,
                        width: '100%',
                        borderRadius: '10px',
                        background: idx % 2 === 0 ? 'grey' : 'white'
                      }}
                    >
                      <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        alignContent={'center'}
                        alignItems={'center'}
                      >
                        <Box
                          display={'flex'}
                          flexDirection={'row'}
                          justifyContent={'center'}
                          alignContent={'center'}
                          alignItems={'center'}
                        >
                          <Box width={40} height={40} m={1}>
                            <Avatar src={`/assets/${1}.jpg`} alt="avatar" />
                          </Box>
                          <Box m={1}>
                            <Typography>{messages.fullName}</Typography>
                          </Box>
                        </Box>
                        <Typography>{moment(messages.timestamp).fromNow()}</Typography>
                      </Box>
                      <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        alignContent={'center'}
                        alignItems={'center'}
                      >
                        <Typography>{messages.message}</Typography>
                        <Typography>{messages.type.toUpperCase()}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
    </List>
  );
};
