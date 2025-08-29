import { Div } from '@/wrappers/HTMLWrappers';
import { Component, LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';

type buttonSize = 'default' | 'lg' | 'sm' | 'icon';

interface Props {
  onChangeModalState: React.Dispatch<React.SetStateAction<boolean | null>>;
  modalIcon?: { icon: LucideIcon; size?: buttonSize };
  modalText?: string;
}

export const TriggerModal: React.FC<Props> = ({ onChangeModalState, modalIcon = { icon: Component, size: 'default' }, modalText }) => {
  return (
    <Div className={'flex flex-row'}>
      <Button variant="outline" onClick={() => onChangeModalState(true)} size={modalIcon.size}>
        {modalIcon && <modalIcon.icon />}
        {modalText}
      </Button>
    </Div>
  );
};
