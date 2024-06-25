"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    title: "Writing Unit Tests for React Using Jest",
    description:
      "A guide to setting up Jest for a React project and writing unit tests to ensure your components work as intended.",
    href: "https://medium.com/@sandalukalpanee/writing-unit-tests-for-react-using-jest-2c15e0737f5e",
    image: "/assets/blog/blog5.jpeg",
  },
  {
    title: "Exploring New React-Based Frameworks: A Look at the Tops of 2024",
    description:
      "A review and discussion of the top new React-based frameworks of 2024 and their potential applications.",
    href: "https://medium.com/@sandalukalpanee/exploring-new-react-based-frameworks-a-look-at-the-tops-of-2024-8ccdaf43d082",
    image: "/assets/blog/blog4.jpeg",
  },
  {
    title: "Building Scalable Web Applications with GraphQL",
    description:
      "An introduction to GraphQL and its advantages over traditional REST APIs, along with a guide to building scalable applications.",
    href: "https://medium.com/@sandalukalpanee/building-scalable-web-applications-with-graphql-ec9c16a9cf83",
    image: "/assets/blog/blog3.jpeg",
  },
  {
    title: "The Ultimate SP Dashboard to track your API Manager Analytics",
    description:
      "This article focuses on the Publisher dashboard of APIM Analytics 3.0.0 and provides a brief overview of its features.",
    href: "https://medium.com/@sandalukalpanee/the-ultimate-sp-dashboard-to-track-your-api-manager-analytics-99b36de65021",
    image: "/assets/blog/blog2.jpeg",
  },
  {
    title: "What is Serverless?",
    description:
      "This article explains the basics of Serverless Architecture and its benefits for our studies.",
    href: "https://medium.com/@sandalukalpanee/what-is-serverless-2470a24db2ea",
    image: "/assets/blog/blog1.jpeg",
  },
];

const Blogs = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <ScrollArea className="h-[80vh]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {blogs.map((blog, index) => {
              return (
                <div>
                  <div key={index} className="flex-1 flex flex-col group mb-4">
                    <div className="relative w-full h-[250px] mb-4">
                      <Image
                        src={blog.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-6">
                      <div>
                        <h2 className="text-[25px] mb-2 font-bold leading-none text-white">
                          {blog.title}
                        </h2>
                        <p className="text-white/60">{blog.description}</p>
                      </div>
                      <div>
                        <a href={blog.href} target="_blank">
                          <Button variant="whiteOutline">Read More</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-white/20"></div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollArea>
    </motion.section>
  );
};

export default Blogs;
