import { db } from '~/server/db';

export const dynamic = 'force-dynamic';

const mockImageUrls = [
  'https://utfs.io/f/f961a60e-f42d-4788-8ea1-bc06e1350958-7bko4f.png',
  'https://utfs.io/f/4ef05ba9-03f4-4de7-83ed-78cdca924c6f-oyw24k.png',
  'https://utfs.io/f/ff5d13c2-5890-4028-b1ae-5d6a5ca7acd0-rovm8v.png',
  'https://utfs.io/f/9ccdafa8-968d-47df-8757-8b50ec2be36b-wh4z0.png',
  'https://utfs.io/f/f5b4662a-527f-4d69-9cf8-10430f52f515-6d1biu.png',
  'https://utfs.io/f/80a72a07-aa7d-40c0-a9a4-c573f036ce1f-vh1wfn.png',
];

const mockImages = mockImageUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={`post:${post.id}`}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={`${index}:${image.id}`} className="w-48">
            <img
              src={image.url}
              alt={`gallery-${index}:${image.id}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
