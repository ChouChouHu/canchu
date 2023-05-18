import axios from "axios";
import { parseCookies } from "nookies";

const useDeleteFriendRequest = () => {
  const cookies = parseCookies();
  const { accessToken } = cookies;
  const deleteFriendRequest = async (friendshipId) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/friends/${friendshipId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      await alert("已刪除好友邀請");
      window.location.reload();
      // return response;
    } catch (err) {
      alert(err.message || "好友邀請刪除失敗");
    }
  };

  return { deleteFriendRequest };
};

export default useDeleteFriendRequest;
