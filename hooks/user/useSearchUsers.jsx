import axios from "axios";
import { useState, useEffect } from "react";
import { parseCookies } from "nookies";

const useSearchUsers = (keyword) => {
  const [users, setUsers] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cookies = parseCookies();
      const { accessToken } = cookies;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/search?${
            keyword ? `keyword=${keyword}` : ""
          }`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        setUsers(response.data.data.users);
      } catch (err) {
        // setError(err.response.data.message || "取得用戶資料失敗");
        console.log(err || "取得用戶資料失敗");
      }
    };

    fetchData();
  }, [keyword]);

  return users;
};

export default useSearchUsers;
