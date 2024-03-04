import Image from "next/image";
import one from "~/pics/news/1.jpg";
import two from "~/pics/news/2.jpg";
import three from "~/pics/news/3.jpg";

export default function News() {
  const blogs = [
    {
      id: 1,
      category: "Web Design",
      title: "How to create a website using WordPress",
      img: one,
    },
    {
      id: 2,
      category: "Branding",
      title: "Angular team streamlines requests",
      img: two,
    },
    {
      id: 3,
      category: "UI Design",
      title: "How to handle errors in React Javascript",
      img: three,
    },
  ];

  return (
    <div className="iknow_tm_news">
      <div className="iknow_tm_main_title">
        <span>Blog</span>
        <h3>Latest tips, tricks &amp; Updates</h3>
      </div>
      <div className="news_list">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <div className="list_inner">
                <div className="image">
                  <Image src={blog.img} alt="image" />
                  <div
                    className="main"
                    style={{ backgroundImage: `url(${blog.img.src})` }}
                  />
                </div>
                <div className="details">
                  <span className="category">{blog.category}</span>
                  <h3 className="title">
                    <a href="#">{blog.title}</a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
