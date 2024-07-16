export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our agency specializes in financial consulting and chit fund
            management services, ensuring secure investments and maximizing
            returns with Kapil Chits.
          </p>
        </div>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md ">
            <div className="bg-secondary rounded-md p-3 text-secondary-foreground">
              <ShieldIcon className="h-8 w-8" />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Secure &amp; Reliable</h3>
              <p className="text-muted-foreground">
                We offer comprehensive financial planning services designed to
                help you strategically manage your finances. Our expert guidance
                ensures that you are well-prepared to meet any contingent
                expenses without experiencing undue pressure. By working with
                us, you can achieve financial stability and confidence, knowing
                that your financial needs are meticulously planned and
                addressed.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md ">
            <div className="bg-accent rounded-md p-3 text-accent-foreground">
              <SettingsIcon className="h-8 w-8" />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Highly Customizable</h3>
              <p className="text-muted-foreground">
                We provide access to chit funds, a unique financial product that
                offers the dual benefits of saving and borrowing. Our services
                enable you to make informed financial decisions, helping you
                avoid the pitfalls of borrowing at exorbitant costs from money
                lenders and other financial channels. With our streamlined
                process, you can borrow with fewer hassles and greater ease,
                ensuring a smarter and more efficient way to manage your
                finances.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md ">
            <div className="bg-success rounded-md p-3 text-success-foreground">
              <RocketIcon className="h-8 w-8" />
            </div>
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Scalable &amp; Flexible</h3>
              <p className="text-muted-foreground">
                We partner with Kapil Chits to bring you a trustworthy, safe,
                and reliable solution for maximizing the benefits of investing
                in chit funds. Our collaboration ensures that you receive
                top-tier service and support, making your investment journey
                smooth and rewarding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BoltIcon(props: any) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function RocketIcon(props: any) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShieldIcon(props: any) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
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
