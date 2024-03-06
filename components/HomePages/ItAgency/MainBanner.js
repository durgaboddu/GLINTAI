import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';
import Image from "next/image";

// import bannerImg from '../../../public/images/animate-banner-img1.jpg';
import bannerImg from '../../../public/images/glintai-main-banner.jpg';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

			<div 
        className="hero-banner it-banner overly" 
        style={{ 
          backgroundImage: `url(/images/hero-banner4.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1
                      style={{ fontSize: "2.5rem" }}
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                    >
                      CUSTOM AI AND SOFTWARE DEVELOPMENT COMPANY
                    </h1>

                    <p
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      We build reliable, interpretable, and steerable AI systems and Softwares.
                      We conduct frontier research, develop and apply a variety of Solutions and workflows via a set of partnerships and products
                    </p>

                    <Link 
                      href="/contact-us/" 
                      className="btn btn-primary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      Get Started
                    </Link>

                    {/* <button
                      onClick={() => setToggler(!toggler)}
                      className="btn btn-secondary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <i className="fa-solid fa-play me-1"></i> How it works
                    </button> */}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="animate-banner-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={bannerImg}
                      alt="Animate image"
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
  );
}

export default MainBanner;