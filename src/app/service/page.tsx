import Link from "next/link";
import { icons } from "~/data/main";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Wireframing",
      icon: icons.services.squares,
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/1.jpg",
    },
    {
      id: 2,
      title: "Prototype",
      icon: icons.services.physics,
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/2.jpg",
    },
    {
      id: 3,
      title: "UI Design",
      icon: icons.services.web,
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/3.jpg",
    },
    {
      id: 4,
      title: "Personal Creation",
      icon: icons.services.user,
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/4.jpg",
    },
    {
      id: 5,
      title: "Case Study",
      icon: icons.services.briefcase,
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/5.jpg",
    },
    {
      id: 6,
      title: "Experience Design",
      icon: icons.services.writing_2,
      desc: "Web development is the building and maintenance of websites. it’s the work that...",
      img: "img/service/6.jpg",
    },
  ];

  return (
    <div className="iknow_tm_services">
      <div className="iknow_tm_main_title">
        <span>Service</span>
        <h3>Never compromise with quality</h3>
      </div>
      <div className="service_list">
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <div className="list_inner">
                <span
                  className="icon"
                  dangerouslySetInnerHTML={{ __html: service.icon }}
                />
                <h3 className="title">{service.title}</h3>
                <p className="text">{service.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
