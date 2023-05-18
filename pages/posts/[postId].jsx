import { css } from "@emotion/css";
import { useRouter } from "next/router";
import Feed from "../../components/Feed";
import Layout from "../../components/Layout";
import usePost from "../../hooks/post/usePost";
import useMyProfile from "../../hooks/user/useMyProfile";

const PostPageCss = css`
  position: relative;
  padding-top: 160px;
  width: 60%;
  left: 20%;
`;

function PostPage() {
  const router = useRouter();
  const { postId } = router.query;
  const { post } = usePost(postId);
  const { user } = useMyProfile();
  return (
    <Layout>
      <div className={PostPageCss}>
        {post ? (
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
            comments={post.comments}
            user={user}
          />
        ) : (
          "無此貼文"
        )}
      </div>
    </Layout>
  );
}

export default PostPage;
