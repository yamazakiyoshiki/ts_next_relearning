"use client";

import { useEffect, useState } from "react";

export default function SSR() {
  const [state, setState] = useState<undefined | string>(undefined);
  useEffect(() => {
    setState("client loaded");
  }, []);
  return (
    <>
      <div>{state}</div>
    </>
  );
}
