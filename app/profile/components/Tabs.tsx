/* eslint-disable @next/next/no-img-element */
'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GET_CREATOR_ASSETS_QUERY } from '@/packages/gql/api/assetsAPI';
import { Div } from '@/wrappers/HTMLWrappers';
import { useQuery } from '@apollo/client/react';
import { Heart, ImageIcon, Star } from 'lucide-react';

const mockImages = [
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
  '/assets/4.jpg',
  '/assets/5.jpg',
  '/assets/6.jpg',
  '/assets/7.jpg',
  '/assets/8.jpg'
];

export const Preferences = () => {
  // const {} = useQuery(GET_CREATOR_ASSETS_QUERY)
  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="grid w-full grid-cols-3 rounded-xl">
        <TabsTrigger value="posts" className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4" /> Purchases
        </TabsTrigger>
        <TabsTrigger value="liked" className="flex items-center gap-2">
          <Heart className="w-4 h-4" /> Liked
        </TabsTrigger>
        <TabsTrigger value="collections" className="flex items-center gap-2">
          <Star className="w-4 h-4" /> Collections
        </TabsTrigger>
      </TabsList>

      <TabsContent value="posts">
        <Div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {mockImages.map((img, idx) => (
            <img key={idx} src={img} alt="post" className="w-full h-60 object-cover" />
          ))}
        </Div>
      </TabsContent>

      <TabsContent value="liked">
        <Div className="flex flex-col gap-4 items-center justify-center h-40 text-muted-foreground">
          <Heart className="w-6 h-6" />
          <p>No liked posts yet</p>
        </Div>
      </TabsContent>

      <TabsContent value="collections">
        <Div className="flex flex-col gap-4 items-center justify-center h-40 text-muted-foreground">
          <Star className="w-6 h-6" />
          <p>No collections yet</p>
        </Div>
      </TabsContent>
    </Tabs>
  );
};
