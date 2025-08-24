import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { ShadCnBackgrounds } from '@/lib/constants';
import { H1, Typography } from '@/wrappers/HTMLWrappers';

interface Props {
  onClick?: () => unknown;
  background?: ShadCnBackgrounds | null;
}

export const NoChatSelected: React.FC<Props> = ({ background }) => {
  return (
    <ApplyShadCnBackground background={background}>
      <H1 className="text-4xl text-center justify-center tracking-tight font-bold mb-4">Select a channel to start messaging</H1>
      <Typography className="text-xl justify-center text-center opacity-80">Where meows come alive</Typography>
    </ApplyShadCnBackground>
  );
};
