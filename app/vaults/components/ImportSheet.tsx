import { LoadingButton } from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
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
import { GET_IMPORT_QUERY } from '@/packages/gql/api/importAPI';
import { DocumentQualityType, FileType, ImportTypes } from '@/packages/gql/generated/graphql';
import { useLazyQuery } from '@apollo/client/react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const ImportSheet = () => {
  const [initiateImport] = useLazyQuery(GET_IMPORT_QUERY);
  const [url, setUrl] = useState<string>('');
  const [start, setStart] = useState<number>(0);
  const [exclude, setExclude] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalContent, setTotalContent] = useState<number>(0);
  const [subDirectory, setSubDirectory] = useState<string>('');
  const [fileType, setFileType] = useState<FileType>(FileType.Image);
  const [importType, setImportType] = useState<ImportTypes>(ImportTypes.Profile);
  const [qualityType, setQualityType] = useState<DocumentQualityType>(DocumentQualityType.HighDefinition);

  const handleInitiate = async () => {
    setLoading(true);
    try {
      await initiateImport({
        variables: {
          input: {
            url,
            fileType,
            qualityType,
            totalContent,
            subDirectory,
            exclude,
            importType,
            start
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
      <SheetContent className='p-1'>
        <SheetHeader>
          <SheetTitle>Add new contents</SheetTitle>
          <SheetDescription>Be descriptive about site information</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 space-y-2">
          <div className="grid gap-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="site-url"
              type="url"
              placeholder="https://meow@example.com"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subDirectory">Subdirectory</Label>
            <Input
              id="subDirectory"
              type="text"
              placeholder="chris"
              required
              value={subDirectory}
              onChange={(e) => setSubDirectory(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 space-x-2">
            <div className="grid gap-2">
              <Label htmlFor="subDirectory">Start</Label>
              <Input
                id="start"
                type="text"
                placeholder="0"
                required
                value={start}
                onChange={(e) => setStart(Number(e.target.value.replace(/[^0-9]/g, '')))}
              />
            </div>{' '}
            <div className="grid gap-2">
              <Label htmlFor="subDirectory">Exclude</Label>
              <Input
                id="exclude"
                type="text"
                placeholder="0"
                required
                value={exclude}
                onChange={(e) => setExclude(Number(e.target.value.replace(/[^0-9]/g, '')))}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="grid grid-cols-2 space-x-2">
              <div className="grid gap-2">
                <Label htmlFor="quality-type">Quality type</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">{qualityType.replace(/_/g, ' ')}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Quality types</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={qualityType} onValueChange={(val) => setQualityType(val as DocumentQualityType)}>
                      <DropdownMenuRadioItem value={DocumentQualityType.HighDefinition}>High</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value={DocumentQualityType.LowDefinition}>Low</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value={DocumentQualityType.DefaultDefinition}>Default</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quality-type">File type</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">{fileType.replace(/_/g, ' ')}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>File types</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={fileType} onValueChange={(val) => setFileType(val as FileType)}>
                      <DropdownMenuRadioItem value={FileType.Image}>Image</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value={FileType.Video}>Video</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value={FileType.Document}>Document</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value={FileType.Audio}>Audio</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="file-type">Import type</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">{importType.replace(/_/g, ' ')}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Import types</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={importType} onValueChange={(val) => setImportType(val as ImportTypes)}>
                    <DropdownMenuRadioItem value={ImportTypes.Profile}>Profile</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={ImportTypes.Branch}>Branch</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value={ImportTypes.Single}>Single</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <SheetFooter>
          <LoadingButton title="Submit" onClick={handleInitiate} disabled={!url} loading={loading}/>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
