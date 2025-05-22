import { Controller } from "react-hook-form";
import { Form, Select } from "antd";
export type TUniSelectProps = {
  label: string;
  name: string;
  options?: { value: string; label: string; disabled?: boolean }[];
  mode?: "multiple" | undefined;
  disabled?: boolean;
};
const CustomSelect = ({
  name,
  label,
  options,
  mode,
  disabled,
}: TUniSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item name={name} label={label} rules={[{ required: true }]}>
          <Select
            mode={mode}
            // style={{ width: "100%" }}
            placeholder="Select a option and change input text above"
            allowClear
            {...field}
            options={options}
            disabled={disabled}
          />
        </Form.Item>
      )}
    />
  );
};

export default CustomSelect;
