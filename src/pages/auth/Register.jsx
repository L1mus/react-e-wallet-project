import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Input } from "../../components/form/Input";
import { PhoneInput } from "../../components/form/PhoneInput";
import { Button } from "../../components/ui/Button";
import { SocialButton } from "../../components/ui/SocialButton";
import { isEmailExists, getSession } from "../../utils/storage";

export const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (getSession()) navigate("/");
  }, [navigate]);

  const onSubmit = (data) => {
    setErrorMessage("");
    if (isEmailExists(data.email)) {
      setErrorMessage(
        "This email is already registered. Please use a different email address.",
      );
      return;
    }
    navigate("/create-pin", { state: { userData: data } });
  };

  return (
    <AuthLayout
      title="Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
      subtitle="Transfering money is easier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
      imagePath="/assets/images/wallet.png"
    >
      <div className="flex flex-col gap-3 mb-4">
        <SocialButton
          icon="/assets/icons/flat-color-icons_google.svg"
          text="Sign In With Google"
        />
        <SocialButton
          icon="/assets/icons/bx_bxl-facebook-circle.svg"
          text="Sign In With Facebook"
        />
      </div>

      <div className="flex items-center mb-4">
        <div className="flex-1 h-px bg-[#E8E8E8]" />
        <span className="px-4 text-[#A9A9A9] text-sm font-normal">Or</span>
        <div className="flex-1 h-px bg-[#E8E8E8]" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
        noValidate
      >
        <Input
          label="Full Name"
          placeholder="Enter Your Name"
          icon="/assets/icons/2 User.svg"
          {...register("name", { required: "Full name is required." })}
          error={errors.name?.message}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          icon="/assets/icons/mail.svg"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email format",
            },
          })}
          error={errors.email?.message || errorMessage}
        />

        <PhoneInput
          label="Phone Number"
          placeholder="821xxxxxxxx"
          {...register("phone", {
            required: "Mobile phone number is required",
            minLength: { value: 10, message: "At least 10 digits" },
          })}
          error={errors.phone?.message}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Create Strong Password"
          icon="/assets/icons/Password.svg"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "At least 8 characters" },
          })}
          error={errors.password?.message}
        />

        <Button type="submit" variant="primary" isFullWidth className="mt-1">
          Register
        </Button>
      </form>

      <div className="mt-4 text-center text-base">
        <span className="text-grey font-normal">Have An Account? </span>
        <Link to="/login" className="text-primary font-medium hover:underline">
          Login
        </Link>
      </div>
    </AuthLayout>
  );
};
