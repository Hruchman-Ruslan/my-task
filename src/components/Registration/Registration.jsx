import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";

const schema = yup.object().shape({
  name: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Title title={"Registration"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
        <input {...register("password")} />
        <p>{errors.password?.message}</p>
        <Button type="submit" buttonText="Sign Up" />
      </form>
      <Link linkText="Sign In" />
    </div>
  );
};
