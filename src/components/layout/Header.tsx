import Link from "next/link";
import { ButtonLink, Nav } from ".";
import { url } from "@/constants";

export default function Header() {
  return (
    <header className="flex justify-between items-center mx-auto px-4 min-h-[60px]">
      <h1 className="p-2 text-xl font-bold cursor-pointer">
        <Link href={url.HOME}>Spatial</Link>
      </h1>
      <Nav />
      <ButtonLink href={url.LOGIN} label={"Login"} />
    </header>
  );
}
