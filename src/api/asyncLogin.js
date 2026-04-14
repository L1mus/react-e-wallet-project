import { getData } from "../utils/storage";

const apiLogin = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = getData();
      const fountUser = data.user?.find((u) => {
        u.email === user.email && u.password === user.password;
      });
      if (fountUser) {
        resolve(fountUser);
      } else {
        reject("Email or Password is Wrong!!!");
      }
    }, 1500);
  });
};

export default apiLogin;
