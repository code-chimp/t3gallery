import { SignedIn, SignedOut } from '@clerk/nextjs';
import { getImages } from '~/server/queries';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Image
            src={image.url}
            alt={image.name}
            style={{ objectFit: 'contain' }}
            height={480}
            width={480}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in to view the gallery.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
