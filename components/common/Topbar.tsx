import { SignOutButton, SignedIn } from "@clerk/nextjs"; 
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <nav className="topbar ">
      <Link href="/" className="flex items-center gap-4"> 
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          SocialMediaApp
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src={"/assets/logout.svg"}
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
