import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get answers to the most common questions about our product.
            </p>
          </div>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="what-is-it">
            <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-6 py-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              What is Chit Fund?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              A chit fund is a financial arrangement where a group of
              individuals pool money together by making regular contributions.
              Through a lottery system, one member is chosen periodically to
              receive the entire pooled amount, facilitating both savings and
              borrowing among participants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="how-does-it-work">
            <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-6 py-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              How does chit fund work?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              Chit funds operate through a series of auctions, with members
              bidding to take the pooled funds at various points in the scheme's
              duration. The winning bidder in each auction gets the funds, and
              this continues until every member has received their share.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-6 py-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              what are the benefits ?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              Kapil Chits advisors provide numerous advantages, such as
              interest-free borrowing, transparent operations, community-driven
              savings, and a long-standing legacy of trust, enabling you to
              reach your financial objectives.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="trusted">
            <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-6 py-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Is kapil chits trusted?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              Kapil Chits is a certified chit fund company, guaranteeing secure
              and transparent operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="how-chit-is-better">
            <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-6 py-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              How is a chit fund a better saving option?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              Joining a chit fund compels an individual to regularly save a
              portion of their income, helping to manage both planned and
              unexpected expenses. When faced with a contingency, borrowing from
              the chit fund is significantly easier, quicker, and more
              affordable. For those who choose to save until the end, the
              returns received through chit dividends are substantially higher.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="why-should-i-join">
            <AccordionTrigger className="flex items-center justify-between rounded-md bg-background px-6 py-4 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Why should I join Kapil Chit Funds?
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              Kapil Chits has been a professionally managed company serving its
              subscribers for over 44 years, since its establishment in 1981. It
              is part of the diversified Kapil Group, which has interests in
              real estate, media, information technology, construction,
              agriculture, horticulture, dairy, bread manufacturing, Ayurvedic
              healthcare, and travel services. The group is committed to social
              responsibility, supporting a non-profit cancer hospital and
              providing scholarships to underprivileged, meritorious students.
              Additionally, Kapil Chits offers a 0.5% discount on installments
              paid at any Kapil Branch Office before the 10th of each month.
              Subscribers can also pay their installments at any Kapil Chit Fund
              Branch or have them collected from their doorstep. Plans for
              online payment options are also in development.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
