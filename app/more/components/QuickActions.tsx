import { ImportModal } from '@/components/modals/ImportModal';
import { TriggerModal } from '@/components/modals/TriggerModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export const QuickActions = () => {
  const [openImportModal, setOpenImportModal] = useState<boolean>(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <TriggerModal onChangeModalState={() => setOpenImportModal(true)} modalText="Connect to service" />
        <Button variant="outline" className="w-full justify-start">
          Export settings
        </Button>
        <Button variant="destructive" className="w-full justify-start">
          Reset to defaults
        </Button>
      </CardContent>
      <ImportModal isOpen={openImportModal} setOpen={setOpenImportModal} />
    </Card>
  );
};
