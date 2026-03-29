import { loginSchema } from "src/schemas/authSchema";
import AuthLayout from "../Layouts/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "src/components/Input/Input";
import Button from "../Components/AuthButton/Button.styles";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "src/hooks/AuthHooks";
const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    login();
    navigate("/profile");
  };
  return (
    <div>
      <AuthLayout title="Login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            {...register("email")}
            error={errors.email?.message as string}
          />
          <Input
            label="Password"
            placeholder="Password..."
            type="password"
            {...register("password")}
            error={errors.password?.message as string}
          />
          <Button>Sign In</Button>
        </form>
      </AuthLayout>
    </div>
  );
};

export default Login;
