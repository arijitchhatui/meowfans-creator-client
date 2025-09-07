import { ShadCnBackgrounds } from '@/lib/constants';
import { Div } from '@/wrappers/HTMLWrappers';
import { useShadCnBackgroundStore } from '@/zustand/background.store';
import { Button } from '../ui/button';
import { Modal } from './Modal';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const backgrounds = [
  { label: 'Flickering grid', type: ShadCnBackgrounds.FLICKERING },
  { label: 'Warp background', type: ShadCnBackgrounds.WARP },
  { label: 'Retro background', type: ShadCnBackgrounds.RETRO },
  { label: 'Box background', type: ShadCnBackgrounds.BOX },
  { label: 'Vortex background', type: ShadCnBackgrounds.VORTEX },
  { label: 'Fiber waves background', type: ShadCnBackgrounds.FIBER_WAVES },
  { label: 'Squares background', type: ShadCnBackgrounds.SQUARES_BACKGROUND },
  { label: 'Wavy background', type: ShadCnBackgrounds.WAVY },
  { label: 'Galaxy background', type: ShadCnBackgrounds.GALAXY },
  { label: 'Default', type: null }
];

export const ApplyBackgroundModal: React.FC<Props> = ({ setOpen, open }) => {
  const { setBackground } = useShadCnBackgroundStore();
  return (
    <Modal isOpen={open} onClose={() => setOpen(false)} title="Change background">
      <Div className="flex flex-col space-y-3">
        {backgrounds.map((bg, idx) => (
          <Button
            key={idx}
            variant={'outline'}
            onClick={() => {
              setBackground(bg.type);
              setOpen(false);
            }}
          >
            {bg.label}
          </Button>
        ))}
      </Div>
    </Modal>
  );
};
