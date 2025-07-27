"use client";


import { useState } from "react";
import Banner from "./components/Banner";
import WhyUse from "./components/WhyUse";
import TaskManage from "./TaskManage";

export default function Home() {


  return (
    <main>
      <Banner/>
      <TaskManage/>
    <WhyUse/>
    </main>
  );
}
