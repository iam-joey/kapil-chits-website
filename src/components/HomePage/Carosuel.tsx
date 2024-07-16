import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function ImageCarousel() {
  return (
    <section className="w-full py-6 md:py-15 lg:py-15">
      <div className="container px-4 md:px-6">
        <Carousel className="rounded-xl" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
                <img
                  src="/1.jpg"
                  alt="Product Image 1"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
                <img
                  src="/2.jpg"
                  alt="Product Image 2"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
                <img
                  src="/3.jpg"
                  alt="Product Image 3"
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 p-2 text-foreground hover:bg-background/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            <ChevronLeftIcon className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 p-2 text-foreground hover:bg-background/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            <ChevronRightIcon className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </CarouselNext>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            <div className="h-2 w-2 rounded-full bg-background/80 transition-all hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
            <div className="h-2 w-2 rounded-full bg-background/80 transition-all hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
            <div className="h-2 w-2 rounded-full bg-background/80 transition-all hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
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
