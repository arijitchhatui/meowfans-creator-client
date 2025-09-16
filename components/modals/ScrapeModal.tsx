'use client';

import { GET_SCRAPE_QUERY } from '@/packages/gql/api/scrapeAPI';
import { DocumentQualityType, FileType } from '@/packages/gql/generated/graphql';
import { useLazyQuery } from '@apollo/client/react';
import { Loader2 } from 'lucide-react';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Modal } from './Modal';

interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ScrapeModal: React.FC<Props> = ({ isOpen, setOpen }) => {
  const [initiateScrape] = useLazyQuery(GET_SCRAPE_QUERY);
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [hasBranch, setHasBranch] = useState<boolean>(false);
  const [fileType, setFileType] = useState<FileType>(FileType.Image);
  const [subDirectory, setSubDirectory] = useState<string>('');
  const [qualityType, setQualityType] = useState<DocumentQualityType>(DocumentQualityType.HighDefinition);
  const [totalContent, setTotalContent] = useState<number>(0);

  const handleInitiate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    setOpen(false);
    setHasBranch(false);
    setUrl('');
    setFileType(FileType.Image);
    setQualityType(DocumentQualityType.HighDefinition);
    setTotalContent(0);
    setSubDirectory('');
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} description="Be descriptive about site information" title="Enter site credentials">
      <form onSubmit={(e) => handleInitiate(e)}>
        <div className="flex flex-col gap-6 space-y-2">
          <div className="grid gap-2">
            <Switch id="check-branch" checked={hasBranch} onCheckedChange={setHasBranch} />
            <Label htmlFor="check-branch">Has Branch</Label>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="url">Site Url</Label>
            <Input id="site-url" type="url" placeholder="m@example.com" required value={url} onChange={(e) => setUrl(e.target.value)} />
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
                <option value={DocumentQualityType.HighDefinition}>High Definition</option>
                <option value={DocumentQualityType.DefaultDefinition}>Standard Definition</option>
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
        <Button type="submit" className="w-full mt-5" disabled={!url}>
          {loading && <Loader2 className="animate-spin" />}
          Initiate
        </Button>
      </form>
    </Modal>
  );
};
