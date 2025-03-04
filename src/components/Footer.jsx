import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
  <footer className="gradient-bg mt-6">   
      <div className="mx-auto max-w-7xl p-4 lg:flex justify-between py-10">
        {/* RIGHT */}
        <div className="flex items-center flex-col gap-2">
        
        <div className="flex items-center">
            <img src="assets/logo.png" alt="" width={60} height={60} />
          <h3 className="font-medium">AOC Hotel and suites</h3>
          </div>
          <div>
            <h3 className="hidden lg:block font-medium">Social Media</h3>
            <ul className="flex gap-2">
              <li>
                <a href="">
                  <img
                    src="assets/facebook.png"
                    alt=""
                    width={36}
                    height={36}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="assets/instagram.png"
                    alt=""
                    width={36}
                    height={36}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="assets/tiktok.png" alt="" width={40} height={40} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-center lg:text-[24px] mb-2 font-medium">LINK</h2>
          <ul className="items-center flex flex-col  font-medium text-[12px] lg:text-[16px]">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ROOMS</a>
            </li>
            <li>
              <a href="">GALLERY</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col ">
          <h2 className="text-center lg:text-[24px] mb-2 font-medium">
            COMPANY
          </h2>
          <ul className="items-center flex flex-col  font-medium text-[12px] lg:text-[16px]">
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">TERMS & CONDITION</a>
            </li>
            <li>
              <a href="">PRIVACY POLICY</a>
            </li>
            <li>
              <a href="">PRIVACY POLICY</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 px-4">
          <h2 className="lg:text-[24px] text-center font-medium">CONTACT</h2>
          <div className="items-center flex flex-col ">
            <div className="p-2 flex items-center space-x-4">
              <img src="assets/phone.png" className="w-6 h-6" alt="" />
              <h2 className="font-medium text-[14px]">+23480-343-4343</h2>
            </div>
            <div className="flex p-2 items-center space-x-4">
              <img src="assets/mail.png" className="w-6 h-6" alt="" />
              <h2 className="font-medium text-[14px]">info@aochotel@gmail.com</h2>
            </div>
              <h2>12, Michael Street, Off close <br /> Ogunlana road Lagos, Nigeria</h2>
          </div>
        </div>
      </div>
      <div className="text-center">&copy; copyright </div>
      </footer> 
  );
};

export default Footer;
