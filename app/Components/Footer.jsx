"use client";
import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const { langName } = useSelector((state) => state.lang);

  return (
    <footer className="bg-black text-white py-8 ">
      <div className={` flex-col ${langName === "Kannada" ? "hidden" : "flex"}`}>
        <div className="container mx-auto mt-4 flex flex-wrap justify-center">
          <div className="w-full md:w-2/3 lg:w-1/3 text-center">
            {" "}
            {/* Adjusted width for different screen sizes */}
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <address>
              Shree Basaveshwara Temple,
              <br />
              Basavana Moola, Kulkunda,
              <br />
              Kadaba Taluk, Dakshina Kannada,
              <br />
              Karnataka-574238
            </address>
          </div>

          <div className="w-full md:w-2/3 lg:w-1/3 text-center">
            {" "}
            {/* Adjusted width for different screen sizes */}
            <h3 className="text-xl font-bold mb-2">Phone Numbers</h3>
            <p>President: 9448624775</p>
            <p className="text-xl font-bold">Priest:</p>
            <p>Mobile: 9482624747</p>
            <p>WhatsApp: 6362148620</p>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/3 text-center">
            {" "}
            {/* Adjusted width for different screen sizes */}
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="justify-center mt-4 space-x-4">
              {" "}
              {/* Centered the social media links */}
              <a
                href="https://www.facebook.com/profile.php?id=100090518155741"
                className="text-white"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/shreebasaveshwaratemple?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
                className="text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.google.com/maps/place/Shree+Basaveshwara+Temple/@12.6904403,75.6071434,15z/data=!4m6!3m5!1s0x3ba4e6a6152c4c59:0x848a6ae907e47652!8m2!3d12.6904403!4d75.6071434!16s%2Fg%2F11c2pt0m2_?entry=ttu"
                className="text-white"
              >
                <i className="fas fa-map-marker-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-white border-t my-4" />

        <div className="container mx-auto flex justify-center items-center">
          {" "}
          {/* Centered the copyright text */}
          <div>
            <p>
              Copyright ©2024 Kulkunda Shree Basaveshwara Temple. All Rights
              Reserved. | Powered By: ISCODERZ{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={` flex-col ${langName === "English" ? "hidden" : "flex"}`}>
        <div className="container mx-auto mt-4 flex flex-wrap justify-center">
          {" "}
          <div className="w-full md:w-2/3 lg:w-1/3 text-center">
            {" "}
            {/* Adjusted width for different screen sizes */}
            <h3 className="text-xl font-bold mb-2">ಸಂಪರ್ಕಿಸಲು ಮಾಹಿತಿ</h3>
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
          <div className="w-full md:w-2/3 lg:w-1/3 text-center">
            {" "}
            {/* Adjusted width for different screen sizes */}
            <h3 className="text-xl font-bold mb-2">ಫೋನ್ ಸಂಖ್ಯೆಗಳು</h3>
            <p>ಅಧ್ಯಕ್ಷರು: 9448624775</p>
            <p className="text-xl font-bold">ಅರ್ಚಕರು:</p>
            <p>ಮೊಬೈಲ್: 9482624747</p>
            <p>ವಾಟ್ಸಾಪ್‌: 6362148620</p>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/3 text-center">
            {" "}
            {/* Adjusted width for different screen sizes */}
            <h3 className="text-xl font-bold mb-2">ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳು</h3>
            <div className="justify-center mt-4 space-x-4">
              {" "}
              {/* Centered the social media links */}
              <a
                href="https://www.facebook.com/profile.php?id=100090518155741"
                className="text-white"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/shreebasaveshwaratemple?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
                className="text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.google.com/maps/place/Shree+Basaveshwara+Temple/@12.6904403,75.6071434,15z/data=!4m6!3m5!1s0x3ba4e6a6152c4c59:0x848a6ae907e47652!8m2!3d12.6904403!4d75.6071434!16s%2Fg%2F11c2pt0m2_?entry=ttu"
                className="text-white"
              >
                <i className="fas fa-map-marker-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white border-t my-4" />

        <div className="container mx-auto flex justify-center items-center">
          {" "}
          {/* Centered the copyright text */}
          <div>
            <p>
              ಹೋಸ್ಟಿಂಗ್ ಮತ್ತು ನಿರ್ವಹಣೆ: ಐಎಸ್ ಕೋಡರ್ಸ್ | ಕುಲ್ಕುಂದ ಶ್ರೀ ಬಸವೇಶ್ವರ
              ದೇವಸ್ಥಾನ ©2024 ಎಲ್ಲಾ ಹಕ್ಕುಗಳೂ ಕಾಯ್ದಿರಿಸಿವೆ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
