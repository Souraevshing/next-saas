import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="mx-4 mt-4 rounded-xl sticky h-14 inset-x-0 top-0 z-30 w-auto border   border-white/50 bg-white/10 backdrop-blur-lg backdrop-saturate-150 shadow-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-e-zinc-300">
          <Link className="flex z-40 font-semibold" href={"/"}>
            Docq
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}
              >
                Sign In
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                  size: "sm",
                  variant: "secondary",
                })}
              >
                Get Started
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
