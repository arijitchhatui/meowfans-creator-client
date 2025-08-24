import { Div } from '@/wrappers/HTMLWrappers';
import { Component, LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface Props {
  onChangeModalState: React.Dispatch<React.SetStateAction<boolean | null>>;
  modalIcon?: { icon: LucideIcon };
  modalText?: string;
}

export const TriggerModal: React.FC<Props> = ({ onChangeModalState, modalIcon = { icon: Component }, modalText }) => {
  return (
    <Div className="flex flex-row">
      <Button variant="outline" onClick={() => onChangeModalState(true)}>
        {modalIcon && <modalIcon.icon />}
        {modalText}
      </Button>
    </Div>
  );
};
