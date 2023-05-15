import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-top bg-[#2B3252] py-24 lg:px-[250px] md:px-[100px] sm:px-[40px] px-[40px]">
      <div className="mb-8">
        <img src="light-logo.svg" alt="company logo and copyright" />
      </div>
      <div>
        <ul className="flex flex-wrap gap-5 text-white my-0 mb-8">
          <li>
            Services <img className="mt-5" src="socials.svg" alt="" />
          </li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <form action="submit" className="flex flex-col max-w-[100%]">
        <div className="upper flex jusify-between gap-[20px] max-w-[78%]">
          <input
            type="text"
            placeholder="Name"
            className="border max-w-[60%] box-border rounded-[8px] h-10 bg-transparent border-white opacity-0.2 px-3"
          />
          <input
            type="text"
            placeholder="Email"
            className="border max-w-[60%] box-border rounded-[8px] h-10 bg-transparent border-white opacity-0.2 px-3"
          />
        </div>
        <div className="flex flex-col justify-between border rounded-[8px] w-[100%] h-20  bg-transparent border-white opacity-0.2 px-3 py-3 mt-5 justify-between">
          <input
            type="text"
            placeholder="Text"
            className="bg-transparent border-none opacity-0.2 self-start"
          />
          <button className="w-[74px] h-[42px] bg-red-500 text-white rounded-[8px] self-end">
            Send
          </button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
