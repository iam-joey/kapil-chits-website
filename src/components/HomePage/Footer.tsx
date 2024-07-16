import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image src="/kc.webp" alt="" width={50} height={50} />
        </Link>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Iamjoey. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
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
