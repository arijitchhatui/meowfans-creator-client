import { SAvatar } from '@/components/Avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Div } from '@/wrappers/HTMLWrappers';
import { BadgeCheckIcon } from 'lucide-react';

export const Description = () => {
  return (
    <Div className="w-full flex justify-end relative">
      <Card className="w-full max-w-sm mt-1 overflow-hidden">
        <CardHeader>
          <CardTitle>John Doe</CardTitle>
          <CardDescription>Hey there! everyone just getting hang of meowfans</CardDescription>
          <CardAction>
            <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600 flex items-center gap-1">
              <BadgeCheckIcon className="w-4 h-4" />
              Creator
            </Badge>
          </CardAction>
        </CardHeader>

        <Div className="relative w-full h-40 bg-[url(/assets/3.jpg)] bg-center bg-cover rounded-md" />

        <CardContent className="relative flex justify-center -mt-16">
          <SAvatar fallback="profile_pic" url="./assets/1.jpg" className="w-40 h-40 rounded-full border-4shadow-md" />
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Edit profile information
          </Button>
        </CardFooter>
      </Card>
    </Div>
  );
};
