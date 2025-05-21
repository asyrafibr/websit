import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Required for accordion and navbar toggling
import headerImage from "./image/1.jpg";
import serviceImage1 from "./image/2.jpg";
import serviceImage2 from "./image/3.jpg";
import serviceImage3 from "./image/4.jpg";

export default function App() {
  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "transparent", backgroundImage: "none", boxShadow: "none" }}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Website Development Service</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "#000" }} // Black background on toggler for visibility
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#services">Our Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-white text-center d-flex align-items-center hero-section" style={{ backgroundImage: `url(${headerImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "50vh", marginTop: "0" }}>
        <div className="container">
          <h1>Building your online presence, one website at a time</h1>
          <button className="btn btn-light mt-3">Get Started</button>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="text-center my-5">
        <div className="container">
          <h2>Welcome to Website Development Services</h2>
          <p>We are a leading website development company based in Nairobi, Kenya. Our mission is to help businesses of all sizes create a strong online presence through stunning websites.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-light py-5">
        <div className="container">
          <h3 className="text-center mb-4">Services</h3>
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-4 text-center service-item">
              <img src={serviceImage1} className="img-fluid mb-3 service-img" alt="Custom Website Design" />
              <h5>Custom Website Design</h5>
              <p>Create a stunning site specific to your business needs with our custom design tools, scalable infrastructure, and creative team.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-4 text-center service-item">
              <img src={serviceImage2} className="img-fluid mb-3 service-img" alt="E-commerce Solutions" />
              <h5>E-commerce Solutions</h5>
              <p>Boost your online retail with our E-commerce packages. Increase sales, streamline your customer journey, and enhance user experience.</p>
            </div>
            <div className="col-md-4 col-sm-6 mb-4 text-center service-item">
              <img src={serviceImage3} className="img-fluid mb-3 service-img" alt="Mobile App Development" />
              <h5>Mobile App Development</h5>
              <p>Engage more customers on-the-go by investing in a mobile app development package. Android and iOS tailored experiences available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="text-center py-5">
        <div className="container">
          <h4>Frequently Asked Questions</h4>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  How long does it take to build a website?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  The timeline for website development depends on its complexity. On average, it can take 4 to 6 weeks to launch a site.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What kind of support do you offer after the website is live?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We offer ongoing support, maintenance packages, and update services.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Do you provide hosting services for websites?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, we provide secure and scalable hosting services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-info text-white text-center py-4">
        <p className="mb-0">"Working with Website Development Services was a game-changer for my business. Their team delivered a website that exceeded all my expectations and helped me attract more customers." – John Doe</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h4 className="mb-4">Contact us</h4>
          <p><strong>Phone:</strong> +60132936420</p>
          <p><strong>Email:</strong> devmywebsiteservice@gmail.com</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-dark text-white text-center py-5">
        <div className="container">
          <p>Website Development Services is a Malaysia-based web development company dedicated to delivering high-performance websites. With a team of experienced professionals, we help small and medium-sized businesses unlock their online potential.</p>
          <button className="btn btn-light mt-2">Get Started</button>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          opacity: 0;
          transform: translateY(50px);
          animation: slideUp 1.2s ease-out forwards;
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-item {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.3s;
        }

        .service-item:nth-child(2) {
          animation-delay: 0.5s;
        }

        .service-item:nth-child(3) {
          animation-delay: 0.7s;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
