import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/form/Input";
import { Button } from "../../components/ui/Button";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSent(true);
    alert("A password reset link has been sent to " + email);
  };

  return (
    <div className="relative min-h-screen w-full bg-primary font-sans overflow-hidden flex items-center justify-center px-4 sm:px-8 py-10">
      <div
        className="absolute w-150 h-150 sm:w-200 sm:h-200 rounded-full z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7096FF 0%, #3868FD 87%)",
          opacity: 0.7,
        }}
      />

      <div className="relative z-10 w-full max-w-125 bg-white rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-8 py-12 sm:px-12 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <img
            src="/assets/icons/Money Wallet.svg"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-primary font-bold text-xl">E-Wallet</h1>
        </div>

        <h1 className="text-[30px] font-medium text-black mb-2 leading-snug">
          Fill Out Form Correctly 👋
        </h1>
        <p className="text-[16px] font-normal text-grey leading-relaxed mb-8">
          We will send new password to your email
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            icon="/assets/icons/mail.svg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" variant="primary" isFullWidth className="mt-2">
            {isSent ? "Resend Link" : "Submit"}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="text-base text-grey font-medium hover:text-primary transition-colors"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
