import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Link
        href={'/'}
        className="absolute top-[25px] left-[50px] bg-[#5046e6] p-[10px] rounded-[5px] text-white shadow-2xl hover:bg-[#4338ca] transition-all duration-300 ease-in-out"
      >
        <ArrowLeft />
      </Link>
      <div className="w-[600px]   shadow-2xl p-[50px] ">
        <h1 className="mt-[50px] text-3xl font-[400] text-center">
          Paryż – Miasto Światła, Kultury i Historii
        </h1>
        <h2 className="mt-[50px] text-2xl ">Wstęp</h2>
        <p>
          Dania, kraj położony w północnej Europie, to miejsce, gdzie historia,
          kultura i nowoczesność współistnieją w harmonii. Znana z pięknych
          krajobrazów, bogatej tradycji i wysokiej jakości życia, Dania
          przyciąga zarówno turystów, jak i inwestorów.
        </p>
        <Image
          width={650}
          height={650}
          alt="Zdjęcie kopenchagi"
          src={'/Kopenhaga.png'}
          className="rounded-[5px] mt-[50px]"
        ></Image>
        <h2 className="mt-[50px] text-2xl ">Historia i Geografia</h2>
        <p>
          Dania ma głębokie korzenie historyczne sięgające czasów Wikingów,
          które w znaczący sposób wpłynęły na kształtowanie się kultury tego
          regionu. Kraj rozciąga się głównie na Półwyspie Jutlandzkim oraz
          licznych wyspach, z których największą jest Zelanda – miejsce, gdzie
          znajduje się stolica kraju, Kopenhaga. Malownicze wybrzeża, liczne
          jeziora oraz zielone, zróżnicowane krajobrazy sprawiają, że Dania
          oferuje unikalne połączenie tradycji i natury.
        </p>
        <h2 className="mt-[50px] text-2xl ">Kultura i Styl Życia</h2>
        <p>
          Kultura duńska jest nieodłącznie związana z ideą "hygge", czyli
          przytulności, komfortu i bliskości w codziennym życiu. Duńczycy
          przykładają dużą wagę do równowagi między życiem zawodowym a
          prywatnym, co przekłada się na wysoki poziom życia społecznego i
          efektywny system opieki społecznej. Dania słynie także z dbałości o
          środowisko – proekologiczne rozwiązania i promowanie zrównoważonego
          rozwoju to elementy, które wyróżniają ten kraj na tle innych państw.
        </p>
        <Image
          width={650}
          height={650}
          alt="Zdjęcie kopenchagi"
          src={'/Kopenchaga2.jpg'}
          className="rounded-[5px] mt-[50px]"
        ></Image>
        <h2 className="mt-[50px] text-2xl ">Gastronomia i Tradycje</h2>
        <p>
          Duńska kuchnia, choć prosta, cieszy się międzynarodowym uznaniem
          dzięki świeżym, wysokiej jakości składnikom i tradycyjnym recepturom.
          Popularnym daniem są smørrebrød – otwarte kanapki z różnorodnymi
          dodatkami, które doskonale oddają smak regionu. W ostatnich latach
          nowa kuchnia nordycka zdobyła uznanie na światowych scenach
          kulinarnych, łącząc tradycyjne smaki z nowoczesnymi technikami
          kulinarnymi, co jeszcze bardziej wzmacnia reputację Danii jako kraju
          innowacyjnego w gastronomii.
        </p>
      </div>
    </div>
  );
};

export default Page;
