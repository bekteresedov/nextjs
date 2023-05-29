"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import styles  from "./page.module.css";
function Page() {
  let useParams = useSearchParams();
  let path = usePathname();
  const name = useParams.get("name");
  console.log(name);
  console.log(path);
  return <div className={styles.font}>About</div>;
}

export default Page;
