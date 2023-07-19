import useCoolFetch from "../useCoolFetch";

const useUserProfile = (userId) => {
  const {data} = useCoolFetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}/profile`);
  return { user: data?.user };
};

export default useUserProfile;
