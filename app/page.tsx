'use client';

import { BoxReveal } from '@/components/magicui/box-reveal';
import { Lens } from '@/components/magicui/lens';
import Image from 'next/image';
import Link from 'next/link';
import Data from '@/Data.json';
import { useEffect, useState } from 'react';

export default function Home() {
  const [country, setCountry] = useState(Data.France);
  return (
    <div className="flex  align-center flex-col h-screen">
      <div className="flex w-full justify-center mt-[50px]">
        <BoxReveal>
          <h1 className="font-[600] text-[54px] text-center">
            Podróże po stolicah europy
          </h1>
        </BoxReveal>
      </div>
      <div className="flex h-full w-full mt-[50px] flex-wrap">
        <section className="flex-1/2 flex-col flex items-center gap-[30px]">
          <BoxReveal>
            <h2 className="text-[50px] font-[500] mt-[90px]">{country.name}</h2>
          </BoxReveal>
          <BoxReveal>
            <p className="mt-[20px] text-[20px]  w-[550px] text-w">
              {country.descripton}
            </p>
          </BoxReveal>
          <Link
            href={country.href}
            className="pt-[10px] pb-[10] pl-[20px] pr-[20px] bg-[#5046e6] text-white rounded-[5px] shadow-2xl underline hover:bg-[#4338ca] transition-all duration-300 ease-in-out"
          >
            Dowiedz się więcej
          </Link>
          <ul className="flex list-image-none w-[500px] justify-start mt-[60px]  gap-[20px] mb-[50px] flex-wrap">
            {Object.entries(Data).map(([key, value]) => (
              <li
                key={key}
                className="shadow-2xl"
                onClick={() => {
                  setCountry(value);
                }}
              >
                <Image
                  src={value.flag}
                  width={60}
                  height={60}
                  alt={value.name}
                  className="rounded-[5px] cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="flex-1/2 flex justify-center items-center relative">
          <BoxReveal>
            <Lens>
              <Image
                src={country.image}
                alt={country.name}
                width={500}
                height={500}
                className="rounded-[20px] shadow-2xl"
              />
            </Lens>
          </BoxReveal>
          <div className="w-[500px] h-[500px] absolute bg-[#5046e6] rounded-[20px] left-[calc(50%-220px)] top-[calc(50%-220px)] shadow-2xl z-[-1] "></div>
        </section>
      </div>
    </div>
  );
}
