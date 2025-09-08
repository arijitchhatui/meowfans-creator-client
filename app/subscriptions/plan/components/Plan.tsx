import { AppHeader } from '@/components/AppHeader';
import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { BannerCropperModal } from '@/components/modals/BannerCropperModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Div } from '@/wrappers/HTMLWrappers';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { useState } from 'react';
import { CreatePlan } from './CreatePlan';
import { PlanPreview } from './PlanPreview';

export default function Plan() {
  const [planName, setPlanName] = useState('Pro');
  const [featureInput, setFeatureInput] = useState('');
  const [monthlyPrice, setMonthlyPrice] = useState(24);
  const [yearlyPrice, setYearlyPrice] = useState(216);
  const [description, setDescription] = useState('Perfect for professionals');
  const [features, setFeatures] = useState<string[]>([]);
  const [featured, setFeatured] = useState(false);
  const [banner, setBanner] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('create_plan');

  const addFeature = () => {
    if (featureInput.trim() !== '') {
      setFeatures([...features, featureInput.trim()]);
      setFeatureInput('');
    }
  };

  return (
    <PageWrapper>
      <AppHeader applyDarkMode applyBackground />
      <ApplyShadCnBackground>
        <Div className="flex md:flex-row flex-col justify-between w-full gap-2 p-1">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v)} className="w-full">
            <TabsList>
              <TabsTrigger value="create_plan">Information</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>

            <TabsContent value="create_plan" className="space-y-1">
              <CreatePlan
                description={description}
                featureInput={featureInput}
                featured={featured}
                features={features}
                monthlyPrice={monthlyPrice}
                setDescription={setDescription}
                setFeatureInput={setFeatureInput}
                setFeatured={setFeatured}
                setMonthlyPrice={setMonthlyPrice}
                setYearlyPrice={setYearlyPrice}
                yearlyPrice={yearlyPrice}
                setPlanName={setPlanName}
                setBanner={setBanner}
                addFeature={addFeature}
                setFeatures={setFeatures}
              />
            </TabsContent>

              <TabsContent value="preview" className="space-y-1">
                <BannerCropperModal image={banner} setImage={setBanner} isEditing={isEditing} setIsEditing={setIsEditing} />
              </TabsContent>
          </Tabs>

          <PlanPreview
            banner={banner}
            featured={featured}
            planName={planName}
            description={description}
            features={features}
            monthlyPrice={monthlyPrice}
            yearlyPrice={yearlyPrice}
            setActiveTab={setActiveTab}
          />
        </Div>
      </ApplyShadCnBackground>
    </PageWrapper>
  );
}
