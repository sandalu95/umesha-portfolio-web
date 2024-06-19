"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    title: "What is Serverless?",
    description:
      "At present, Serverless Architecture is a hot topic in the software architecture world. But do you have any idea what it really is? or why we should consider it for our studies? In this article, I hope to enlighten you a little more about these areas in a simple and short way.",
    href: "https://medium.com/@sandalukalpanee/what-is-serverless-2470a24db2ea",
    image: "/assets/blog/blog1.jpeg",
  },
  {
    title: "The Ultimate SP Dashboard to track your API Manager Analytics",
    description:
      "This article will mainly focus on the Publisher dashboard of APIM Analytics 3.0.0 and will just brief the including since the dashboard is still under the development.",
    href: "https://medium.com/@sandalukalpanee/the-ultimate-sp-dashboard-to-track-your-api-manager-analytics-99b36de65021",
    image: "/assets/blog/blog2.jpeg",
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
      <div className="container mx-auto">
        <ScrollArea className="h-[80vh] pr-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {blogs.map((blog, index) => {
              return (
                <div>
                  <div
                    key={index}
                    className="flex-1 flex flex-col gap-6 group h-[500px] mb-4"
                  >
                    <div className="relative w-full h-[250px]">
                      <Image
                        src={blog.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-between h-[250px]">
                      <div>
                        <h2 className="text-[25px] mb-2 font-bold leading-none text-white">
                          {blog.title}
                        </h2>
                        <p className="text-white/60">{blog.description}</p>
                      </div>
                      <div>
                        <a
                          href={blog.href}
                          target="_blank"
                          className="text-white hover:text-accent transition-all"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-white/20"></div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </motion.section>
  );
};

export default Blogs;
