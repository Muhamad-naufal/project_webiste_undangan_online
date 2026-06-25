"use client";

import { useState } from "react";
import Cover from "@/components/Cover";
import Hero from "@/components/Hero";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened && <Cover onOpen={() => setOpened(true)} />}

      <main>
        <Hero />
      </main>
    </>
  );
}
