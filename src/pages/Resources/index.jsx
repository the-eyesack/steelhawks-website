import React from "react";
import { resourceData } from "./data";
import Contact from "./contact";

function ResourcesPage() {
  return (
    <div className="snap-y snap-mandatory px-10 pb-10">
      <section className="snap-always snap-start h-[100vh]">
        <h1 className="pageTitle">Resources</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10 gap-x-4">
          {resourceData.map((event) => (
            <div className="h-fit">
              <h2 className="text-left text-4xl mb-0">{event.event}</h2>
              <h3 className="uppercase">{event.note}</h3>
              <ol>
                {event.links.map((links) => (
                  <a className="block text-2xl py-1" href={links.link}>
                    {links.title}
                  </a>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default ResourcesPage;
