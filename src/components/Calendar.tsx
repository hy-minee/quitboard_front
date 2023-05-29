import React, { HTMLAttributes, forwardRef } from "react";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import {
  InputGroup,
  Input,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

const customDateInput = ({ value, onClick, onChange }: any, ref: any) => (
  <Input
    autoComplete="off"
    background="white"
    value={value}
    ref={ref}
    onClick={onClick}
    onChange={onChange}
  />
);
customDateInput.displayName = "DateInput";

const CustomInput = forwardRef(customDateInput);

const icon = <CalendarIcon fontSize="sm" />;

interface Props {
  isClearable?: boolean;
  onChange: (date: Date) => void;
  selectedDate: Date;
  showPopperArrow?: boolean;
}

const ReactDatePickerComponent = ({
  selectedDate,
  onChange,
  isClearable = false,
  showPopperArrow = false,
  ...props
}: Props & HTMLAttributes<HTMLElement>) => {
  const isLight = useColorMode().colorMode === "light";
  return (
    <>
      <InputGroup>
        <ReactDatePicker
          selected={selectedDate}
          onChange={onChange}
          isClearable={isClearable}
          showPopperArrow={showPopperArrow}
          className="react-datapicker__input-text"
          dateFormat="MM/dd/yyyy"
          customInput={<CustomInput />}
        />
        <InputRightElement color="gray.500" children={icon} />
      </InputGroup>
    </>
  );
};

const DatePicker2 = ({ selectedDate, onChange, ...props }: Props) => {
  return (
    <>
      <InputGroup className="light-theme">
        <ReactDatePicker
          selected={selectedDate}
          onChange={onChange}
          className="react-datapicker__input-text"
          customInput={<CustomInput />}
          dateFormat="yyyy년 MM월 dd일"
          {...props}
        />
        <InputRightElement color="gray.500" children={icon} />
      </InputGroup>
    </>
  );
};

// set className to "light-theme-original"
{
  /* <div className={isLight ? "light-theme" : "dark-theme"}>
<ReactDatePicker
  selected={selectedDate}
  onChange={onChange}
  isClearable={isClearable}
  showPopperArrow={showPopperArrow}
  className="react-datapicker__input-text"
  dateFormat="MM/dd/yyyy"
  customInput={<CustomInput />}
/>
</div> */
}

export default DatePicker2;
