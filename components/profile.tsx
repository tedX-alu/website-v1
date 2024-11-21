import Image from "next/image";
import Link from "next/link";
import React from "react";
import instagramIcon from "/public/icons/instagram.png";
import linkedInIcon from "/public/icons/linkedin.png";

interface ProfileProps {
  imageUrl: string;
  alt: string;
  profileName: string;
  profileTitle?: string;
  profileInstagram?: string;
  profileLinkedIn?: string;
}

const Profile = ({
  imageUrl,
  alt,
  profileName,
  profileTitle,
  profileInstagram = "",
  profileLinkedIn = "",
}: ProfileProps) => {
  return (
    <div className="mb-8 flex flex-col items-center">
      <Image
        alt={alt}
        className="rounded-full w-[15vw] md:w-[15vw] object-cover"
        height="500"
        width="500"
        src={imageUrl}
        quality={100}
        style={{
          aspectRatio: "300/300",
          objectFit: "cover",
        }}
      />
      <div className="text-center">
        <h4 className="mt-3 md:text-2xl font-semibold">{profileName}</h4>
        <h5 className="font-medium text-sm md:text-lg ">{profileTitle}</h5>

        <ul className="flex space-x-5 justify-center">
          <li>
            {profileInstagram == "" ? (
              <Image
                src={instagramIcon}
                alt="instagram icon"
                width={20}
                className="md:w-[2rem]"
              />
            ) : (
              <Link href={profileInstagram!} target="_blank">
                <Image
                  src={instagramIcon}
                  alt="instagram icon"
                  width={20}
                  className="md:w-[2rem]"
                />
              </Link>
            )}
          </li>
          <li>
            {profileLinkedIn == "" ? (
              <Image
                src={linkedInIcon}
                alt="instagram icon"
                width={20}
                className="md:w-[2rem]"
              />
            ) : (
              <Link href={profileLinkedIn!} target="_blank">
                <Image
                  src={linkedInIcon}
                  alt="instagram icon"
                  width={20}
                  className="md:w-[2rem]"
                />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
