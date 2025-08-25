import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Div } from '@/wrappers/HTMLWrappers';

export const MessageInput = () => {
  return (
    <Div className="fixed flex items-center gap-2 bottom-0 left-0 md:left-[var(--sidebar-width)] right-0 border shadow min-h-6">
      <Textarea placeholder="Type your message here." className="text-xs"/>
      <Button type="submit" variant="outline">
        Send
      </Button>
    </Div>
  );
};
