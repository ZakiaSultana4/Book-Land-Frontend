import { Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({
  name,
  label,
  type,
  placeholderTitle,
  className,
}: {
  name: string;
  label?: string;
  type: string;
  placeholderTitle?: string;
  className?: string;
}) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <>
          {label && <label htmlFor={name}>{label}</label>}
          <Input
            {...field}
            placeholder={`Enter ${label || placeholderTitle}`}
            type={type}
            className={className}
          />
        </>
      )}
    />
  );
};

export default CustomInput;
