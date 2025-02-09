import React from "react";
import { Link } from "react-scroll";
import githubLogo from "../../assets/github-mark-white.png";
import linkedInLogo from "../../assets/ll_white.png";
import instagramLogo from "../../assets/Instagram_Glyph_White.png";


const Footer = () => {
    return (
        <footer className="bg-footer text-white p-6 text-center">
            <p className="mb-4">&copy; 2025 Shobhit Parmar. All rights reserved.</p>
            <p className="mb-4">Connect with me on Social Media</p>

            <div className="flex justify-center items-center w-full h-[80px] m-auto gap-6">
                <a href="https://github.com/parmarshobhit91">
                <img className="h-[32px]" src={githubLogo} alt="logo" />
                </a>
                <a href="https://www.instagram.com/_._shobhit?igsh=ZGtmd3NuNGJnd3Z1">
                    <img className="h-[32px]" src={instagramLogo} alt="logo" />
                </a>
                <a href="https://www.linkedin.com/in/shobhit-parmar-a38830339/">
                    <img className="h-[32px]" src={linkedInLogo} alt="logo" />
                </a>
                
            </div>
        </footer>
    );
};

export default Footer;
