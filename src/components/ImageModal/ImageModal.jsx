import ReactModal from "react-modal";

export default function ImageModal({ isOpen, image, onClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "none",
        },
      }}
    >
      <img src={image.urls.regular} />
    </ReactModal>
  );
}
