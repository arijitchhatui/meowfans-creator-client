import { ShadCnBackgrounds } from '@/lib/constants';
import { Div } from '@/wrappers/HTMLWrappers';
import { Button } from '../ui/button';

interface Props {
  setAnimatedBg: React.Dispatch<React.SetStateAction<ShadCnBackgrounds | null>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const backgrounds = [
  { label: 'Flickering grid', type: ShadCnBackgrounds.FLICKERING },
  { label: 'Warp background', type: ShadCnBackgrounds.WARP },
  { label: 'Retro background', type: ShadCnBackgrounds.RETRO },
  { label: 'Box background', type: ShadCnBackgrounds.BOX },
  { label: 'Default', type: null }
];
export const ApplyChannelBackground: React.FC<Props> = ({ setAnimatedBg, setModalOpen }) => {
  return (
    <Div className="flex flex-col space-y-3">
      {backgrounds.map((bg, idx) => (
        <Button
          key={idx}
          variant={'outline'}
          onClick={() => {
            setAnimatedBg(bg.type);
            setModalOpen(false);
          }}
        >
          {bg.label}
        </Button>
      ))}
    </Div>
  );
};
