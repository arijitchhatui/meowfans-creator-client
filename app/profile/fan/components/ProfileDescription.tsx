import { SAvatar } from '@/components/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GET_FAN_PROFILE_QUERY } from '@/packages/gql/api/fan';
import { FanProfilesEntity } from '@/packages/gql/generated/graphql';
import { Div } from '@/wrappers/HTMLWrappers';
import { useQuery } from '@apollo/client/react';
import { BadgeCheckIcon, Heart } from 'lucide-react';

export const ProfileDescription = () => {
  const { data } = useQuery<FanProfilesEntity>(GET_FAN_PROFILE_QUERY);

  return (
    <Div className="w-full flex justify-end relative">
      <Card className="w-full max-w-sm mt-1 overflow-hidden">
        <CardHeader>
          <CardTitle>{data?.user.firstName}</CardTitle>
          <CardDescription>Hey there! everyone just getting hang of meowfans</CardDescription>
          <CardAction>
            <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 flex items-center gap-1">
              <BadgeCheckIcon className="w-4 h-4" />
              {data?.user.roles}
            </Badge>
          </CardAction>
        </CardHeader>

        <Div className="relative w-full md:h-40 h-20 bg-[url(/assets/3.jpg)] bg-center bg-cover rounded-md" />

        <CardContent className="relative flex justify-between md:justify-center">
          <SAvatar fallback="profile_pic" url="/assets/2.jpg" className="md:w-40 md:h-40 w-20 h-20 rounded-full border-4shadow-md -mt-16" />
          <Div className="flex flex-row justify-end md:hidden gap-1">
            <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 flex items-center gap-1">
              <BadgeCheckIcon className="w-3 h-3" />
              39.5K
            </Badge>
            <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 flex items-center gap-1">
              <Heart className="w-3 h-3" />
              120.5K
            </Badge>
          </Div>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Edit profile information
          </Button>
          <Div className="flex gap-5 justify-between">
            <Button variant="outline">Message</Button>
            <Div className="flex gap-1">
              <Button variant={'destructive'}>Block</Button>
              <Button variant="secondary">Report</Button>
            </Div>
          </Div>
        </CardFooter>
      </Card>
    </Div>
  );
};
