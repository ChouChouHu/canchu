// hooks/useSignUp.js
import { useState } from "react";
import axios from "axios";
// import useLogIn from "./useLogIn";

const useSignUp = () => {
  const [error, setError] = useState(null);
  // const { logIn } = useLogIn();

  const signUp = async (name, email, password) => {
    // console.log('sign')
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/signup`,
        {
          name,
          email,
          password
        }
      );

      //   console.log("註冊成功", response.data);
      if (response.status === 200) {
        // logIn(email, password); // cancel this feature
        await alert("註冊成功");
        window.location.href = "/login";
      }

      // 清除錯誤訊息
      setError(null);
    } catch (err) {
      setError(err.response.data.message || "註冊失敗");
    }
  };

  return { signUp, error };
};

export default useSignUp;
