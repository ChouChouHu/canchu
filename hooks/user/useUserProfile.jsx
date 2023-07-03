import axios from "axios";
import { useState, useEffect } from "react";
import { parseCookies } from "nookies";

const useUserProfile = (userId) => {
  const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cookies = parseCookies();
      const { accessToken } = cookies;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}/profile`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        setUser(response.data.data.user);
      } catch (err) {
        console.log(err.response.data || "取得用戶資料失敗")
      }
    };

    if(userId) fetchData();
  }, [userId]);

  return { user };
};

export default useUserProfile;
