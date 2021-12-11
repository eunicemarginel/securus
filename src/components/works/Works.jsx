import "./works.scss"
import { useEffect, useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Physical Guarding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://www.garda.com/sites/default/files/styles/blog_list_colours/public/security-guard-services.jpg?h=82f92a78&itok=Yqza4_yp",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Remote Monitoring",
            desc:
                "Lorrefc dsfnd lsdckncs skcnsjdur slchdsfshnc dkdk csdhjfl einnckn euncoe. ",
            img:
                "https://www.securityindustry.org/wp-content/uploads/2018/12/blog-cybersecurity-physical-security-887x488.jpg",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Event Security",
            desc:
                "Lorem Ipsum und hindi the quich brown fox jump over a lazy dog. ",
            img:
                "https://miro.medium.com/max/1000/1*REirrrQ-Wh7fg3cskfRWTQ.png",
        },
        
    ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };
      
      return (
        <div className="works" id="works">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          >
            {data.map((d) => (
              <div className="container">
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="imgContainer">
                        <img src={d.icon} alt="" />
                      </div>
                      <h2>{d.title}</h2>
                      <p>{d.desc}</p>
                      <span>Learn More</span>
                    </div>
                  </div>
                  <div className="right">
                    <img
                      src={d.img}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img
            src="assets/arrow.png"
            className="arrow left"
            alt=""
            onClick={() => handleClick("left")}
          />
          <img
            src="assets/arrow.png"
            className="arrow right"
            alt=""
            onClick={() => handleClick()}
          />
        </div>
      );
    }