import { Button } from "antd";

interface CustomBtnProps {
  ButtonText: string;
  onClick?: () => void;
  className?: string;  // Add className here
}

const CustomBtn = ({ ButtonText, onClick, className }: CustomBtnProps) => {
  return (
    <Button className={className} type="text" onClick={onClick}>
      {ButtonText}
    </Button>
  );
};

export default CustomBtn;
