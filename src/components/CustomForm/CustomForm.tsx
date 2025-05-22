
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";


export interface TFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
  children: React.ReactNode;
  defaultValues?: Record<string, unknown>;
}
const CustomForm = ({ children, onSubmit, className }: TFormProps) => {
  const methods = useForm();
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default CustomForm;
