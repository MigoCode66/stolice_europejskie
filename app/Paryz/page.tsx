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
          Paryż to nie tylko stolica Francji, ale także jeden z najważniejszych
          ośrodków kultury, sztuki, mody i historii na świecie. Miasto, które
          często nazywane jest "Miastem Światła", zachwyca swoją architekturą,
          bogatym dziedzictwem historycznym oraz niezwykłym klimatem, który
          przyciąga miliony turystów z każdego zakątka globu. W niniejszym
          referacie przyjrzymy się bliżej historii Paryża, jego najważniejszym
          zabytkom, kulturze, roli w sztuce, gastronomii, a także współczesnemu
          życiu mieszkańców i turystów.
        </p>
        <Image
          width={650}
          height={650}
          alt="Zdjęcie paryża"
          src={'/paris.png'}
          className="rounded-[5px] mt-[50px]"
        ></Image>
        <h2 className="mt-[50px] text-2xl ">Historia Paryża</h2>
        <p>
          Korzenie Paryża sięgają czasów starożytnych, kiedy to na terenach
          dzisiejszego miasta osiedlili się celtyccy Parisii. Już w I wieku
          p.n.e. miasto zaczęło odgrywać strategiczną rolę dzięki swojemu
          położeniu nad Sekwaną, co umożliwiało rozwój handlu i komunikacji. W
          średniowieczu Paryż stał się stolicą Królestwa Francji, a wraz z
          rozwojem administracyjnym i gospodarczym zyskał miano centrum
          intelektualnego i kulturalnego. Renesans przyniósł nowe idee i zmiany
          w architekturze, co znalazło odzwierciedlenie w budowach sakralnych i
          świeckich. Następnie, rewolucja francuska oraz późniejsze epoki –
          zwłaszcza XIX wiek – na trwałe ukształtowały współczesny wizerunek
          miasta. Wielu uczonych i artystów, takich jak Victor Hugo, Émile Zola
          czy Claude Monet, pozostawiło w Paryżu niezatarty ślad, czyniąc go
          miejscem, gdzie historia i kultura splatają się w jedną opowieść.
        </p>
        <h2 className="mt-[50px] text-2xl ">Zabytki i atrakcje</h2>
        <p>
          Paryż to kolekcja najbardziej rozpoznawalnych budowli na świecie.
          Jednym z symboli miasta jest Wieża Eiffla, zbudowana z okazji
          Światowej Wystawy w 1889 roku. Początkowo budowla budziła
          kontrowersje, jednak z czasem stała się jednym z najważniejszych
          punktów orientacyjnych, który przyciąga turystów swoją monumentalną
          sylwetką i niesamowitymi widokami na panoramę miasta. Katedra
          Notre-Dame, będąca przykładem gotyckiej architektury, zachwyca nie
          tylko swoim wyglądem, ale również bogactwem zdobień oraz historią,
          która obejmuje zarówno okres średniowiecza, jak i współczesne próby
          rekonstrukcji po pożarze w 2019 roku. Luwr, jeden z największych i
          najważniejszych muzeów sztuki na świecie, mieści w swoich zbiorach
          arcydzieła takie jak Mona Lisa czy Wenus z Milo. Spacerując ulicami
          Paryża, nie sposób nie zauważyć licznych pałaców, kościołów, mostów i
          placów, które stanowią świadectwo bogatej historii miasta.
        </p>
        <Image
          src={'/Luwr.png'}
          alt="zdjęcie paryża"
          width={650}
          height={650}
          className="rounded-[5px] mt-[50px]"
        />
        <h2 className="mt-[50px] text-2xl ">Kultura i sztuka</h2>
        <p>
          Paryż od wieków przyciągał artystów, pisarzy i myślicieli z całego
          świata. Miasto było miejscem spotkań takich osobistości jak Pablo
          Picasso, Ernest Hemingway, czy Virginia Woolf. Kultura paryska jest
          niezwykle różnorodna i dynamiczna, co znajduje odzwierciedlenie w
          licznych festiwalach, wystawach i wydarzeniach artystycznych. Paryż to
          także centrum mody, gdzie odbywają się prestiżowe pokazy i prezentacje
          najnowszych kolekcji znanych projektantów. Ulice miasta tętnią życiem,
          a kawiarnie i galerie sztuki stają się miejscem inspiracji i twórczej
          wymiany myśli.
        </p>
      </div>
    </div>
  );
};

export default Page;
