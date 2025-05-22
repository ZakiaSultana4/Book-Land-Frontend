import { Button } from "antd";
import CustomForm from "../../components/CustomForm/CustomForm";
import CustomInput from "../../components/CustomForm/CustomInput";
import { useUpdatePaswordMutation } from "../../Redux/Features/Auth/authApi";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";

const UpdatePasswordForm = () => {
  const [updatePassword] = useUpdatePaswordMutation(undefined);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating Password...");
    // console.log("Form Data:", data);
    try {
      const response = await updatePassword(data);
      // console.log(response?.error?.data?.message);
      if (response?.data?.success) {
        toast.success("Password Updated successfully", { id: toastId });
      } else {
        toast.error("Something went wrong", { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-40vh)] ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Password</h2>
        <CustomForm onSubmit={onSubmit}>
          <div className="mb-4">
            <CustomInput name="email" label="Email" type="email" />
          </div>
          <div className="mb-4">
            <CustomInput
              name="oldPassword"
              label="Old Password"
              type="password"
            />
          </div>
          <div className="mb-4">
            <CustomInput
              name="newPassword"
              label="New Password"
              type="password"
            />
          </div>
          <Button className="custom-btn" htmlType="submit" block>
            Update Password
          </Button>
        </CustomForm>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
