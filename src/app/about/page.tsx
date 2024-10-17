import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutPage() {
  return (
    <div className="px-64 h-[561px] p-12 bg-slate-900 ">
      <h1 className="text-2xl mb-2 font-bold underline text-white decoration-sky-500">
        About Our Company
      </h1>
      <Accordion type="single" collapsible className="text-white">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">
            What Is Ray&Land.Gg?
          </AccordionTrigger>
          <AccordionContent>
            Ray&land.gg is a forward-thinking software development company
            dedicated to crafting innovative solutions that empower businesses.
            Our mission is to enhance operational efficiency, streamline
            processes, and improve user experiences through technology. We
            specialize in creating tailored software that meets the unique
            challenges of various industries, ensuring that our clients remain
            competitive in an ever-evolving digital landscape.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md">
            What Services Do You Offer?
          </AccordionTrigger>
          <AccordionContent>
            We offer a comprehensive range of services designed to address the
            diverse needs of our clients. Our core offerings include:
            <ul>
              <li>
                <strong>Web Application Development:</strong> Building robust,
                scalable web applications that enhance user engagement and
                streamline business operations.
              </li>
              <li>
                <strong>Mobile Application Development:</strong> Creating
                intuitive mobile apps for both iOS and Android platforms that
                meet the demands of today’s users.
              </li>
              <li>
                <strong>System Integration:</strong> Seamlessly integrating
                various systems and applications to ensure efficient data flow
                and operational synergy.
              </li>
              <li>
                <strong>Technology Consulting:</strong> Providing expert
                guidance on technology strategies, helping businesses leverage
                the latest innovations to achieve their goals.
              </li>
            </ul>
            Our focus is on delivering high-quality solutions that not only meet
            but exceed our clients’ expectations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md">
            Why Choose Ray&Land.Gg?
          </AccordionTrigger>
          <AccordionContent>
            Choosing Ray&land.gg means partnering with a team of dedicated
            professionals who are passionate about technology and committed to
            your success. Here’s why we stand out:
            <ul>
              <li>
                <strong>Expert Team:</strong> Our team is composed of skilled
                developers, designers, and consultants with extensive experience
                across various domains.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> We prioritize
                understanding our clients’ needs and challenges, tailoring our
                solutions to deliver maximum impact.
              </li>
              <li>
                <strong>Agile Methodology:</strong> We employ agile development
                practices that promote flexibility, collaboration, and
                continuous improvement throughout the project lifecycle.
              </li>
              <li>
                <strong>Proven Track Record:</strong> We have successfully
                delivered numerous projects across different industries,
                consistently achieving high levels of client satisfaction.
              </li>
            </ul>
            At Ray&land.gg, we are committed to fostering long-term
            relationships and driving your business forward with innovative
            technology solutions
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
