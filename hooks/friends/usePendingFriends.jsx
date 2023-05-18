import axios from "axios";
import { useState, useEffect } from "react";
import { parseCookies } from "nookies";

const usePendingFriends = () => {
  const [friends, setFriends] = useState(null);
  // const [error, setError] = useState(null);
  const fetchData = async () => {
    const cookies = parseCookies();
    const { accessToken } = cookies;
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/friends/pending`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      setFriends(response.data.data.users);
    } catch (err) {
      // setError(err.response.data.message || "取得用戶資料失敗");
      console.log(err.message || "取得用戶資料失敗");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { pendingFriends: friends };
};

export default usePendingFriends;
