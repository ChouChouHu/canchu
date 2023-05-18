import { css } from "@emotion/css";
import Feed from "./Feed";
import usePosts from "../hooks/post/usePosts";
import useMyProfile from "../hooks/user/useMyProfile";

const PostsCss = css`
  /*  */
`;

function Posts({ userId }) {
  const { posts } = usePosts(userId);
  const { user } = useMyProfile();
  return (
    <div className={PostsCss}>
      {posts?.map((post) => (
        <Feed
          key={post.id}
          id={post.id}
          picture={post.picture}
          name={post.name}
          createdAt={post.created_at}
          context={post.context}
          isLiked={post.is_liked}
          likeCount={post.like_count}
          commentCount={post.comment_count}
          user={user}
        />
      ))}
      {/* {posts && posts.length === 0 && "沒有貼文，你知道為什麼嗎？可能是因為你沒有朋友"} */}
    </div>
  );
}

export default Posts;
