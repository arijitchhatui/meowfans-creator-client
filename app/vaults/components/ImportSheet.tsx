import { LoadingButton } from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';
import { GET_IMPORT_QUERY } from '@/packages/gql/api/importAPI';
import { DocumentQualityType, FileType } from '@/packages/gql/generated/graphql';
import { useLazyQuery } from '@apollo/client/react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const ImportSheet = () => {
  const [initiateScrape] = useLazyQuery(GET_IMPORT_QUERY);
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [hasBranch, setHasBranch] = useState<boolean>(false);
  const [fileType, setFileType] = useState<FileType>(FileType.Image);
  const [subDirectory, setSubDirectory] = useState<string>('');
  const [qualityType, setQualityType] = useState<DocumentQualityType>(DocumentQualityType.HighDefinition);
  const [totalContent, setTotalContent] = useState<number>(0);

  const handleInitiate = async () => {
    setLoading(true);
    try {
      await initiateScrape({
        variables: {
          input: {
            url,
            fileType,
            hasBranch,
            qualityType,
            totalContent,
            subDirectory
          }
        }
      });
      toast.success('Job added, come back after a while');
    } catch {
      toast.error('Something wrong happened!');
    } finally {
      handleClose();
    }
  };

  const handleClose = () => {
    setLoading(false);
    setHasBranch(false);
    setUrl('');
    setFileType(FileType.Image);
    setQualityType(DocumentQualityType.HighDefinition);
    setTotalContent(0);
    setSubDirectory('');
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Import</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add new contents</SheetTitle>
          <SheetDescription>Be descriptive about site information</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 space-y-2">
          <div className="grid gap-2">
            <Label htmlFor="url">URL</Label>
            <Input id="site-url" type="url" placeholder="meow@example.com" required value={url} onChange={(e) => setUrl(e.target.value)} />
          </div>
          {hasBranch && (
            <div className="grid gap-2">
              <Label htmlFor="subDirectory">Sub directory</Label>
              <Input
                id="subDirectory"
                type="text"
                placeholder="chris"
                required
                value={subDirectory}
                onChange={(e) => setSubDirectory(e.target.value)}
              />
            </div>
          )}
          <div className="grid gap-2">
            <Switch id="check-branch" checked={hasBranch} onCheckedChange={setHasBranch} />
            <Label htmlFor="check-branch">Has Branch</Label>
          </div>
          <div className="flex flex-row justify-between">
            <div className="grid gap-2">
              <Label htmlFor="quality-type">Quality type</Label>
              <select
                id="quality-type"
                value={qualityType}
                onChange={(e) => setQualityType(e.target.value as DocumentQualityType)}
                className="border rounded-2xl px-2 py-1"
                required
              >
                <option value={DocumentQualityType.HighDefinition}>HIGH:ANCHOR</option>
                <option value={DocumentQualityType.LowDefinition}>LOW:IMAGE</option>
                <option value={DocumentQualityType.DefaultDefinition}>DEFAULT:ANCHOR</option>
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="file-type">File type</Label>
              <select
                id="file-type"
                value={qualityType}
                onChange={(e) => setFileType(e.target.value as FileType)}
                className="border rounded-2xl px-2 py-1"
                required
              >
                <option value={FileType.Image}>Image</option>
                <option value={FileType.Video}>Video</option>
              </select>
            </div>
          </div>
        </div>
        <SheetFooter>
          <LoadingButton title="Submit" onClick={handleInitiate} disabled={!url} />
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
