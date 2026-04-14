import { getData } from "../utils/storage";

const apiLogin = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = getData();
      const foundUser = data.user?.find((u) => {
        return u.email === user.email && u.password === user.password;
      });
      if (foundUser) {
        resolve(foundUser);
      } else {
        reject("Email or Password is Wrong!!!");
      }
    }, 1500);
  });
};

export default apiLogin;
