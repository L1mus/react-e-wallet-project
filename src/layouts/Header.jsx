import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { Button } from "../components/ui/Button";
import iconMoneyWallet from "../assets/icons/Money-Wallet.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../redux/slice/loginSlice";

/**
 * user
 *  @typedef {Object} user
 *  @param {String} user.name
 */

/**
 * Header Component
 * @param {String} props.variant
 * @returns
 */

export const Header = ({ variant = "landing" }) => {
  const stateLogin = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const actionLogin = loginActions;
  const data = stateLogin.userLogin;
  const profileName = data?.email.split("@")[0] || "Ghaluh Wizard";
  const profilePic =
    data?.profilePicture ||
    `https://ui-avatars.com/api/?name=LI&background=random`;

  if (variant === "dashboard") {
    return (
      <header className="w-full h-19 bg-white border-b border-gray-300  flex items-center justify-between px-6 lg:px-5.5 shadow-sm z-50 relative">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={iconMoneyWallet}
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-primary font-medium text-xl tracking-wide">
            E-Wallet
          </h1>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="hidden md:block text-right">
              <p className="text-base font-normal text-black group-hover:text-primary transition-colors">
                {profileName}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={profilePic}
                alt="Profile"
                className="w-11 h-11 rounded-full object-cover border border-gray-200"
              />
              <ChevronDown className="w-5 h-5 text-black group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className="w-full h-19 bg-primary flex items-center justify-between px-6 lg:px-5.5 z-50 relative">
      <Link to="/" className="flex items-center gap-2">
        <img
          src={iconMoneyWallet}
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
        <h1 className="text-white font-medium text-xl tracking-wide">
          E-Wallet
        </h1>
      </Link>
      {stateLogin.isLogin ? (
        <div className="flex items-center gap-6 md:gap-8">
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="hidden md:block text-right">
              <p className="text-base font-normal text-black group-hover:text-primary transition-colors">
                {profileName}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="cursor-pointer"
                onClick={() => {
                  dispatch(actionLogin.logoutUser());
                }}
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-11 h-11 rounded-full object-cover border border-gray-200"
                />
              </button>
              <ChevronDown className="w-5 h-5 text-black group-hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button
              variant="outline-white"
              size="md"
              className="hidden sm:flex rounded-[5px]"
            >
              SignIn
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="white" size="md" className="rounded-[5px]">
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};
