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
          Wiedeń - Miasto Pełne Historii i Muzyki
        </h1>
        <h2 className="mt-[50px] text-2xl ">Wstęp</h2>
        <p>
          Wiedeń, stolica Austrii, to miasto o bogatej historii, kulturze i
          tradycjach. Znane ze swojego cesarskiego dziedzictwa, łączy w sobie
          przepych dawnych epok z nowoczesną elegancją.
        </p>
        <Image
          width={650}
          height={650}
          alt="Zdjęcie paryża"
          src={'/Viennia.png'}
          className="rounded-[5px] mt-[50px]"
        ></Image>
        <h2 className="mt-[50px] text-2xl ">Historia i Architektóra</h2>
        <p>
          Wiedeń był rezydencją cesarzy Habsburgów, co pozostawiło trwały ślad w
          postaci imponujących pałaców, takich jak Pałac Schönbrunn czy Hofburg.
          Architektura miasta to połączenie stylów – od barokowych budowli po
          nowoczesne inwestycje.
        </p>
        <h2 className="mt-[50px] text-2xl ">Muzyka i Kultura</h2>
        <p>
          Miasto ma ogromne znaczenie muzyczne – związane jest z takimi
          kompozytorami jak Mozart, Beethoven czy Strauss. Wiedeńska Opera i
          liczne sale koncertowe przyciągają melomanów z całego świata, czyniąc
          z Wiednia prawdziwą stolicę muzyki klasycznej.
        </p>
        <Image
          width={650}
          height={650}
          alt="Zdjęcie paryża"
          src={'/Viennia2.jpg'}
          className="rounded-[5px] mt-[50px]"
        />
        <h2 className="mt-[50px] text-2xl ">Gastronomia i Styl Życia</h2>
        <p>
          Wiedeń słynie także z tradycyjnej kuchni, oferując przysmaki takie jak
          Wiener Schnitzel czy Sachertorte. Kawiarnie, które zdobią ulice
          miasta, są miejscem spotkań, gdzie można poczuć niepowtarzalny klimat
          wiedeńskiej kultury.
        </p>
      </div>
    </div>
  );
};

export default Page;
