/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import AppBar from "@/components/common/AppBar";
import { IParams } from "@/locale/locale";
import StepperContainer from "@/components/StepperContainer";

export default function Home({ params: { locale } }: IParams) {
  return (
    <main className="flex min-h-screen flex-col bg-sky-100">
      <AppBar />
      <StepperContainer />
    </main>
  );
}
