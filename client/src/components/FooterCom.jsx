import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { MdAddCall, MdMarkEmailRead } from "react-icons/md";

export default function FooterCom() {
  return (
    <Footer
      container
      className="border border-t-8 border-slate-300 dark:border-slate-600"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 flex flex-col gap-4">
            <Link
              to="/"
              className="whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-blue-950 via-cyan-800 to-blue-900 rounded-lg text-white dark:text-yellow-300 border-b border-red-700">
                Liberty Vineyard
              </span>
            </Link>
            <div className="flex md:flex-col h-full gap-2 px-2 py-4 w-[450px]">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* headquarters address */}
                <div className="flex flex-col gap-3 items-start flex-1">
                  <div className="text-sm text-slate-800 dark:text-slate-200">
                    <h1 className="font-bold">Headquarters:</h1>
                    <p>
                      No 1, Liberty StreetL, by Federal Housing Estate,
                      <br /> Karatudu, Goni Gora, Kaduna, Kaduna State.
                    </p>
                  </div>
                  <div className="text-sm text-slate-800 dark:text-slate-200">
                    <p className="flex gap-2 items-center">
                      <MdMarkEmailRead />
                      <Link
                        to="mailto:libertyemail@gmail.com"
                        className="hover:text-blue-600 hover:underline underline-offset-2"
                      >
                        libertyvineyard@email.com
                      </Link>
                    </p>
                    <p className="flex gap-2 items-center">
                      <MdAddCall />
                      <Link
                        to="mailto:libertyemail@gmail.com"
                        className="hover:text-blue-600 hover:underline underline-offset-2"
                      >
                        +234803 704 2960
                      </Link>
                    </p>
                  </div>
                </div>

                {/* agyeita branch address */}
                <div className="flex flex-col gap-3 items-start flex-1">
                  <div className="text-sm text-slate-800 dark:text-slate-200">
                    <h1 className="font-bold">Agyeita Branch:</h1>
                    <p>
                      14B, Marwa Street, Agyeita,
                      <br />
                      Kaduna, Kaduna State.
                    </p>
                  </div>
                  {/* <div className="text-sm text-slate-800 dark:text-slate-200">
                    <p className="flex gap-2 items-center">
                      <MdMarkEmailRead />
                      <Link
                        to="mailto:libertyemail@gmail.com"
                        className="hover:text-blue-600 hover:underline underline-offset-2"
                      >
                        libertyvineyard@email.com
                      </Link>
                    </p>
                    <p className="flex gap-2 items-center">
                      <MdAddCall />
                      <Link
                        to="mailto:libertyemail@gmail.com"
                        className="hover:text-blue-600 hover:underline underline-offset-2"
                      >
                        +234803 704 2960
                      </Link>
                    </p>
                  </div> */}
                </div>
              </div>

              {/* <p className="text-sm text-slate-800 dark:text-slate-200 inline-block">
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-bold">Liberty Vineyard Ministries</span>
              </p> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="">
              <Footer.Title title="Connect with Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                {/* <Footer.Link href="#">Twitter</Footer.Link> */}
                <Footer.Link href="#">WhatsApp</Footer.Link>
                {/* <Footer.Link href="#">YouTube</Footer.Link> */}
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          {/* <Footer.Copyright
            href="#"
            by="Amene Ter'Hemen"
            year={new Date().getFullYear()}
          /> */}
          <p>
            Designed & Maintained @ <span>Infonet Grafix & Codes</span>
          </p>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            {/* <Footer.Icon
              href="https://www.facebook.com/ameneng"
              icon={BsFacebook}
            /> */}
            <Footer.Icon
              href="https://www.instagram.com/infonet_grafix"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://www.twitter.com/InfonetG41511"
              icon={BsTwitter}
            />
            <Footer.Icon href="https://wa.me/2348148224299" icon={BsWhatsapp} />
            <Footer.Icon href="tel:+2348148224299" icon={MdAddCall} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
