import { Div } from '@/wrappers/HTMLWrappers';

export const HomeChip = () => {
  return (
    <Div className="mt-6 flex-wrap">
      <Div className="md:flex hidden gap-3">
        {['Travel', 'Portraits', 'Product', 'NSFW', 'Fashion'].map((cat) => (
          <Div key={cat} className="px-4 py-2 rounded-full bg-indigo-50 font-medium shadow cursor-pointer hover:bg-indigo-200">
            {cat}
          </Div>
        ))}
      </Div>
    </Div>
  );
};
