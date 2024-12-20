"use client";

import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
import HeavyComponent from "./components/HeavyComponent";

export default function Home() {
  // const session = await getServerSession(authOptions);
  // return (
  //   <main>
  //     <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
  //     <Link href="/users">Users</Link>
  //     <ProductCard />
  //   </main>
  // );

  return (
    <>
      <h1>Hello World</h1>
      <HeavyComponent />
      <main className="relative h-screen">
        {/* <Image src={coffee} alt="coffee"></Image> */}
        {/* <Image
        src="https://bit.ly/react-cover"
        alt="coffee"
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw"
        quality={100} //75
        priority
      ></Image> */}
      </main>
    </>
  );
}
