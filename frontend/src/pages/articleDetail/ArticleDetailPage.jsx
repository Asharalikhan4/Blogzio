import { Link } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButton from "../../components/SocialShareButton";

const breadCrumbsData = [
  { name: "Home", Link: "/" },
  { name: "Blog", Link: "/blog" },
  { name: "Article title", Link: "/blog/1" },
];

const postData = [
  {
    id: "1",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28t15:35:53.607+0000",
  },
  {
    id: "2",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28t15:35:53.607+0000",
  },
  {
    id: "3",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28t15:35:53.607+0000",
  },
  {
    id: "4",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28t15:35:53.607+0000",
  },
];

const tagsData = [
  "Medical",
  "LifeStyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start ">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            className="rounded-xl w-full"
            src={images.Post1Image}
            alt="laptop"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            Education
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              voluptas numquam repudiandae voluptatum, adipisci aliquam cum eos
              veniam minima, laboriosam eius expedita ad debitis suscipit
              nesciunt labore aut cupiditate saepe corporis, quidem illum alias
              nam molestias quae. Quae, debitis. Minus!
            </p>
          </div>
          <CommentsContainer className="mt-10" logginedUserId="a"/>
        </article>
        <div>
        <SuggestedPosts
          header="Latest Article"
          posts={postData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
        <div className="mt-7">
          <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
            Share on:
          </h2>
          <SocialShareButton url={encodeURI("https://wwww.google.com")} title={encodeURIComponent("Google Search Engine")}/>
        </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;