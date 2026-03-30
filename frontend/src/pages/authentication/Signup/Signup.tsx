import { useForm } from "react-hook-form";
import AuthLayout from "../Layouts/AuthLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "src/schemas/authSchema";
import Input from "src/components/Input/Input";
import Button from "../Components/AuthButton/Button.styles";
import { useCreateUser } from "src/hooks/ApiHooks";
import { Link } from "react-router-dom";
const Signup = () => {
  const { mutate: mutateCreateUser } = useCreateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });
  const onSubmit = (data: any) => {
    mutateCreateUser(data);
  };
  return (
    <AuthLayout title="Sign Up">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Firstname"
          placeholder="John"
          type="text"
          {...register("firstname")}
          error={errors.firstname?.message as string}
        />
        <Input
          label="Lastname"
          placeholder="Doe"
          type="text"
          {...register("lastname")}
          error={errors.lastname?.message as string}
        />
        <Input
          label="Age"
          type="number"
          placeholder="Age"
          min={5}
          {...register("age")}
          error={errors.age?.message as string}
        />
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
        <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message as string}
        />
        <Button type="submit">Sign Up</Button>
      </form>
      <hr />
      <p className="no-account">
        Do you have account? <Link to="/login">Log in</Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
