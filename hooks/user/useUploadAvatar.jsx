import { useState } from "react";
import axios from "axios";
import { parseCookies } from "nookies";

const useUploadAvatar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const cookies = parseCookies();
  const { accessToken } = cookies;

  const uploadAvatar = async (file) => {
    setIsLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("picture", file);

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/picture`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      setIsLoading(false);
      await alert('圖片上傳成功');
      window.location.reload();
    //   return response.data;
    } catch (err) {
      setIsLoading(false);
      alert(err.message);
      setError(err.message || "圖片上傳失敗");
    }
  };

  return { uploadAvatar, isLoading, error };
};

export default useUploadAvatar;
