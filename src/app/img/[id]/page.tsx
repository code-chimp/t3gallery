import { getImage } from '~/server/queries';
import FullPageImageView from '~/components/full-image-page';

export default function PhotoPage({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return <FullPageImageView id={+imageId} />;
}
