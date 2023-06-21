import { Card, CardBody, Heading, Text, Stack, Image } from "@chakra-ui/react";
import { useState } from "react";
import ImageViewModal from "./CarditemModal";

type Data = {
  img: string;
  region: string;
  violation_list: string[];
  date: string;
};

interface CarditemProps {
  data: Data;
}

function CardItem({ data }: CarditemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card maxW="3xs">
      <CardBody>
        <Image
          objectFit="cover"
          src={data.img.slice(0, -4) + ".jpg"}
          alt="Image of the violation"
          borderRadius="lg"
          onClick={handleImageClick}
        />
        <Stack mt="6" spacing="3">
          <Heading size="sm"></Heading>
          <Text className="cardregion">{data.region}</Text>
          {data.violation_list.map((violation, index) => (
            <Text key={index} className="cardviolation">
              {violation}
            </Text>
          ))}
          <Text className="carddate">{data.date}</Text>
        </Stack>
      </CardBody>
      <ImageViewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={data.img}
      />
    </Card>
  );
}

export default CardItem;
