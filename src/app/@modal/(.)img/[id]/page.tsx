import { getImage } from '~/server/queries';
import { Modal } from '~/app/@modal/(.)img/[id]/modal';
import FullPageImageView from '~/components/full-image-page';

export default function PhotoModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView id={+imageId} />
    </Modal>
  );
}
