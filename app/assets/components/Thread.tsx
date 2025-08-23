import { Div, H1, Image } from '@/wrappers/HTMLWrappers';

export enum FileType {
  VIDEO = 'video',
  IMAGE = 'image',
  AUDIO = 'audio',
  DOCUMENT = 'document'
}

export enum MediaType {
  PROFILE_MEDIA = 'profileMedia',
  MESSAGE_MEDIA = 'messageMedia',
  POST_MEDIA = 'postMedia'
}

export enum ImageType {
  BLURRED = 'blurred',
  ORIGINAL = 'original',
  RESIZED = 'resized'
}

export const AssetsThread = () => {
  const assets = Array(40)
    .fill(0)
    .map((_, idx) => ({
      id: idx,
      rawUrl: idx % 2 === 0 ? './assets/1.jpg' : './assets/2.jpg',
      blurredUrl: './assets/2.jpg',
      creatorId: '649031233783937373',
      mimeType: '/image',
      mediaType: MediaType,
      fileType: FileType,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  const dates = ['Today', 'Yesterday', '23-05-25', '22-03-25'];

  return (
    <Div className="flex flex-col w-full px-3">
      {dates.map((date, idx) => (
        <Div key={idx}>
          <H1 className="flex py-5 font-bold text-4xl text-gray-800 dark:text-white">{date}</H1>
          <Div className="flex flex-row gap-5 overflow-scroll w-full">
            {assets.map((asset, i) => (
              <Image key={i} src={asset.rawUrl} alt="img" width={200} height={300} className="rounded-2xl" />
            ))}
          </Div>
        </Div>
      ))}
    </Div>
  );
};
