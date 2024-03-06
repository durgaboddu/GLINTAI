import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "AI strategy consulting",
    shortText:
    "Advising on best practices for AI adoption",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Data analytics & engineering",
    shortText:
      "Data analytics & engineering - Collecting, cleaning and analyzing data to extract insights",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Custom AI System Development",
    shortText:
      "Building specialized AI models and platforms for clients' needs",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Automation & optimization",
    shortText:
      "Using AI to automate processes and improve efficiency",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Natural language processing",
    shortText:
      "Developing chatbots, document analysis, search etc.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Computer vision",
    shortText:
      "Image and video analysis, security systems, quality control",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Predictive analytics",
    shortText:
      "Forecasting and modeling future outcomes with AI",
    viewDetails: "/services/service-details/",
    aosDelay: "700",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Personalization & recommendations",
    shortText:
      "Tailoring experiences to individuals",
    viewDetails: "/services/service-details/",
    aosDelay: "800",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Robotic process automation",
    shortText:
      "Configuring software bots to automate repetitive tasks",
    viewDetails: "/services/service-details/",
    aosDelay: "900",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "IoT & edge AI",
    shortText:
      "Enabling intelligence on connected devices",
    viewDetails: "/services/service-details/",
    aosDelay: "1000",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Voice & speech interfaces",
    shortText:
      "Building conversational assistants",
    viewDetails: "/services/service-details/",
    aosDelay: "1100",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "AI training & governance",
    shortText:
      "Ensuring ethical, explainable and robust AI",
    viewDetails: "/services/service-details/",
    aosDelay: "1200",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Enterprise AI",
    shortText:
      "Workflow automation, data mining, decision support",
    viewDetails: "/services/service-details/",
    aosDelay: "1300",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Custom software development",
    shortText:
      "Building software tailored to clients' needs",
    viewDetails: "/services/service-details/",
    aosDelay: "1400",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "App development",
    shortText:
      "Mobile and web apps, from prototype to launch",
    viewDetails: "/services/service-details/",
    aosDelay: "1500",
  },
];

const OurServices = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p> */}
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 15).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one bg-fcfbfb">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
