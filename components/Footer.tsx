

import Container from "./Container";
import { AiOutlineCopyright } from "react-icons/ai";
import Image from 'next/image';

const Footer = () => {

  


  return (
    <div className="w-full py-8 bg-black">
      <div className="w-full mx-auto group">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | Orebi shopping | All Rights Reserved |
          <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by ReactBD.com
            </span>
          </a>
        </p>
      </div>
    </div>
    
  );
};

export default Footer;


