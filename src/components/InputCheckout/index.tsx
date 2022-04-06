import React from "react";
import { LabelInput, Input,Div } from "./styles";
interface Props {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputCheckout: React.FC<Props> = ({ label, name, type, value,placeholder }) => {
  return (
    <div>
      <Div>
        <LabelInput>{label}</LabelInput>
        <Input value={value} placeholder={placeholder}  />
      </Div>
    </div>
  );
};
export default InputCheckout;
