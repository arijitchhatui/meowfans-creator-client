import { TriggerModal } from '@/components/modals/TriggerModal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { authCookieKey } from '@/lib/constants';
import { configService } from '@/util/config';
import { buildSafeUrl } from '@/util/helpers';
import { deleteCookie } from 'cookies-next';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  setTerminateAccountModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const TerminateAccount: React.FC<Props> = ({ setTerminateAccountModal }) => {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie(authCookieKey, { domain: configService.NEXT_PUBLIC_APP_DOMAINS });
    router.push(buildSafeUrl({ host: configService.NEXT_PUBLIC_APP_URL }));
  };
  return (
    <Card className="flex">
      <CardHeader>
        <CardTitle className="text-red-500">Delete your account</CardTitle>
        <CardDescription>Be aware of this as this is irreversible!</CardDescription>
      </CardHeader>
      <CardContent className="">
        <TriggerModal
          onChangeModalState={() => setTerminateAccountModal(true)}
          className="bg-red-600"
          modalIcon={{ icon: Trash }}
          modalText="Terminate your account"
        />
      </CardContent>
    </Card>
  );
};

export default TerminateAccount;
