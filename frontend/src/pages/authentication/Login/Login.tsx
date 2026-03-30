import { loginSchema } from "src/schemas/authSchema";
import AuthLayout from "../Layouts/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "src/components/Input/Input";
import Button from "../Components/AuthButton/Button.styles";
import { useAuthUser } from "src/hooks/ApiHooks";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
const Login = () => {
  const { mutate: userAuthMutate, isPending } = useAuthUser();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: any) => {
    userAuthMutate(data, {
      onSuccess: (data) => {
        localStorage.setItem("jwt_token", data.token);
        queryClient.setQueryData(["auth"], {
          data: data.data,
        });
      },
      onError: (error: any) => {
        const message = error.response?.data?.message || "Login failed";
        setError("password", { type: "manual", message });
        setError("email", { type: "manual", message });
      },
    });
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
          <Button type="submit" disabled={isPending}>
            Sign In
          </Button>
        </form>
        <hr />
        <p className="no-account">
          No account? <Link to="/signup">Sign Up</Link>
        </p>
      </AuthLayout>
    </div>
  );
};

export default Login;
