import React from "react";

//import stock
import stock from "../img/image1.png";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";
import stock6 from "../img/image7.jpg";
import stock7 from "../img/image8.jpeg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Team</h3>
                <p className="subtitle-a">
                  Our team bridges the gap between 3D geometry and cutting-edge
                  technology, forging a path towards the future.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Ashu Goel</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            With a solid foundation of 8 years of professional
                            experience, Ashu has been actively engaged in the
                            spatial domain for over 2 years. Starting from
                            successful spatial projects, Ashu has progressed to
                            take on the role of manager for the 3D Geometry &
                            Technology department.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Rishabh Mishra</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            With an impressive four-year tenure, Rishabh stands
                            as a formidable pillar in our spatial services team.
                            His consistent growth and contributions have made
                            him a vital part of our success. Currently, Rishabh
                            is taking on a pivotal role in one of our most
                            important MVPs (AGM) and is poised to assume greater
                            ownership.
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={stock1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock2} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Ekta Borkar</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            With a total of 5 years of experience, Ekta has been
                            an essential part of our team for the past 2 years.
                            She has made valuable contributions to various
                            successful spatial projects.
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={stock1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock3} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Nikhil Jain</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Nikhil joined our team in March this year, bringing
                            with him three years of valuable experience. His
                            remarkable achievements span both backend and
                            frontend development, making him a significant
                            contributor. Nikhil has also played a pivotal role
                            in the success of TODs.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock4} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Keshar Kashyap</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Keshar has been a valuable member of our team for
                            the past year, specializing in DeltaGen. With a
                            primary focus on C++, He also lends support to our
                            content team, aiding in their automation efforts
                            using Python.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={stock1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock5} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Shweta Nangare</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            With less than a year of experience in spatial
                            services, Shweta embodies a strong desire to learn
                            and grow.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock6} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock6} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Vaibhav Chaudhary</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Vaibhav joined us as an apprentice and has swiftly
                            become an integral part of our team. He's been
                            actively involved in AI/ML projects, contributing to
                            our ongoing efforts to keep DSGS at the forefront of
                            innovation.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={stock7} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock7} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Mihir Nath</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Mihir recently joined us in July, and he comes to us
                            from NIT Agartala, Currently he is under going
                            training.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
