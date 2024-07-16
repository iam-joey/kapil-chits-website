"use client";
import Image from "next/image";
import React from "react";

function WhatsApp() {
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => {
          window.open("https://wa.me/13028539182?text=", "_blank");
        }}
      >
        <Image
          className="fixed md:bottom-20 md:right-20 rounded-lg  bottom-10 right-10"
          src="/whatsApp.svg"
          width={50}
          height={50}
          alt=""
        />
      </div>
    </>
  );
}

export default WhatsApp;
