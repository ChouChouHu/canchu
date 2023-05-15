import { css } from "@emotion/css";
import Feed from "../../components/Feed";
import { post } from "../../mockData";
import Layout from "../../components/Layout";

const TemplateCss = css`
position: relative;
  padding-top: 160px;
  width: 60%;
  left: 20%;
`;

function Template() {
  return (
    <Layout>
      <div className={TemplateCss}>
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
        />
      </div>
    </Layout>
  );
}

export default Template;
