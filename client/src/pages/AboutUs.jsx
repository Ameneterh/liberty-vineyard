import React from "react";
import heroImage from "/AboutUsHero.png";
import joyFulfillment from "/joy&fulfilment.png";
import sharedValues from "/shared-values.png";
import charityEvents from "/charity-events.png";
import allWelcome from "/all-welcome.png";
import AboutComponents from "../components/AboutComponents";
import Typewriter from "typewriter-effect";
import about_us from "../resources/StaticFiles";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen">
      {/* <div
        className="w-full h-[400px] bg-cover bg-no-repeat flex items-center px-4 md:px-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <p className="uppercase text-2xl font-bold dark:text-gray-900">
          ABOUT US
          <span className="block text-5xl font-extrabold">
            <Typewriter
              options={{
                strings: "Serving the world around us",
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
      </div> */}

      <div className="w-full">
        <div className="w-full max-w-7xl mx-auto p-3 md:p-10 flex flex-col mb-10 md:mb-20">
          <h2 className="uppercase text-2xl md:text-4xl font-extrabold text-center w-full mb-3 md:mb-16">
            welcome to our church
          </h2>
          <div className="w-full flex flex-wrap justify-between gap-6">
            <div className="w-full md:w-[30%] border rounded-lg p-3 shadow-md flex flex-col gap-4">
              <p className="text-xl">OUR MISSION</p>
              <h3 className="font-extrabold text-2xl">
                STRIVING FOR A BETTER TOMORROW
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <div className="w-full md:w-[30%] border rounded-lg p-3 shadow-md flex flex-col gap-4">
              <p className="text-xl">OUR VISION</p>
              <h3 className="font-extrabold text-2xl">
                STRIVING FOR A BETTER TOMORROW
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <div className="w-full md:w-[30%] border rounded-lg p-3 shadow-md flex flex-col gap-4">
              <p className="text-xl">WHAT WE DO</p>
              <h3 className="font-extrabold text-2xl">
                BRINGING PEACE AND JOY TO THE WORLD
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
          </div>
        </div>

        {/* How it began */}
        <div className="bg-slate-200 dark:bg-slate-800 w-full  p-3 md:p-10 flex flex-col">
          <h2 className="uppercase text-2xl md:text-4xl font-extrabold text-center w-full mb-3 md:mb-16">
            How it all began
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col text-justify gap-4 md:gap-6">
            <p>
              While in a fast in 1990, this vision came to me at about 12.00
              noon.
            </p>
            <p>
              I saw a multitude of people, old and young running towards one
              direction like in a political rally. At the end of the road was a
              tunnel which opened into a river, as the people got to the end of
              the tunnel, they were forced into the river. Those who tried to
              turn back could not because of the pressure of the multitude from
              behind. I then asked the person who showed me the scene what it
              meant; he told me that, that was how people go to hell daily while
              in search of the right way. He then said to me; “Go and show them
              the right way.” There was a winding road by the side which went
              up-hill with about three people in it. That road led to a throne
              with a king on his seat. The man said, that was the right way and
              not the one that leads to the tunnel.
            </p>
            <p>
              After the first scene, I saw an animal like a lion lie in a beach.
              It was a big lion, as big as a 200-capacity hall. The lion would
              open its mouth very wide and allow curious people to enter and
              examine the things in the mouth. Whenever the people got many, it
              would swallow them up and open its mouth again for another set to
              enter. The person standing by said to me; “This is how curious
              people play with sin until they are trapped.” He asked me to go
              and warn them and send the beast away.
            </p>
            <p>
              The last scene came with a multitude looking up to God in an
              attitude of a request but with none of them making a verbal
              request. The man who was with me told me that the people have a
              need but they do not know how to communicate with God. He then
              asked me to go and teach them.
            </p>
            <p>
              This vision concluded with the man taking me to the King on the
              throne where my wife and I were prayed for and a crown was placed
              on my head. I wrote this down in a diary but could not start the
              work until many years later.
            </p>
            <p>
              With this explicit, unambiguous and undeniable call from God
              Almighty, Liberty Vineyard Ministry was born. The Ministry which
              started on 13th September 1998 has its headquarters in Kaduna at
              No 1 Liberty Street Karatudu – Extension, Gonin-Gora, Kaduna
              South, Kaduna, North-West Nigeria.
            </p>
            <p>
              Liberty Vineyard Ministry, a relatively young but vibrant and
              growing church has a publishing arm (Vineyard Publications) in
              addition to the traditional role of dispensing the Word which
              saves the sinner, the oppressed, the bonded etc . This arm of the
              Ministry has to its credit several published books (details in
              BOOKS/MESSAGES), a bi-monthly digest (details in VINEYARD VOICE)
              as well as several messages on CD (details in BOOKS/MESSAGES) and
              many more to come.
            </p>
            <p>
              Liberty Vineyard Ministry is made up of three departments for ease
              of administration, effective impacting/impartation of lives. These
              departments are The Youth Fellowship; The Women Fellowship; and
              The Children’s Department.
            </p>
            <p>
              As a member of Liberty Vineyard Ministry, one has the unique
              opportunity and privilege to serve God in at least one of these
              activity groups: The Battle Axe; Vineyard Singers; Sanctuary
              Keepers; Ushering; and the Children’s Teachers.
            </p>
            <p>
              Here at Liberty Vineyard Ministry, we seek to liberate many (if
              not all) from their sin(s); however, as a church that believes in
              the entirety of the Bible (Total Gospel), we believe and has been
              confirmed by the Almighty that in Total Gospel, All Things Are
              Possible.
            </p>
            <p>Come and enjoy Total Gospel at Liberty Vineyard Ministry.</p>
            <p>God bless you.</p>
            <img
              src="https://onlinepngtools.com/images/examples-onlinepngtools/edgar-allan-poe-signature-blue.png"
              alt="overseers signature"
              className="w-40 h-20"
            />
            <p className="text-lg font-bold">
              PASTOR KINGSLEY W. ELIJAH{" "}
              <span className="text-sm block italic font-normal">
                General Overseer/Senior Pastor
              </span>
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full max-w-5xl mx-auto p-3 md:p-10 flex flex-col mb-10 md:mb-20">
            <h2 className="uppercase text-2xl md:text-4xl font-extrabold text-center w-full mb-3 md:mb-16">
              THE BENEFITS OF <span className="block">JOINING OUR CHURCH</span>
            </h2>
            <div className="flex flex-col gap-10 md:gap-12">
              <div className="flex w-full flex-col md:flex-row gap-8 mt-4 items-center">
                <div className="flex-1 flex flex-col gap-8">
                  <h3 className="uppercase text-xl font-extrabold">
                    find fulfillment and joy
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
                <div
                  className="w-full md:w-[400px] h-72 bg-no-repeat bg-cover bg-center rounded-xl shadow-lg"
                  style={{ backgroundImage: `url(${joyFulfillment})` }}
                ></div>
              </div>

              <div className="flex w-full flex-col-reverse md:flex-row gap-8 mt-4 items-center">
                <div
                  className="w-full md:w-[400px] h-72 bg-no-repeat bg-cover bg-center rounded-xl shadow-lg"
                  style={{ backgroundImage: `url(${sharedValues})` }}
                ></div>
                <div className="flex-1 flex flex-col gap-8">
                  <h3 className="uppercase text-xl font-extrabold">
                    shared values
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col md:flex-row gap-8 mt-4 items-center">
                <div className="flex-1 flex flex-col gap-8">
                  <h3 className="uppercase text-xl font-extrabold">
                    charity events
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
                <div
                  className="w-full md:w-[400px] h-72 bg-no-repeat bg-cover bg-center rounded-xl shadow-lg"
                  style={{ backgroundImage: `url(${charityEvents})` }}
                ></div>
              </div>

              <div className="flex w-full flex-col-reverse md:flex-row gap-8 mt-4 items-center">
                <div
                  className="w-full md:w-[400px] h-72 bg-no-repeat bg-cover bg-center rounded-xl shadow-lg"
                  style={{ backgroundImage: `url(${allWelcome})` }}
                ></div>
                <div className="flex-1 flex flex-col gap-8">
                  <h3 className="uppercase text-xl font-extrabold">
                    all are welcome
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Team Members */}
        <div className="py-10 bg-slate-200 dark:bg-slate-800">
          <h2 className="uppercase text-2xl md:text-4xl font-extrabold text-center w-full mb-3 md:mb-16">
            meet our inspirational team
          </h2>
          <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-between gap-6 p-3">
            <AboutComponents
              avatar="/avatar.png"
              memberName="Pastor Kingsley W. Elijah"
              memberPosition="Title"
            />
            <AboutComponents
              avatar="/avatar.png"
              memberName="Pastor Mrs Eyitayo Elijah"
              memberPosition="Title"
            />
            <AboutComponents
              avatar="/avatar.png"
              memberName="Pastor Sylvanus Ingwubel"
              memberPosition="Title"
            />
            <AboutComponents
              avatar="/avatar.png"
              memberName="Mrs Dauda"
              memberPosition="Deaconness"
            />
            <AboutComponents
              avatar="/avatar.png"
              memberName="Mrs Odufisan"
              memberPosition="Deaconess"
            />
            <AboutComponents
              avatar="/avatar.png"
              memberName="Dr Markson K."
              memberPosition="Deacon"
            />
            <AboutComponents
              avatar="/avatar.png"
              memberName="Mrs Blessing E. Amene"
              memberPosition="Deaconess"
            />
            <AboutComponents
              avatar="/avatar.png"
              memberName="Name of Officer"
              memberPosition="Title"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
