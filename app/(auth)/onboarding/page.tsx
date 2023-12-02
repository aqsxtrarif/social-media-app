import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import React from "react";

const Page = async () => {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id || "",
    // objectId: "",
    username: user?.username || "",
    name: user?.firstName || "",
    bio: "",
    image: user?.imageUrl || "",
  };

  // const userData = {
  //   id: user?.id,
  //   objectId: userInfo?._id ,
  //   username: userInfo?.username || user?.username,
  //   name: userInfo?.name || user?.firstName,
  //   bio: userInfo?.bio,
  //   image: userInfo?.image || user?.imageUrl,
  // };

  return (
    <div className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your Profile now to use Socail Media App
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </div>
  );
};

export default Page;
