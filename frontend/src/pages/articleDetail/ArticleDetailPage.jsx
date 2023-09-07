import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";

const BreadCrumbsData = [
  {name: "Home", link: "/"},
  {name: "Blog", link: "/blog"},
  {name: "Article title", link: "/blog/1"}
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
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <article className="flex-1">
              <BreadCrumbs data={BreadCrumbsData}/>
              <img className="rounded-xl w-full" src={images.Post1Image} alt="" />
              <Link to="/blog?category=selectedCategory" className="text-primary text-sm font-roboto inline-block mt-4 md:text-base">EDUCATION</Link>
              <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                Help children get better education
              </h1>
              <div className="mt-4 text-dark-soft">
                <p className="leading-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum a obcaecati aliquam iure debitis est voluptates perspiciatis, laborum neque, aperiam libero eveniet saepe reiciendis cum. Error maiores consectetur totam ex aliquid expedita minus, quia maxime eos repellendus libero nobis architecto optio, animi deleniti rerum quam labore magni soluta distinctio? Nobis!
                </p>
              </div>
            </article>
            <SuggestedPosts header="Latest Article" posts={postData} tags={tagsData} className="mt-8 lg:mt-0 lg:max-w-xs"/>
        </section>
    </MainLayout>
  )
}

export default ArticleDetailPage;