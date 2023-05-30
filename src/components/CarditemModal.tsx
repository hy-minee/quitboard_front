import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
  ModalFooter,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

function ImageViewModal({ isOpen, onClose, image }: ModalProps) {
  return (
    <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Original Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={image} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ImageViewModal;
