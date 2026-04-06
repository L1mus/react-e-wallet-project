import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { AuthLayout } from "../../layouts/AuthLayout";
import { Input } from "../../components/form/Input";
import { Button } from "../../components/ui/Button";
import { SocialButton } from "../../components/ui/SocialButton";
import { getData, saveSession, getSession } from "../../utils/storage";

export const Login = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (getSession()) navigate("/");
  }, [navigate]);

  const onSubmit = (data) => {
    setAuthError("");
    const db = getData();
    const foundUser = db.users?.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (foundUser) {
      saveSession(foundUser);
      navigate("/");
    } else {
      setAuthError("Incorrect email or password!");
    }
  };

  return (
    <AuthLayout
      title="Hello Welcome Back 👋"
      subtitle="Fill out the form correctly or you can login with several option."
      imagePath="/assets/images/online-payment-security-concept-3d-phone-bill.png"
    >
      <div className="flex flex-col gap-4 mb-6">
        <SocialButton
          icon="/assets/icons/flat-color-icons_google.svg"
          text="Sign In With Google"
        />
        <SocialButton
          icon="/assets/icons/bx_bxl-facebook-circle.svg"
          text="Sign In With Facebook"
        />
      </div>

      <div className="flex items-center mb-6">
        <div className="flex-1 h-px bg-[#E8E8E8]" />
        <span className="px-4 text-[#A9A9A9] text-sm font-normal">Or</span>
        <div className="flex-1 h-px bg-[#E8E8E8]" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Input
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          icon="/assets/icons/mail.svg"
          {...register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />

        <div className="flex flex-col gap-2">
          <Input
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            icon="/assets/icons/Password.svg"
            {...register("password", { required: "Password is required" })}
            error={errors.password?.message}
          />
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-primary font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {authError && (
          <span className="text-sm font-medium text-danger text-center">
            {authError}
          </span>
        )}

        <Button type="submit" variant="primary" isFullWidth className="mt-2">
          Login
        </Button>
      </form>

      <div className="mt-8 text-center text-base">
        <span className="text-grey font-normal">Not Have An Account? </span>
        <Link
          to="/register"
          className="text-primary font-medium hover:underline"
        >
          Register
        </Link>
      </div>
    </AuthLayout>
  );
};
