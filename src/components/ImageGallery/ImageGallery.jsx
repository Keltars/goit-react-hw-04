import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ listPhoto, onOpen }) {
  return (
    <ul>
      {listPhoto.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} onOpen={onOpen} />
        </li>
      ))}
    </ul>
  );
}
