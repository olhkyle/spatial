import url from "@/constants/url";
import { ButtonLink } from ".";

const links = [
  {
    label: "Get New Link ",
    href: url.LINK,
  },
  {
    label: "Studios",
    href: url.STUDIO_LIST,
  },
] as const;

export default function Nav() {
  return (
    <nav className="flex justify-between items-center gap-4">
      {links.map(({ label, href }) => (
        <ButtonLink key={label} href={href} label={label} variant={"ghost"} />
      ))}
    </nav>
  );
}
