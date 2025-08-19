/* eslint-disable @next/next/no-img-element */

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
    <div className="flex flex-col w-full px-3">
      {dates.map((date, idx) => (
        <div key={idx}>
          <h1 className="flex py-5 font-bold text-4xl text-gray-800">{date}</h1>
          <div className="flex flex-row gap-5 overflow-scroll w-full">
            {assets.map((asset, i) => (
              <img key={i} src={asset.rawUrl} alt="img" width={200} height={300} className="rounded-2xl" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
