import { AppHeader } from '@/components/AppHeader';
import { ApplyShadCnBackground } from '@/components/ApplyShadcnBackground';
import { Div } from '@/wrappers/HTMLWrappers';
import { PageWrapper } from '@/wrappers/PageWrapper';
import { useState } from 'react';
import { CreateSubscription } from './CreateSubscription';
import { PlanPreview } from './PlanPreview';

export default function SubscriptionPlan1() {
  const [planName, setPlanName] = useState('Pro');
  const [featureInput, setFeatureInput] = useState('');
  const [monthlyPrice, setMonthlyPrice] = useState(24);
  const [yearlyPrice, setYearlyPrice] = useState(216);
  const [description, setDescription] = useState('Perfect for professionals');
  const [features, setFeatures] = useState<string[]>([]);
  const [featured, setFeatured] = useState(false);
  const [banner, setBanner] = useState<string | null>(null);

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
        <Div className="flex md:flex-row flex-col justify-between w-full gap-2">
          <CreateSubscription
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

          <PlanPreview
            banner={banner}
            featured={featured}
            planName={planName}
            description={description}
            features={features}
            monthlyPrice={monthlyPrice}
            yearlyPrice={yearlyPrice}
          />
        </Div>
      </ApplyShadCnBackground>
    </PageWrapper>
  );
}
