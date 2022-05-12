import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const logo = "https://links.papareact.com/ua6";
  return (
    <header className="w-full flex flex-col md:flex-row p-5 justify-between items-center">
      <div className="left-section flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        loader={() => logo}
        src={logo}
        width={100}
        height={50}
        alt="NEXTHulu Logo"
        style={{ marginBottom: "12px !important" }}
      />
    </header>
  );
};

export default Header;
