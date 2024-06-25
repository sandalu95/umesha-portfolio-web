"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { blogs } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";

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
                <div
                  key={index}
                  className="flex-1 flex flex-col group border-b-[2px] border-b-white/20 pb-8 justify-between"
                >
                  <div className="mb-4">
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
                    </div>
                  </div>
                  <div>
                    <a href={blog.href} target="_blank">
                      <Button variant="whiteOutline">Read More</Button>
                    </a>
                  </div>
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
