import Image from "next/legacy/image";

const links = ['Traffic', 'Weather', 'Rideshare', 'Carpool', 'Send', 'Donate', 'Videos'];

const Index = () => {
    return (
        <div className="w-full bg-white">

            <div className="max-w-7xl mx-auto flex flex-col gap-7 md:gap-13 items-center justify-center py-10 md:py-20">
                <div className="w-full flex justify-center">
                    <Image src={'/copilot-club-sign.png'} width={300} height={100} className="object-contain"/>
                </div>
                <div className="flex flex-wrap justify-between w-full max-w-7xl px-10">
                    {
                        links.map((itm, idx) => <span key={idx} className="text-[#81694f] text-2xl lg:text-3xl font-bold">{itm}</span>)
                    }
                </div>
                <div className="w-full flex items-center justify-center">
                    <button className="rounded-[50px] px-10 py-5 bg-[#800000] font-bold text-[#FFFFFF] text-1xl md:text-2xl">Passenger Distraction Alert</button>
                </div>
            </div>

            <div className="w-full bg-[#081cff] mb-20">
                <div className="w-full book-gradient" >
                    <div className="max-w-7xl grid grid-cols-2 mx-auto">
                        <div className="h-full min-h-[500px] flex items-center justify-center">
                            <div className="bg-[#fafafa] pt-3 rounded-[8px] shadow-md">
                                <Image src={'/safety-manual-book.jpg'} width={306} height={370} className="object-contain"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-white pt-[20%] px-3 lg:px-7">
                            <h2 className="font-bold text-2xl md:text-4xl">
                                INTERNATIONAL SAFETY ALERT
                            </h2>
                            <p className="text-xl">
                                There is a global distracted driving, walking, and screen addiction crisis.
                                Over a million people die in auto accidents every year with many more seriously injured!
                                Today there is a choice, eyePhone or EarPhone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mb-10 bg-[#F5F5F5] rounded-[14px] grid grid-cols-2 p-3 ">

                {/* ------copilot -------------- */}
                <div className="flex flex-col items-start justify-center gap-5 p-8">
                    <a className="flex items-center gap-4">
                        <div className="flex items-center">
                            <Image src='/copilot-club.png' className="object-cover" width={35} height={35} />
                        </div>
                        <h1 className="text-[#2563eb] font-bold text-lg md:text-3xl">Copilot Club.</h1>
                    </a>
                    {/* <h1 className="text-[#2563eb] font-bold text-lg md:text-3xl">Copilot Club.</h1> */}
                    <h1 className="font-bold text-[#27272a] text-2xl md:text-4xl">The Future of Safer Driving Through Passenger Awareness</h1>
                    <p className="text-[#27272a] text-xl">
                        The <strong>Copilot Club</strong> teaches passengers to be <strong>helpful, not distracting</strong>. 
                        Join for free by reading the <strong>Copilot Driver License</strong> and sharing safety tips.</p>
                </div>
                <div className="flex justify-center items-bottom">
                    <Image width={400} height={500} src={'/copilot-diver-licence.png'} className="object-contain"/>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mb-10 bg-[#F5F5F5] rounded-[14px] grid grid-cols-2 p-3 ">

                {/* ---------passenger alert ----------- */}
                <div className="flex justify-center items-bottom">
                    <Image width={400} height={400} src={'/passenger-alert.png'} className="object-contain"/>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 p-8">
                    <a className="flex items-center gap-4">
                        <div className="flex items-center">
                            <Image src='/passenger-alert.png' width={35} height={35} />
                        </div>
                        <h1 className="text-[#dc2626] font-bold text-lg md:text-3xl">Passenger Alert.</h1>
                    </a>
                    <h1 className="font-bold text-[#27272a] text-2xl md:text-4xl">
                        How You Can Prevent Dangerous Driving Distractions
                    </h1>
                    <p className="text-[#27272a] text-xl">
                        A passenger seeking <strong>eye contact</strong> or talking too much can be risky. 
                        A trained <strong>Copilot</strong> knows when to stay quiet and when to assist.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mb-10 bg-[#F5F5F5] rounded-[14px] grid grid-cols-2 p-3 ">

                {/* -------- rideshare & carpooling ------------- */}
                <div className="flex flex-col items-start justify-center gap-5 p-8">
                    <a className="flex items-center gap-4">
                        <div className="flex items-center">
                            <Image src='/carpool-ico.png' width={35} height={35} />
                        </div>
                        <h1 className="text-[#16a34a] font-bold text-lg md:text-3xl">Rideshare & Carpooling.</h1>
                    </a>
                    <h1 className="font-bold text-[#27272a] text-2xl md:text-4xl">
                        Making Every Ride Safer with an Extra Set of Eyes
                    </h1>
                    <p className="text-[#27272a] text-xl">
                        A <strong>Copilot passenger</strong> helps reduce distractions, 
                        assists with navigation, and promotes responsible rideshare experiences.
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <Image width={500} height={300} src={'/carpool.png'} className="object-cover"/>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mb-10 bg-[#F5F5F5] rounded-[14px] grid grid-cols-2 p-3 ">

                {/*  ------- world safety drive ------------------ */}
                <div className="flex justify-center items-center">
                    <Image width={300} height={300} src={'/SWSD_logo.png'} className="object-cover"/>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 p-8">
                    <a className="flex items-center gap-4">
                        <div className="flex items-center">
                            <Image src='/drive_safety.png' width={35} height={35} />
                        </div>
                        <h1 className="text-[#f59e0b] font-bold text-lg md:text-3xl">World Safety Drive.</h1>
                    </a>
                    <h1 className="font-bold text-[#27272a] text-2xl md:text-4xl">
                        A Global Movement for Distraction-Free Roads
                    </h1>
                    <p className="text-[#27272a] text-xl">
                        The <strong>ASF World Safety Drive</strong> promotes road concentration 
                        by encouraging drivers and passengers to work together for safer streets.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Index;