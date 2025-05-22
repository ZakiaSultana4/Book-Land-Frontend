import CustomForm from "../../components/CustomForm/CustomForm";
import CustomInput from "../../components/CustomForm/CustomInput";
import { Button } from "antd";
import { useLoginMutation } from "../../Redux/Features/Auth/authApi";
import { useDispatch } from "react-redux";
import { getUser, setUser } from "../../Redux/Features/Auth/authSlice";
import { verifyToken } from "../../Utils/verifyToken";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../Redux/hook";
import { JwtPayload } from "jwt-decode";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();
  const [login] = useLoginMutation(undefined);
  const user = useAppSelector(getUser);
  console.log(user);
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const toastId = toast.loading("Loggin in...");
      const { data: userData } = await login(data);
      const user = verifyToken(userData?.data?.accessToken) as JwtPayload & {
        role: string;
      };
      // console.log(user);
      dispatch(setUser({ user, token: userData?.data?.accessToken }));
      if (user?.role) {
        toast.success("Successfully logged in", { id: toastId });
        navigate(from, { replace: true });
      }
      // console.log(res);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-[calc(100vh-30vh)] flex justify-center items-center bg-white">
      <div className="w-full max-w-[741px] bg-[#f7f7f7] p-8 rounded-lg shadow-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to Your Account
        </h2>
        <CustomForm onSubmit={handleSubmit} className="space-y-6">
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
              className="custom-btn w-20 h-10 "
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Login
            </Button>
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Forgot Your Password?</span>
            <Link className="text-[#e12503] font-semibold" to="/register">
              Create Account
            </Link>
          </div>
        </CustomForm>
      </div>
    </div>
  );
};

export default Login;
