"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Alma() {
  let router = useRouter();
  return (
    <>
      <div onClick={() => router.push("/about")}>Push </div>
      <div onClick={() => router.back()}>Back</div>
      <div onClick={() => router.forward()}>Forward</div>
      <div onClick={() => router.refresh()}>Refresh</div>
    </>
  );
}

export default Alma;
