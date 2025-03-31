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
          Warszawa - nasza stolica narodowa
        </h1>
        <h2 className="mt-[50px] text-2xl ">Wstęp</h2>
        <p>
          Warszawa, stolica Polski, to miasto o fascynującej historii,
          dynamicznie rozwijającej się kulturze i unikalnym charakterze. Po
          niemal całkowitym zniszczeniu podczas II wojny światowej, miasto
          przeszło imponującą odbudowę, łącząc nowoczesność z zachowanymi
          śladami przeszłości.
        </p>
        <Image
          width={650}
          height={650}
          alt="Zdjęcie warszawy"
          src={'/Warszawa.png'}
          className="rounded-[5px] mt-[50px]"
        ></Image>
        <h2 className="mt-[50px] text-2xl ">Historia i Architektóra</h2>
        <p>
          Warszawa posiada bogatą historię, której świadectwem są zarówno
          zabytkowe dzielnice, jak i nowoczesne dzielnice biznesowe. Stare
          Miasto, odbudowane po wojnie i wpisane na listę światowego dziedzictwa
          UNESCO, zachwyca malowniczymi uliczkami, kolorowymi kamienicami i
          historycznymi placami. Współczesna architektura, reprezentowana przez
          nowoczesne biurowce i centra handlowe, kontrastuje z historycznym
          dziedzictwem, tworząc unikalny pejzaż miejski.
        </p>
        <h2 className="mt-[50px] text-2xl ">Historia i Architektóra</h2>
        <p>
          Warszawa to centrum kulturalne Polski, oferujące liczne teatry, muzea
          i galerie sztuki. Muzeum Powstania Warszawskiego, Zamek Królewski czy
          Muzeum Narodowe to tylko niektóre z instytucji, które przybliżają
          historię i kulturę kraju. Festiwale muzyczne, teatralne i filmowe
          sprawiają, że miasto tętni życiem kulturalnym przez cały rok.
        </p>
        <Image
          width={650}
          height={650}
          alt="Zdjęcie warszawy"
          src={'/Warszawa2.jpg'}
          className="rounded-[5px] mt-[50px]"
        ></Image>
        <h2 className="mt-[50px] text-2xl ">Gastronomia i Styl Życia</h2>
        <p>
          Mieszkańcy Warszawy cenią sobie różnorodność kulinarną. Restauracje
          serwują zarówno tradycyjną polską kuchnię, jak i dania inspirowane
          kuchniami świata. Kawiarnie i bary, często usytuowane w klimatycznych
          kamienicach, tworzą przyjazną atmosferę, sprzyjającą spotkaniom
          towarzyskim i twórczym dyskusjom.
        </p>
      </div>
    </div>
  );
};

export default Page;
