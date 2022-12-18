import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";

const ProjectsListPage = () => {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  let getProjects = async () => {
    let response = await fetch("http://127.0.0.1:8000/project/");
    let data = await response.json();
    setProjects(data);
  };
  console.log(projects);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-20 sm:mt-24 lg:mt-32 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center">
        <div className="relative row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6">
          <div className="-mx-4 sm:mx-0">
            <div className="relative overflow-hidden shadow-xl flex bg-slate-800 h-[31.625rem] max-h-[60vh] sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem] dark:bg-slate-900/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 !h-auto max-h-[none]">
              <div className="relative w-full flex flex-col">
                <div className="flex-none border-b border-slate-500/30">
                  <div className="flex items-center h-8 space-x-1.5 px-3">
                    <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                  </div>
                </div>
                <div className="relative min-h-0 flex-auto flex flex-col">
                  <div className="w-full flex-auto flex min-h-0 overflow-auto">
                    <div className="w-full relative flex-auto">
                      <pre className="flex min-h-full text-sm leading-6">
                        <div
                          aria-hidden="true"
                          className="hidden md:block text-slate-600 flex-none py-4 pr-4 text-right select-none"
                          style={{ width: "50px" }}
                        >
                          1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
                        </div>
                        <code className="flex-auto relative block text-slate-50 pt-4 pb-4 px-4 overflow-auto">
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>
                            figure{" "}
                            <span className="token attr-name">className</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">"</span>
                              <span>m</span>
                              <span>d</span>
                              <span>:</span>
                              <span>f</span>
                              <span>l</span>
                              <span>e</span>
                              <span>x</span>
                              <span> </span>bg-slate-100 rounded-xl
                              <span> </span>
                              <span>p</span>
                              <span>-</span>
                              <span>8</span>
                              <span> </span>
                              <span>m</span>
                              <span>d</span>
                              <span>:</span>
                              <span>p</span>
                              <span>-</span>
                              <span>0</span> dark:bg-slate-800
                              <span className="token punctuation">"</span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>img{" "}
                            <span className="token attr-name">className</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">"</span>w-24
                              h-24
                              <span> </span>
                              <span>m</span>
                              <span>d</span>
                              <span>:</span>
                              <span>w</span>
                              <span>-</span>
                              <span>4</span>
                              <span>8</span>
                              <span> </span>
                              <span>m</span>
                              <span>d</span>
                              <span>:</span>
                              <span>h</span>
                              <span>-</span>
                              <span>a</span>
                              <span>u</span>
                              <span>t</span>
                              <span>o</span>
                              <span> </span>
                              <span>m</span>
                              <span>d</span>
                              <span>:</span>
                              <span>r</span>
                              <span>o</span>
                              <span>u</span>
                              <span>n</span>
                              <span>d</span>
                              <span>e</span>
                              <span>d</span>
                              <span>-</span>
                              <span>n</span>
                              <span>o</span>
                              <span>n</span>
                              <span>e</span>
                              <span> </span>
                              <span>r</span>
                              <span>o</span>
                              <span>u</span>
                              <span>n</span>
                              <span>d</span>
                              <span>e</span>
                              <span>d</span>
                              <span>-</span>
                              <span>f</span>
                              <span>u</span>
                              <span>l</span>
                              <span>l</span>
                              <span> </span>
                              <span>m</span>
                              <span>x</span>
                              <span>-</span>
                              <span>a</span>
                              <span>u</span>
                              <span>t</span>
                              <span>o</span>
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">src</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">"</span>
                              /sarah-dayan.jpg
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">alt</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">"</span>
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">width</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">"</span>384
                              <span className="token punctuation">"</span>
                            </span>{" "}
                            <span className="token attr-name">height</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">"</span>512
                              <span className="token punctuation">"</span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>div{" "}
                            <span className="token attr-name">className</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">"</span>pt-6
                              <span> </span>
                              <span>m</span>
                              <span>d</span>
                              <span>:</span>
                              <span>p</span>
                              <span>-</span>
                              <span>8</span>
                              <span> </span>
                              <span>t</span>
                              <span>e</span>
                              <span>x</span>
                              <span>t</span>
                              <span>-</span>
                              <span>c</span>
                              <span>e</span>
                              <span>n</span>
                              <span>t</span>
                              <span>e</span>
                              <span>r</span>
                              <span> </span>
                              <span>m</span>
                              <span>d</span>
                              <span>:</span>
                              <span>t</span>
                              <span>e</span>
                              <span>x</span>
                              <span>t</span>
                              <span>-</span>
                              <span>l</span>
                              <span>e</span>
                              <span>f</span>
                              <span>t</span> space-y-4
                              <span className="token punctuation">"</span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>
                            blockquote
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>p{" "}
                            <span className="token attr-name">className</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">"</span>
                              text-lg
                              <span> </span>
                              <span>f</span>
                              <span>o</span>
                              <span>n</span>
                              <span>t</span>
                              <span>-</span>
                              <span>m</span>
                              <span>e</span>
                              <span>d</span>
                              <span>i</span>
                              <span>u</span>
                              <span>m</span>
                              <span className="token punctuation">"</span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          “Tailwind CSS is the only framework that I've seen
                          scale on large teams. It’s easy to customize, adapts
                          to any design, and the build size is tiny.”
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>p
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>
                            blockquote
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>
                            figcaption
                            <span> </span>
                            <span className="token attr-name">
                              <span>c</span>
                              <span>l</span>
                              <span>a</span>
                              <span>s</span>
                              <span>s</span>
                            </span>
                            <span className="token attr-value">
                              <span className="token punctuation">
                                <span>=</span>
                              </span>
                              <span className="token punctuation">
                                <span>"</span>
                              </span>
                              <span>f</span>
                              <span>o</span>
                              <span>n</span>
                              <span>t</span>
                              <span>-</span>
                              <span>m</span>
                              <span>e</span>
                              <span>d</span>
                              <span>i</span>
                              <span>u</span>
                              <span>m</span>
                              <span className="token punctuation">
                                <span>"</span>
                              </span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>div
                            <span> </span>
                            <span className="token attr-name">
                              <span>c</span>
                              <span>l</span>
                              <span>a</span>
                              <span>s</span>
                              <span>s</span>
                            </span>
                            <span className="token attr-value">
                              <span className="token punctuation">
                                <span>=</span>
                              </span>
                              <span className="token punctuation">
                                <span>"</span>
                              </span>
                              <span>t</span>
                              <span>e</span>
                              <span>x</span>
                              <span>t</span>
                              <span>-</span>
                              <span>s</span>
                              <span>k</span>
                              <span>y</span>
                              <span>-</span>
                              <span>5</span>
                              <span>0</span>
                              <span>0</span>
                              <span> </span>
                              <span>d</span>
                              <span>a</span>
                              <span>r</span>
                              <span>k</span>
                              <span>:</span>
                              <span>t</span>
                              <span>e</span>
                              <span>x</span>
                              <span>t</span>
                              <span>-</span>
                              <span>s</span>
                              <span>k</span>
                              <span>y</span>
                              <span>-</span>
                              <span>4</span>
                              <span>0</span>
                              <span>0</span>
                              <span className="token punctuation">
                                <span>"</span>
                              </span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          Sarah Dayan
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>div
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;</span>div
                            <span> </span>
                            <span className="token attr-name">
                              <span>c</span>
                              <span>l</span>
                              <span>a</span>
                              <span>s</span>
                              <span>s</span>
                            </span>
                            <span className="token attr-value">
                              <span className="token punctuation">
                                <span>=</span>
                              </span>
                              <span className="token punctuation">
                                <span>"</span>
                              </span>
                              <span>t</span>
                              <span>e</span>
                              <span>x</span>
                              <span>t</span>
                              <span>-</span>
                              <span>s</span>
                              <span>l</span>
                              <span>a</span>
                              <span>t</span>
                              <span>e</span>
                              <span>-</span>
                              <span>7</span>
                              <span>0</span>
                              <span>0</span>
                              <span> </span>
                              <span>d</span>
                              <span>a</span>
                              <span>r</span>
                              <span>k</span>
                              <span>:</span>
                              <span>t</span>
                              <span>e</span>
                              <span>x</span>
                              <span>t</span>
                              <span>-</span>
                              <span>s</span>
                              <span>l</span>
                              <span>a</span>
                              <span>t</span>
                              <span>e</span>
                              <span>-</span>
                              <span>5</span>
                              <span>0</span>
                              <span>0</span>
                              <span className="token punctuation">
                                <span>"</span>
                              </span>
                            </span>
                            <span className="token punctuation">&gt;</span>
                          </span>
                          Staff Engineer, Algolia
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>div
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>
                            figcaption
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>div
                            <span className="token punctuation">&gt;</span>
                          </span>
                          <span className="token tag">
                            <span className="token punctuation">&lt;/</span>
                            figure
                            <span className="token punctuation">&gt;</span>
                          </span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative row-start-1 col-start-1 col-span-5 xl:col-span-6 -mt-10">
          <div className="h-[24.25rem] max-w-xl mx-auto lg:max-w-none flex items-center justify-center">
            <div className="w-full flex-none">
              <div className="lg:-mr-18">
                <div
                  className="relative z-10 rounded-lg shadow-xl text-slate-900 mx-auto sm:w-[23.4375rem] dark:text-slate-300"
                  style={{ transformOrigin: "50% 50% 0px", width: "375px" }}
                >
                  <div
                    className="bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 dark:bg-slate-800 dark:highlight-white/5 dark:ring-0 p-8 text-center"
                    style={{ transformOrigin: "50% 50% 0px" }}
                  >
                    <div
                      className="absolute z-20 top-1/2 right-0 xl:right-auto xl:left-0 text-black rounded-full -mt-4 -mr-4 xl:mr-0 xl:-ml-4 pointer-events-none"
                      style={{ opacity: 0, transformOrigin: "50% 50% 0px" }}
                    >
                      <svg className="h-8 w-8" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="rgba(255, 255, 255, 0.5)"
                          stroke-width="8"
                          fill="rgba(0, 0, 0, 0.5)"
                        ></circle>
                      </svg>
                    </div>
                    <div
                      className="relative z-10 overflow-hidden flex-none mx-auto w-24 h-24"
                      style={{
                        transformOrigin: "50% 50% 0px",
                        borderRadius: "0%",
                      }}
                    >
                      <img
                        src="https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg"
                        decoding="async"
                        alt=""
                        className="absolute max-w-none object-cover bg-slate-100 rounded-full"
                        style={{
                          width: "100%",
                          height: "100%",
                          left: "0px",
                          top: "0px",
                          transformOrigin: "50% 50% 0px",
                        }}
                      />
                    </div>
                    <div
                      className="pt-6"
                      style={{ transformOrigin: "50% 50% 0px" }}
                    >
                      <div
                        className="mb-4"
                        style={{ transformOrigin: "50% 50% 0px" }}
                      >
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            “Tailwind{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            “Tailwind{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            CSS{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            CSS{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            is{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            is{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            the{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            the{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            only{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            only{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            framework{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            framework{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            that{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            that{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            I've{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            I've{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            seen{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            seen{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            scale{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            scale{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            on{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            on{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            large{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            large{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            teams.{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            teams.{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            It’s{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            It’s{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            easy{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            easy{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            to{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            to{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            customize,{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            customize,{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            adapts{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            adapts{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            to{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            to{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            any{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            any{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            design,{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            design,{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            and{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            and{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            the{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            the{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            build{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            build{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            size{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            size{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            is{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            is{" "}
                          </span>
                        </span>
                        <span
                          className="relative inline-flex whitespace-pre text-lg"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          <span
                            className="absolute top-0 left-0"
                            style={{
                              fontWeight: 500,
                            }}
                          >
                            tiny.”{" "}
                          </span>
                          <span
                            style={{
                              opacity: 0,
                              fontWeight: 500,
                            }}
                          >
                            tiny.”{" "}
                          </span>
                        </span>
                      </div>
                      <div
                        className="flex flex-col items-center"
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        <p
                          className="transition-colors duration-500 text-sky-500 dark:text-sky-400"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          Sarah Dayan
                        </p>
                        <p
                          className="transition-colors duration-500 text-slate-700 dark:text-slate-500"
                          style={{ transformOrigin: "50% 50% 0px" }}
                        >
                          Staff Engineer, Algolia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsListPage;
