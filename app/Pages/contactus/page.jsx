"use client";
import React, { useState, useEffect } from "react";
import Loader from "../../Components/Loader";
import Image from "next/image";
import Insta from "/app/assets/image/insta.png";
import Face from "/app/assets/image/facebook.webp";
import Yt from "/app/assets/image/yt.png";
import { useSelector } from "react-redux";

const Page = () => {
  const { langName } = useSelector((state) => state.lang);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoader(true);
      const res = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === true) {
        setShowAlert(true); // Set showAlert to true after successful form submission
        setLoader(false);
        // Hide the alert after some time (e.g., 3 seconds)
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        setLoader(false);
        console.log(data.message); // Log the error message if submission failed
      }
    } catch (error) {
      console.error("Failed to submit contact form", error.message);
      setLoader(false);
      // Handle error states or display an error message
    }
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const pic1 = {
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uRUc7n5bFxLqwBv1e-lnZeXP88KIFWQsrOZACC5EXw&s")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    width: "100%",
  };

  const pic2 = {
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uRUc7n5bFxLqwBv1e-lnZeXP88KIFWQsrOZACC5EXw&s")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    width: "100%",
  };

  const pic3 = {
    backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uRUc7n5bFxLqwBv1e-lnZeXP88KIFWQsrOZACC5EXw&s")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200px",
    width: "100%",
  };

  //you can apply the background image to any of the perticular div by just calling style={pic1 or pic2 or pic3 } just replace the url link witht he actual link of the file

  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen text-gray-800">
      {/* Contact Information and Map */}
      {loader && <Loader />}
      <div className="w-full md:w-3/4 p-8 mb-8 md:mb-0 rounded-lg shadow-lg mt-5">
        <div className="bg-orange-100 mt-10 p-8 rounded-lg">
          <h2
            className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${
              langName === "Kannada" ? "hidden" : "flex"
            }`}
          >
            Contact Information
          </h2>
          <h2
            className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${
              langName === "English" ? "hidden" : "flex"
            }`}
          >
            ಸಂಪರ್ಕಿಸಲು ಮಾಹಿತಿ
          </h2>

          <div
            className={`mt-6 flex-col${
              langName === "Kannada" ? "hidden" : "flex"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Address
            </h3>
            <p className="text-gray-700">
              Shree Basaveshwara Temple, <br />
              Basavana Moola, Kulkunda, <br />
              Kadaba Taluk, Dakshina Kannada, <br />
              Karnataka-574238
            </p>
          </div>
          <div
            className={`mt-6 flex-col${
              langName === "English" ? "hidden" : "flex"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">ವಿಳಾಸ:</h3>
            <address>
              ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವಸ್ಥಾನ,
              <br />
              ಬಸವನ ಮೂಲ, ಕುಲ್ಕುಂದ,
              <br />
              ಕಡಬ ತಾಲೂಕು, ದಕ್ಷಿಣ ಕನ್ನಡ,
              <br />
              ಕರ್ನಾಟಕ-574238
            </address>
          </div>

          <div
            className={`mt-8 flex-col ${
              langName === "Kannada" ? "hidden" : "flex"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 ">
              Phone Numbers
            </h3>
            <div className="flex items-center">
              <p className="text-gray-700">President: 9448624775 </p>
            </div>
            <div className="flex-col">
              <div className="font-semibold text-lg">Priest:</div>
              <div className="flex items-center ">
                <p className="text-gray-700">Mobile: 9482624747</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-700">WhatsApp: 9482624747</p>
              </div>
            </div>
          </div>

          <div
            className={`mt-8 flex-col ${
              langName === "English" ? "hidden" : "flex"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 ">
              ದೂರವಾಣಿ ಸಂಖ್ಯೆ:
            </h3>
            <div className="flex items-center">
              <p className="text-gray-700">ಅಧ್ಯಕ್ಷರು: 9448624775 </p>
            </div>
            <div className="flex-col">
              <div className="font-semibold text-lg">ಅರ್ಚಕರು:</div>
              <div className="flex items-center ">
                <p className="text-gray-700">ಮೊಬೈಲ್: 9482624747</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-700">ವಾಟ್ಸಾಪ್‌: 6362148620</p>
              </div>
            </div>
          </div>

          <div className={`mt-8 ${langName === "Kannada" ? "hidden" : "flex"}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <p className="text-gray-700 break-all">
                <a
                  href="mailto:shreebasaveshwaratemplekulkund@gmail.com"
                  class="text-black hover:text-green-500 transition-colors duration-300"
                >
                  shreebasaveshwaratemplekulkund@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className={`mt-8 ${langName === "English" ? "hidden" : "flex"}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ಮಿಂಚಂಚೆ(ಈ-ಮೇಲ್)
            </h3>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <p className="text-gray-700 break-all">
                <a
                  href="mailto:shreebasaveshwaratemplekulkund@gmail.com"
                  class="text-black hover:text-green-500 transition-colors duration-300"
                >
                  shreebasaveshwaratemplekulkund@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        _{/*map*/}
        <div className="flex mt-8 p-4 justify-center bg-white rounded-lg ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.3518917216397!2d75.6071434!3d12.690440299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4e6a6152c4c59%3A0x848a6ae907e47652!2sShree%20Basaveshwara%20Temple!5e0!3m2!1sen!2sin!4v1703072760786!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-8  min-h-screen mt-7">
        {/*enquire form*/}
        <form
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-orange-100 rounded-lg shadow-lg mt-8"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Enquire form
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mt-5 text-sm font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  value={formData.name}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Your Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Let's talk
            </button>
          </div>
        </form>
        {showAlert && (
          <div className="mt-4 p-2 text-white bg-green-500 rounded-md">
            <p className="text-center">Form submitted successfully!</p>
            <p className="text-center">
              We'll soon address all your inquiries.
            </p>
          </div>
        )}
        <div className="w-full max-w-md sm:p-8 bg-orange-100 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl sm:text-3xl text-center font-bold tracking-tight mb-4 sm:mb-6">
            Social Links
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {/* Instagram */}
            <div className="social-icon">
              <a
                href="https://www.instagram.com/shreebasaveshwaratemple?igsh=Ymk0ZXhwZHV0a3lk"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link relative overflow-hidden group"
              >
                <Image
                  src={Insta}
                  alt="Instagram"
                  width={80}
                  height={80}
                  className="rounded-full transition-transform duration-300 transform scale-100 group-hover:scale-110"
                />
              </a>
            </div>

            {/* Facebook */}
            <div className="social-icon">
              <a
                href="https://www.facebook.com/profile.php?id=100090518155741"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link relative overflow-hidden group"
              >
                <Image
                  src={Face}
                  alt="Facebook"
                  width={80}
                  height={80}
                  className="rounded-full transition-transform duration-300 transform scale-100 group-hover:scale-110"
                />
              </a>
            </div>

            {/* YouTube */}
            <div className="social-icon">
              <a
                href="https://www.instagram.com/shreebasaveshwaratemple?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link relative overflow-hidden group"
              >
                <Image
                  src={Yt}
                  alt="YouTube"
                  width={80}
                  height={80}
                  className="rounded-full transition-transform duration-300 transform scale-100 group-hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
