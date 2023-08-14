import React from "react";

const Footer = () => {
  return (
    <div className="footer text-white  h-20vh flex items-start  pt-12 justify-center text-center bg-slate-900 ">
      <p className="text-xl font-Philosopher ">
        {" "}
        &copy; Avom Brice, 2023. visit{" "}
        <a
          href="www.rebaseacademy.com"
          style={{ fontSize: "18px", fontStyle: "italic" }}
        >
          rebaseacademy.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
