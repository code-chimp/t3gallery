import { getImage } from '~/server/queries';

export default async function PhotoModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  const image = await getImage(+imageId);

  return (
    <div>
      <img src={image.url} alt={image.name} className="w-96" />
    </div>
  );
}
