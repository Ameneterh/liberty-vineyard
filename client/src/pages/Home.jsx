import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { GiTeacher, GiPrayer, GiClockwork } from "react-icons/gi";
import { MdOutlineDateRange, MdOutlineDescription } from "react-icons/md";
import { FaPlaceOfWorship } from "react-icons/fa";
import herocover from "/homehero.png";
import ImpactMission from "../components/ImpactMission";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div
        className="h-[500px] sm:min-h-screen justify-center flex flex-col py-8 px-4 sm:px-20 gap-10 text-slate-300"
        style={{
          backgroundImage: `url(${herocover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="uppercase sm:text-2xl">welcome to our church</p>
        <h1 className="uppercase text-2xl sm:text-6xl font-extrabold">
          become a part of
          <span className="uppercase text-2xl sm:text-5xl font-extrabold text-yellow-300">
            <Typewriter
              options={{
                strings: "our vibrant community!",
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <Link
          to="/about"
          className="text-md sm:text-xl text-blue-600 hover:underline underline-offset-8"
        >
          Learn More ...
        </Link>
      </div>
      <div className="flex flex-col w-full bg-gray-50 dark:bg-slate-800 p-4 sm:p-20">
        <h1 className="text-2xl sm:text-5xl text-center uppercase font-semibold mb-10">
          a church that's relevant
        </h1>

        <div className="flex flex-wrap gap-8 justify-center">
          {/* about us */}
          <div className="flex items-center justify-center w-full sm:w-80 p-4 border rounded-xl shadow-lg">
            <div className="flex flex-col w-full  gap-4">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <h1 className="uppercase text-2xl font-bold">about us</h1>
              <p className="line-clamp-5">
                Liberty Vineyard Ministry, a relatively young but vibrant and
                growing church has a publishing arm (Vineyard Publications) in
                addition to the traditional role of dispensing the Word which
                saves the sinner, the oppressed, the bonded etc . This arm of
                the Ministry has to its credit several published books (details
                in BOOKS/MESSAGES), a bi-monthly digest (details in VINEYARD
                VOICE) as well as several messages on CD (details in
                BOOKS/MESSAGES) and many more to come.
              </p>
              <Button
                className="uppercase"
                outline
                gradientDuoTone="purpleToPink"
                onClick={() => navigate("/about")}
              >
                know more
              </Button>
            </div>
          </div>

          {/* get involved */}
          <div className="flex items-center justify-center w-full sm:w-80 p-4 border rounded-xl shadow-lg">
            <div className="flex flex-col w-full  gap-4">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <h1 className="uppercase text-2xl font-bold">get involved</h1>
              <p className="">
                The easy and more reliable means to get involved is by joining
                any of our churches to fellowship constantly and also
                participate in church activities and commitments.
              </p>
              <Button
                className="uppercase"
                outline
                gradientDuoTone="purpleToPink"
                onClick={() => navigate("/about")}
              >
                find out how
              </Button>
            </div>
          </div>

          {/* giving back */}
          {/* <div className="flex items-center justify-center w-full sm:w-80 p-4 border rounded-xl shadow-lg">
            <div className="flex flex-col w-full  gap-4">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <h1 className="uppercase text-2xl font-bold">giving back</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt tempore accusantium recusandae est aspernatur eaque
                eligendi, cupiditate, voluptate fugiat deleniti repellat
                eveniet. Delectus quo quis quidem nostrum illum sit id.
              </p>
              <Button
                className="uppercase"
                outline
                gradientDuoTone="purpleToPink"
              >
                find details
              </Button>
            </div>
          </div> */}
        </div>
      </div>

      {/* 3rd frame sharing christ love */}
      <div className="flex flex-col w-full dark:bg-gray-600 bg-slate-200 p-4 sm:p-20">
        <h1 className="text-2xl sm:text-5xl text-center uppercase font-semibold mb-10">
          sharing christ's love and compassion
        </h1>
        <p className="text-center sm:text-xl">
          Join us and partner with us as we impact our communities through our
          monthly
        </p>
        <h1 className="sm:text-3xl text-center font-extrabold">
          IMPACT MISSION IN YOUR NEIGHBOURHOOD
        </h1>

        <Button
          outline
          gradientDuoTone="purpleToBlue"
          className="my-6 w-48 mx-auto"
        >
          <Link to="/impact-missions" className="w-full">
            READ MORE ...
          </Link>
        </Button>

        <div className="flex flex-wrap gap-8 justify-center mt-6 relative">
          <ImpactMission text="Miraculous Healing" />
          <ImpactMission text="Free Medical Outreach" />
          <ImpactMission text="Welfare Packages" />
        </div>
      </div>

      {/* 4th join our services */}
      <div className="flex flex-col w-full bg-gray-50 dark:bg-slate-800 p-4 sm:p-20">
        <h1 className="text-2xl sm:text-5xl text-center uppercase font-semibold mb-10">
          join our services
        </h1>
        <p className="text-center sm:text-xl">
          Be a part of our life transforming services
        </p>

        <div className="flex flex-col md:flex-row gap-8 mt-6 relative">
          {/* for headquarter branch */}
          <div className="flex gap-5 flex-col flex-1">
            <h1 className="font-extrabold text-2xl flex items-center gap-2">
              For the Headquarter Church{" "}
              <div className="h-[1px] flex-1 bg-gray-500"></div>
            </h1>

            {/* Sunday Service */}
            <div className="flex flex-col w-full p-4 border rounded-xl shadow-lg">
              <div className="flex flex-col w-full gap-4">
                <h1 className="uppercase text-2xl font-bold flex items-end gap-3">
                  <FaPlaceOfWorship className="w-10 h-10" />
                  Sunday Power Service
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 flex-1">
                    <p className="flex items-center gap-2">
                      <MdOutlineDateRange className="h-4 w-4" />
                      Every Sunday
                    </p>
                    <p className="flex items-center gap-2">
                      <GiClockwork className="h-4 w-4" />
                      8.00 am - 10.00 am
                    </p>
                  </div>
                  <p className="flex items-start gap-2 w-full flex-1">
                    <MdOutlineDescription className="h-4 w-4" />
                    <span className="flex flex-1">
                      A time to worship the Lord, feed on His Word and enjoy
                      communion and fellowship with other believers.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* army of the Lord */}
            <div className="flex items-center justify-center w-full p-4 border rounded-xl shadow-lg">
              <div className="flex flex-col w-full gap-4">
                <h1 className="uppercase text-2xl font-bold flex items-end gap-3">
                  <GiTeacher className="w-10 h-10" />
                  Time of Worship
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 flex-1">
                    <p className="flex items-center gap-2">
                      <MdOutlineDateRange className="h-4 w-4" />
                      Every Wednesday
                    </p>
                    <p className="flex items-center gap-2">
                      <GiClockwork className="h-4 w-4" />
                      5.30 pm - 7.00 pm
                    </p>
                  </div>
                  <p className="flex items-start gap-2 w-full flex-1">
                    <MdOutlineDescription className="h-4 w-4" />
                    <span className="flex flex-1">
                      A time of intense worship and study of the Word of God.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* hour of prayer */}
            <div className="flex items-center justify-center w-full p-4 border rounded-xl shadow-lg">
              <div className="flex flex-col w-full gap-4">
                <h1 className="uppercase text-2xl font-bold flex items-end gap-3">
                  <GiPrayer className="w-10 h-10" />
                  hour of prayer
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 flex-1">
                    <p className="flex items-center gap-2">
                      <MdOutlineDateRange className="h-4 w-4" />
                      Every Friday
                    </p>
                    <p className="flex items-center gap-2">
                      <GiClockwork className="h-4 w-4" />
                      5.00 pm - 6.00 pm
                    </p>
                  </div>
                  <p className="flex items-start gap-2 w-full flex-1">
                    <MdOutlineDescription className="h-4 w-4" />
                    <span className="flex flex-1">
                      One hour of intense communion with the Father in prayer.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* for agyeita branch */}
          <div className="flex gap-5 flex-col flex-1">
            <h1 className="font-extrabold text-2xl flex items-center gap-2">
              For the Headquarter Church{" "}
              <div className="h-[1px] flex-1 bg-gray-500"></div>
            </h1>

            {/* Sunday Service */}
            <div className="flex flex-col w-full p-4 border rounded-xl shadow-lg">
              <div className="flex flex-col w-full gap-4">
                <h1 className="uppercase text-2xl font-bold flex items-end gap-3">
                  <FaPlaceOfWorship className="w-10 h-10" />
                  Sunday Power Service
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 flex-1">
                    <p className="flex items-center gap-2">
                      <MdOutlineDateRange className="h-4 w-4" />
                      Every Sunday
                    </p>
                    <p className="flex items-center gap-2">
                      <GiClockwork className="h-4 w-4" />
                      8.00 am - 10.00 am
                    </p>
                  </div>
                  <p className="flex items-start gap-2 w-full flex-1">
                    <MdOutlineDescription className="h-4 w-4" />
                    <span className="flex flex-1">
                      A time to worship the Lord, feed on His Word and enjoy
                      communion and fellowship with other believers.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* hour of prayer */}
            <div className="flex items-center justify-center w-full p-4 border rounded-xl shadow-lg">
              <div className="flex flex-col w-full gap-4">
                <h1 className="uppercase text-2xl font-bold flex items-end gap-3">
                  <GiPrayer className="w-10 h-10" />
                  hour of prayer
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 flex-1">
                    <p className="flex items-center gap-2">
                      <MdOutlineDateRange className="h-4 w-4" />
                      Every Tuesday
                    </p>
                    <p className="flex items-center gap-2">
                      <GiClockwork className="h-4 w-4" />
                      5.00 pm - 6.00 pm
                    </p>
                  </div>
                  <p className="flex items-start gap-2 w-full flex-1">
                    <MdOutlineDescription className="h-4 w-4" />
                    <span className="flex flex-1">
                      One hour of intense communion with the Father in prayer.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* army of the Lord */}
            <div className="flex items-center justify-center w-full p-4 border rounded-xl shadow-lg">
              <div className="flex flex-col w-full gap-4">
                <h1 className="uppercase text-2xl font-bold flex items-end gap-3">
                  <GiTeacher className="w-10 h-10" />
                  Time of Worship
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 flex-1">
                    <p className="flex items-center gap-2">
                      <MdOutlineDateRange className="h-4 w-4" />
                      Every Thursday
                    </p>
                    <p className="flex items-center gap-2">
                      <GiClockwork className="h-4 w-4" />
                      5.30 pm - 7.00 pm
                    </p>
                  </div>
                  <p className="flex items-start gap-2 w-full flex-1">
                    <MdOutlineDescription className="h-4 w-4" />
                    <span className="flex flex-1">
                      A time of intense worship and study of the Word of God.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
