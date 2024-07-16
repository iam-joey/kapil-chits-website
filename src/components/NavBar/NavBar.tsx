"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <header className="sticky top-2 z-10 flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-yellow-200 rounded-md ">
      <div
        className="mr-6 flex lg:hidden cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/kc.webp" width={50} height={50} alt="" />
      </div>
      <div
        className="mr-6 hidden lg:flex cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image src="/kc.webp" width={50} height={50} alt="" />
      </div>
      <div className="flex items-center ml-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-2 py-6">
              <div
                className="flex w-full items-center py-2 text-lg font-semibold cursor-pointer"
                onClick={() => router.push("/")}
              >
                Home
              </div>
              <div className="flex w-full items-center py-2 text-lg font-semibold cursor-pointer">
                About
              </div>
              <div className="flex w-full items-center py-2 text-lg font-semibold cursor-pointer">
                Services
              </div>
              <div
                className="flex w-full items-center py-2 text-lg font-semibold cursor-pointer"
                onClick={() => router.push("/chits-plan")}
              >
                Chits Plan
              </div>
              <div className="flex w-full items-center py-2 text-lg font-semibold cursor-pointer ">
                Contact
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <div
              onClick={() => router.push("/")}
              className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Home
            </div>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <div className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              About
            </div>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <div className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              Services
            </div>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <div
              onClick={() => router.push("/chits-plan")}
              className=" cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Chits plan
            </div>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <div className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
              Contact
            </div>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
