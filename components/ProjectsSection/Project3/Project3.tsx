"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function Project3() {
  return (
    <Link href={"https://agreeable-smoke-07b729c1e.1.azurestaticapps.net/"} target="_blank">
      <CardContainer className="inter-var ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border py-10 ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Rock, Paper, Scissors, Lizard, Spock Web App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Built using Dotnet 9, C#, JavaScript, HTML/CSS and Bootstrap's component library.
          </CardItem>
          <div className="pb-5">
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/assets/RPSLSgame.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-fit rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  );
}
