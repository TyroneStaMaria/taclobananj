import Head from "next/head";
import Link from "next/link";
import React from "react";
import HeroCarousel from "../../../components/templates/Pilmico/HeroCarousel";
const Pilmico = () => {
  const links = [
    {
      name: "Feeds",
      link: "/products/pilmico/feeds",
    },
    {
      name: "Flour",
      link: "/products/pilmico/flour",
    },
    {
      name: "Pet Food",
      link: "/products/pilmico/pet-food",
    },
  ];
  return (
    <div>
      <Head>
        <title>Pilmico | Tacloban ANJ</title>
      </Head>
      <HeroCarousel />
      <section>
        <h1 className="text-center">Pilmico Products</h1>
        <div className="container mx-auto">
          <div className="flex justify-center">
            {links.map((item, index) => {
              return (
                <Link key={index} href={item.link} passHref>
                  <div className="bg-body text-center mx-3 w-full cursor-pointer lg:w-1/3">
                    <h3>{item.name}</h3>
                  </div>
                </Link>
              );
            })}
            {/* <Link href="/products/pilmico/feeds" >Feeds</Link>
            <Link href="/products/pilmico/flour">Flour</Link>
            <Link href="/products/pilmico/pet-food">Pet Food</Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pilmico;
