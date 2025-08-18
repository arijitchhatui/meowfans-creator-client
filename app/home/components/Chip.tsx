import { Funnel } from 'lucide-react';

export const HomeChip = () => {
  const menuItems = { icon: Funnel, itemNames: ['Travel', 'Portraits', 'Product', 'NSFW', 'Fashion'] };
  return (
    <div className="mt-6 flex-wrap">
      <div className="md:flex hidden gap-3">
        {['Travel', 'Portraits', 'Product', 'NSFW', 'Fashion'].map((cat) => (
          <div key={cat} className="px-4 py-2 rounded-full bg-indigo-50 font-medium shadow cursor-pointer hover:bg-indigo-200">
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};
