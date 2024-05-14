import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="flow-root">
      <div className="container mt-24">
        <div className="flex flex-col lg:flex-row justify-between border-b pb-12 space-y-5">
          <div className="space-y-5">
            <Link href={"/"} className="inline-flex items-center space-x-1">
              <HomeIcon size={40} color="black" />
              <span className="text-2xl font-medium text-black">JustRent</span>
            </Link>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br className="hidden lg:inline" />
              Quisquam tempora ad, accusamus reiciendis quia itaque!
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center space-x-4">
              <p className="text-lg font-medium">Follow Us</p>
              <div>
                <SocialIcon
                  network="facebook"
                  bgColor="transparent"
                  fgColor="black"
                />
                <SocialIcon network="x" bgColor="transparent" fgColor="black" />
                <SocialIcon
                  network="instagram"
                  bgColor="transparent"
                  fgColor="black"
                />
                <SocialIcon
                  network="linkedin"
                  bgColor="transparent"
                  fgColor="black"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
              <div className="bg-violet-500 w-40 h-11 rounded inline-flex items-center justify-center space-x-2">
                <Image
                  src="https://imgur.com/es0NFlm.png"
                  alt="Apple App"
                  width={20}
                  height={20}
                />
                <h3 className="text-lg font-medium text-white">Apple Store</h3>
              </div>
              <div className="bg-violet-500 w-40 h-11 rounded inline-flex items-center justify-center space-x-2">
                <Image
                  src="https://imgur.com/ZetVqgV.png"
                  alt="Apple App"
                  width={20}
                  height={20}
                />
                <h3 className="text-lg font-medium text-white">Google App</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <p className="text-center text-lg">&copy; Copyright - 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
