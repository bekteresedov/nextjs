import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Roboto } from "next/font/google";
import { resolve } from "styled-jsx/css";
import Head from "./head";
import { redirect } from "next/navigation";
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
};
const fetchData2 = async () => {
  const res = await fetch("https://restcountries.com/v3.1/name/deutschland");
  return res.json();
};
const Page = async () => {
  await sleep(3000);

  let nav = false;
  nav && redirect("/about");

  const data1 = fetchData();
  const data2 = fetchData2();
  const result = await Promise.all([data1, data2]);
  console.log(result);

  return (
    <div>
      <Head />
      <h2 className={roboto.className}>Next Js V13</h2>
      <Link href={"/about"}>link1</Link>
      <Link href={"/about?name=baktar&surname=Asadov"}>link2</Link>
      <Link
        href={{
          pathname: "/about",
          query: { name: "baktar", surname: "Asadov" },
        }}
      >
        link3
      </Link>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/FRA-ARG_%2811%29_-_Paul_Pogba_%28cropped_2%29.jpg"
        alt="Picture of the author"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Page;
