import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true
    });
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-3/4 bg-white">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div
          className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"
          data-aos="fade-up"
        >
          <div className="flex" data-aos="fade-right">
            <h1 className="font-bold uppercase text-3xl">
              Send us a <br /> message
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
              data-aos="fade-up"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
          <div className="my-4" data-aos="fade-up">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/4" data-aos="fade-up">
            <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>

        <div
          className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl"
          data-aos="fade-left"
        >
          <div className="flex flex-col text-white">
            <h1 className="font-bold uppercase text-4xl my-4">Furniqo</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt arcu diam,
              eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
            </p>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Main Office</h2>
                <p className="text-gray-400">Manjeri Thurakkal</p>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <div className="flex flex-col">
                <i className="fas fa-phone-alt pt-2 pr-2"></i>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl">Call Us</h2>
                <p className="text-gray-400">Tel: 10101010101</p>
              </div>
            </div>

            <div className="flex my-4 w-2/3 lg:w-1/2">
              <a
                href="https://www.facebook.com/ENLIGHTENEERING/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
              >
                <i className="fab fa-facebook-f text-blue-900"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/enlighteneering-inc-"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
              >
                <i className="fab fa-linkedin-in text-blue-900"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
