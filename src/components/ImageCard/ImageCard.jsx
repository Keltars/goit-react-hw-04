export default function ImageCard({ photo, onOpen }) {
  return (
    <div>
      <img
        src={photo.urls.small}
        alt={photo.description}
        onClick={() => onOpen(photo)}
      />
    </div>
  );
}
