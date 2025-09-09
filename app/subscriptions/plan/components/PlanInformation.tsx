import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Div } from '@/wrappers/HTMLWrappers';

interface Props {
  features: string[];
  featured: boolean;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  featureInput: string;
  addFeature: () => void;
  setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  setBanner: React.Dispatch<React.SetStateAction<string | null>>;
  setPlanName: React.Dispatch<React.SetStateAction<string>>;
  setFeatureInput: React.Dispatch<React.SetStateAction<string>>;
  setYearlyPrice: React.Dispatch<React.SetStateAction<number>>;
  setMonthlyPrice: React.Dispatch<React.SetStateAction<number>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  setFeatured: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlanInformation: React.FC<Props> = ({
  features,
  description,
  featureInput,
  featured,
  monthlyPrice,
  setDescription,
  setFeatureInput,
  setFeatured,
  setMonthlyPrice,
  setYearlyPrice,
  setPlanName,
  yearlyPrice,
  setBanner,
  addFeature,
  setFeatures
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="w-full mb-5">
        <CardTitle>Create subscription plan</CardTitle>
        <CardDescription>Have a look how your subscription plan looks</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-1">
        <Div className="grid gap-2 mb-1">
          <Label htmlFor="label-demo-fullname">Plan name</Label>
          <Input id="label-demo-plan-name" placeholder="Meow User" type="text" onChange={(e) => setPlanName(e.target.value)} />
        </Div>
        <Div className="grid gap-2 my-1">
          <Label htmlFor="label-demo-description">Description</Label>
          <Textarea
            id="label-demo-description"
            placeholder="meow@gmail.com"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Div>
        <Div className="flex flex-wrap justify-between gap-1">
          <Div className="grid gap-3 my-1">
            <Label htmlFor="monthlyPrice">Monthly Price ($)</Label>
            <Input
              type="text"
              id="monthlyPrice"
              value={monthlyPrice}
              onChange={(e) => setMonthlyPrice(Number(e.target.value.replace(/[^0-9]/g, '')))}
            />
          </Div>
          <Div className="grid gap-3 my-1">
            <Label htmlFor="yearlyPrice">Yearly Price ($)</Label>
            <Input
              type="text"
              id="yearlyPrice"
              value={yearlyPrice}
              onChange={(e) => setYearlyPrice(Number(e.target.value.replace(/[^0-9]/g, '')))}
            />
          </Div>
          <Div className="flex items-center space-x-2 my-3">
            <Switch id="feature-button" checked={featured} onCheckedChange={setFeatured} />
            <Label htmlFor="airplane-mode">Mark as featured</Label>
          </Div>
        </Div>
      </CardContent>
      <CardFooter>
        <Div className="space-y-2 w-full">
          <Div className="grid gap-3 my-1">
            <Label htmlFor="banner">Add banner</Label>
            <Input
              type="file"
              id="banner"
              onChange={(e) => {
                if (!e.target.files?.length) return;
                setBanner(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </Div>
          <Div className="my-1 grid gap-3">
            <Label htmlFor="features">Features</Label>
            <Div className="flex gap-2">
              <Input value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} placeholder="Add a feature" />
              <Button type="button" onClick={addFeature}>
                Add
              </Button>
            </Div>
          </Div>
          <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
            {features.map((f, i) => (
              <li key={i} className="cursor-pointer" onClick={() => setFeatures((prev) => prev.filter((feature) => f !== feature))}>
                {f}
              </li>
            ))}
          </ul>
          <Button className="w-full mt-4">Save Subscription Plan</Button>
        </Div>
      </CardFooter>
    </Card>
  );
};
