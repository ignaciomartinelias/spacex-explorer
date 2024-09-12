import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { ReactNode } from "react";

export const SidebarLink = ({
  href,
  children,
  className,
  isMobile,
}: {
  href: string;
  children: ReactNode;
  className: string;
  isMobile: boolean;
}) => {
  if (isMobile) {
    return (
      <SheetClose asChild>
        <Link href={href} className={className}>
          {children}
        </Link>
      </SheetClose>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};
