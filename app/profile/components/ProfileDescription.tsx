import { SAvatar } from '@/components/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GET_CREATOR_PROFILE_QUERY } from '@/packages/gql/api/creatorAPI';
import { GetCreatorProfileQuery } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import { useQuery } from '@apollo/client/react';
import { BadgeCheckIcon, Heart } from 'lucide-react';

interface Props {
  creatorInfo?: GetCreatorProfileQuery;
}

export const ProfileDescription: React.FC<Props> = ({ creatorInfo }) => {
  return (
    <Div className="w-full flex justify-end relative">
      <Card className="w-full max-w-sm mt-1 overflow-hidden">
        <CardHeader>
          <CardTitle>{creatorInfo?.getCreatorProfile.user.username}</CardTitle>
          <CardDescription>{creatorInfo?.getCreatorProfile.bio}</CardDescription>
          <CardAction>
            <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 flex items-center gap-1">
              <BadgeCheckIcon className="w-4 h-4" />
              {creatorInfo?.getCreatorProfile.user.roles}
            </Badge>
          </CardAction>
        </CardHeader>

        <Div className={`relative w-full md:h-40 h-20 bg-[url(${creatorInfo?.getCreatorProfile.user.avatarUrl})] bg-center bg-cover rounded-md`} />

        <CardContent className="relative flex justify-between md:justify-center">
          <SAvatar
            fallback="profile"
            url={creatorInfo?.getCreatorProfile.user.avatarUrl}
            className="md:w-40 md:h-40 w-20 h-20 rounded-full border-4shadow-md -mt-16"
          />
          <Div className="flex flex-row justify-end md:hidden gap-1">
            <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 flex items-center gap-1">
              <BadgeCheckIcon className="w-3 h-3" />
              {creatorInfo?.getCreatorProfile.totalSubscriber}
            </Badge>
            <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {creatorInfo?.getCreatorProfile.totalPost}
            </Badge>
          </Div>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Edit profile information
          </Button>
          <Div className="flex gap-3 justify-center">
            <Button className="flex-1">Follow</Button>
            <Button variant="outline" className="flex-1">
              Message
            </Button>
            <Button variant="outline" className="flex-1">
              Subscribe
            </Button>
          </Div>
        </CardFooter>
      </Card>
    </Div>
  );
};
