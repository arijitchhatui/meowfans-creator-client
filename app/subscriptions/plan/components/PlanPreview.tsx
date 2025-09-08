import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Div, H2, Span, Typography } from '@/wrappers/HTMLWrappers';
import { Button } from '@radix-ui/themes';
import { Check, Crown, ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface Props {
  banner: string | null;
  planName: string;
  features: string[];
  featured: boolean;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const PlanPreview: React.FC<Props> = ({
  planName,
  features,
  description,
  featured,
  monthlyPrice,
  yearlyPrice,
  banner,
  setActiveTab
}) => {
  return (
    <Div className="w-full">
      <H2 className="text-xl font-semibold mb-4">Live Preview</H2>
      <Card className={`relative overflow-hidden ${featured ? 'ring-2 ring-indigo-400' : ''}`}>
        {featured && (
          <Div className="absolute top-1 right-1">
            <Div className="flex items-center gap-2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
              <Crown className="w-4 h-4" />
              <Span>Popular</Span>
            </Div>
          </Div>
        )}
        {banner ? (
          <Div>
            <Div className="-top-1 -right-1">
              <Button variant="outline" onClick={() => setActiveTab('preview')} className="">
                Edit
              </Button>
            </Div>
            <Image src={banner || '/asset/empty_image.jpg'} alt="banner" className="h-60 w-full object-cover" width={300} height={400} />
          </Div>
        ) : (
          <Card className="border-dashed h-60">
            <ImageIcon className="align-middle justify-center m-auto" />
          </Card>
        )}
        <CardHeader className="">
          <CardTitle className="text-lg">{planName || 'Plan Name'}</CardTitle>
          <Typography className="mt-1 text-sm text-muted-foreground">{description || 'Plan description goes here.'}</Typography>
          <Div className="text-2xl font-bold mt-2">${monthlyPrice}/mo</Div>
          <Div className="text-xs text-muted-foreground">or ${yearlyPrice}/yr</Div>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <ul className="space-y-2">
            {features.length > 0 ? (
              features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 mt-1" /> {f}
                </li>
              ))
            ) : (
              <li className="text-sm text-muted-foreground">No features added</li>
            )}
          </ul>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button className="w-full">Choose {planName || 'Plan'}</Button>
        </CardFooter>
      </Card>
    </Div>
  );
};
