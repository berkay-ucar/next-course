import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // return (
  //   <main>
  //     <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
  //     <Link href="/users">Users</Link>
  //     <ProductCard />
  //   </main>
  // );

  return (
    <main>
      <Image src={coffee} alt="coffee"></Image>
    </main>
  );
}
