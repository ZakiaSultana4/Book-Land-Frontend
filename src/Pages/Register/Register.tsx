import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../components/CustomForm/CustomForm";
import CustomInput from "../../components/CustomForm/CustomInput";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../Redux/Features/Auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const [register] = useRegisterMutation();
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const toastId = toast.loading("Creating User");
    try {
      const result = await register(data);
      console.log(result);
      if (result?.data?.success) {
        toast.success("User created successfully", {
          id: toastId,
          duration: 2000,
        });
        window.location.href = "/login";
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-[calc(100vh-30vh)] flex justify-center items-center bg-white">
      <div className="w-full max-w-[741px] bg-[#f7f7f7] p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Register
        </h2>
        <CustomForm onSubmit={handleSubmit} className="space-y-6">
          <CustomInput
            name="name"
            type="text"
            placeholderTitle="your Name"
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <CustomInput
            name="email"
            type="email"
            placeholderTitle="your Email"
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <CustomInput
            name="password"
            type="password"
            placeholderTitle="your Password"
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <div className="flex justify-center">
            <Button
              htmlType="submit"
              className="custom-btn w-28 h-10 "
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Register
            </Button>
          </div>
          <hr />
          <div className=" text-center">
            Already have an account{" "}
            <Link className="text-[#e12503] font-semibold" to="/login">
              Login
            </Link>{" "}
            here
          </div>
        </CustomForm>
      </div>
    </div>
  );
};

export default Register;
