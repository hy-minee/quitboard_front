import {
  Box,
  Text,
  Image,
  chakra,
  useRadio,
  useRadioGroup,
  useToast,
  HStack,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

interface CustomRadioProps {
  value: string;
  image: string;
  isChecked?: boolean;
  setChecked?: (isChecked: boolean) => void;
  onChange?: (value: string) => void;
}

function CustomRadio(props: CustomRadioProps) {
  const { value, image, isChecked, setChecked, onChange } = props;

  const { getInputProps, getRadioProps, getLabelProps, htmlProps } = useRadio({
    value,
    isChecked,
    onChange: () => {
      setChecked?.(!isChecked);
      onChange?.(value);
    },
  });

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps()} />
      <Box
        {...getRadioProps()}
        bg={isChecked ? "#FFFFFF" : "transparent"}
        w={"250"}
        p={3}
      >
        <Image src={image} {...getLabelProps()} />
      </Box>
    </chakra.label>
  );
}

function CustomRadioGroup(props: { onChange: (value: string) => void }) {
  const { onChange } = props;

  const violations = [
    {
      value: "헬멧 미착용",
      image: require("../assets/images/withouthelmet.jpg"),
    },
    {
      value: "2인 이상 탑승",
      image: require("../assets/images/twopeople.jpg"),
    },
    {
      value: "인도 주행",
      image: require("../assets/images/sidewalk.jpg"),
    },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <Flex justify="center" align="center">
      <Stack>
        <HStack justify="center" align="center">
          {violations.map((violation) => {
            return (
              <Box key={violation.value} w={"25%"} padding={"5"}>
                <CustomRadio
                  value={violation.value}
                  image={violation.image}
                  isChecked={selectedValue === violation.value}
                  setChecked={(isChecked) =>
                    setSelectedValue(isChecked ? violation.value : "")
                  }
                  onChange={handleChange}
                />
                <Text fontWeight={"bold"}>{violation.value}</Text>
              </Box>
            );
          })}
        </HStack>
      </Stack>
    </Flex>
  );
}

export default CustomRadioGroup;
