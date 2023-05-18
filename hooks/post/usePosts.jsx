import axios from "axios";
import { useState, useEffect } from "react";
import { parseCookies } from "nookies";

const usePosts = (userId) => {
  const [posts, setPosts] = useState(null);
  // const [error, setError] = useState(null);
  const fetchData = async () => {
    const cookies = parseCookies();
    const { accessToken } = cookies;
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/search?${
          userId ? `user_id=${userId}` : ""
        }`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      setPosts(response.data.data.posts);
    } catch (err) {
      // setError(err.response.data.message || "取得用戶資料失敗");
      console.log(err || "取得用戶資料失敗");
    }
  };
  useEffect(() => {
    fetchData();
  }, [userId]);

  return { posts };
};

export default usePosts;
