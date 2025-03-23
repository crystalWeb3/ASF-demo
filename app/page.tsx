import Image from "next/legacy/image";
import Header from '@/components/Header';
import Maincontent from '@/components/Maincontent';
import Navbar from '@/components/Navbar';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function Home() {
  return (
    <div className="bg-[#fafafa]">
      <Navbar />
      {/* <nav className="max-w-4xl mx-auto mb-5">
        <a className="w-full flex justify-center my-10">
          <Image src='/Screenshot_47.png' width={450} height={45} />
        </a>
        <div className="flex gap-auto justify-between w-full">
          {nav_items.map((itm, idx) => <span key={idx} className="cursor-pointer text-[#000080]">{itm}</span>)}
        </div>
      </nav> */}
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Header />
        <Maincontent />
      </main>
      <footer className="bg-[#7d654b] w-full py-[30px]">
        <p className="text-white text-center w-full">Copyright, © carsafe.org 2023-2024.  All rights reserved.</p>
        <p className="text-white text-center w-full">Automobile Safety Foundation</p>
        <p className="text-white text-center w-full">4231 Balboa Avenue, Suite 584, San Diego, CA 92117</p>
      </footer>
    </div>
  );
}
