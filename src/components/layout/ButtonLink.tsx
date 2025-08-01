import Link from "next/link";
import { Button } from "../ui";

interface ButtonLinkProps {
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  label: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

export default function ButtonLink({
  href,
  target = "_self",
  label,
  variant = "default",
  className = "",
}: ButtonLinkProps) {
  return (
    <Button asChild variant={variant}>
      <Link
        href={href}
        target={target}
        className={`${className} font-semibold`}
      >
        {label}
      </Link>
    </Button>
  );
}
