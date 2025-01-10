"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ConnectForm from "./Form/ConnectForm";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev: boolean) => !prev);
  };

  const handleNavigation = (url: string) => {
    setIsMenuOpen(false); // Close the menu
    router.push(url); // Navigate to the desired URL
  };
  return (
    <div className="">
      <div className="w-full flex flex-row items-center justify-between ">
        <Link  onClick={() => handleNavigation("/")} href={'/'}>
          <h1 className="text-4xl font-semibold ">
            <span className={`${isMenuOpen ? "opacity-70" : "opacity-100"}`}>Kul</span>
            <span className="opacity-100">deep.</span>
          </h1>
        </Link>
        <div>
          <div className="flex items-center space-x-2">
            <a href="mailto://k4kuldeep108@gmail.com" target="_blank" className="px-4 py-2 flex items-center border border-white rounded-full ">
              Let&apos;s Talk{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </a>
            {/* menu toggle */}
            <button
              onClick={toggleMenu}
              className="px-4 py-2 border border-white rounded-full "
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* hamburger opn content */}
      <div
        className={` ${isMenuOpen ? "" : "hidden"} pt-5  h-screen`}
      >
        <div>
          <ul className="space-y-4 ">
            <li>
              <Link
                onClick={() => handleNavigation("/")}
                href="/"
                className="flex flex-row items-center justify-between hover:opacity-80 py-2 rounded-md "
              >
                <div>
                  {" "}
                  <h4 className="text-5xl sm:text-7xl font-[600] inline">
                    Home
                  </h4>
                  <span className="text-white/80 pl-2">(01)</span>
                </div>
                <div className="mr-2">
                  <button className="px-4 py-2 rounded-full border-white border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </Link>
            </li>
            <li>
              <Link
               onClick={() => handleNavigation("/about")}
                href="/about"
                className="flex flex-row items-center justify-between hover:opacity-80 py-2 rounded-md "
              >
                <div>
                  {" "}
                  <h4 className="text-5xl sm:text-7xl font-[600] inline">
                    About Me
                  </h4>
                  <span className="text-white/80 pl-2">(02)</span>
                </div>
                <div className="mr-2">
                  <button className="px-4 py-2 rounded-full border-white border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </Link>
            </li>
            <li>
              <Link
               onClick={() => handleNavigation("/works")}
                href="/works"
                className="flex flex-row items-center justify-between hover:opacity-80 opacity-100 py-2 rounded-md "
              >
                <div>
                  {" "}
                  <h4 className="text-5xl sm:text-7xl font-[600] inline">
                    Works
                  </h4>
                  <span className="text-white/80 pl-2">(03)</span>
                </div>
                <div className="mr-2">
                  <button className="px-4 py-2 rounded-full border-white border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </Link>
            </li>
            <li>
              <Link
               onClick={() => handleNavigation("/insights")}
                href="/insights"
                className="flex flex-row items-center justify-between hover:opacity-80 py-2 rounded-md "
              >
                <div>
                  {" "}
                  <h4 className="text-5xl sm:text-7xl font-[600] inline">
                    Insights
                  </h4>
                  <span className="text-white/80 pl-2">(04)</span>
                </div>
                <div className="mr-2">
                  <button className="px-4 py-2 rounded-full border-white border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t mt-2 py-2 border-white/30">
          <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between pt-5 items-center">
            <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto sm:h-20 ">
              <div>
                <p className="text-white/80">Follow me.</p>
              </div>
              <div>
                <ul className="flex items-center space-x-2">
                  <li>
                    <Link onClick={() => handleNavigation("/")}
                      target="_blank"
                      href={"https://github.com/kuldeepsharma1"}
                    >
                      <svg
                        className="size-6 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link  onClick={() => handleNavigation("/")}
                      target="_blank"
                      href={"https://www.linkedin.com/in/kuldeepsharma22/"}
                    >
                      <svg
                        className="size-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                          clipRule="evenodd"
                        />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleNavigation("/")}
                      target="_blank"
                      href={"https://www.instagram.com/kuldeep_sharma_2022/"}
                    >
                      <svg
                        className="size-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => handleNavigation("/")} target="_blank" href={"https://x.com/kuldeepit1"}>
                      <svg
                        className="size-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col justify-center  sm:justify-start sm:items-start space-y-2 items-center  ">
              <div>
                <p className="text-white/80 ">Stay connected w/ me.</p>
              </div>
              <div className="pt-4">
                <ConnectForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
