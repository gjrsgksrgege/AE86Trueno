import Alert from "./assets/alert_icon.png";
import Arrow_Left from "./assets/arrow_left.png";
import Arrow_Right from "./assets/arrow_right.png";
import Badge from "./assets/badge_icon.png";
import infinite from "./assets/infinity_icon.png";
import Car from "./assets/car3.png";
import Logo2 from "./assets/logo2.png";
import Interior from "./assets/interior.png";
import Interior2 from "./assets/interior2.png";
import Carseat from "./assets/carseat.png";
import Engine from "./assets/engine_logo.png";
import Power from "./assets/power_logo.png";
import Transmission from "./assets/transmission_logo.png";
import Accelerator from "./assets/accelerator_logo.png";

import { useEffect, useRef, useState } from "react";
import Button, { Button2 } from "./component/buttons";

import { Navbar } from "./navbar";

const ITEM_WIDTH = 1;

export function Hero() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const containerRef = useRef<HTMLElement | null>(null);

  const handleBtnClick = (scrollAmount: number) => {
    const container = containerRef.current;

    const card = container?.querySelector(".card");

    const cardWidth = card?.getBoundingClientRect().width;
    const track = container?.querySelector(".carousel-track");

    const styles = window.getComputedStyle(track!);
    const gap = parseFloat(styles.columnGap) || 0;

    if (!cardWidth) return;

    containerRef.current?.scrollBy({
      left: scrollAmount * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  const UpdateScrollButtons = () => {
    const container = containerRef.current;

    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);

    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth - 1,
    );
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    UpdateScrollButtons();

    container.addEventListener("scroll", UpdateScrollButtons);
    window.addEventListener("resize", UpdateScrollButtons);

    return () => {
      container.removeEventListener("scroll", UpdateScrollButtons);
      window.removeEventListener("resize", UpdateScrollButtons);
    };
  }, []);

  /**** H1 Lang Morph ****/
  const languages = [
    "LEGEND",
    "DRIFTS",
    "SPORTY",
    "TRUENO",
    "ICONIC",
    "DAIITG",
    "CLASSY", // English [6]
  ];

  const [number, setNumber] = useState(5);
  console.log("set", number);

  useEffect(() => {
    const MAX_INDEX = 90;

    const interval = setInterval(() => {
      setNumber((prev) => {
        if (prev >= MAX_INDEX) {
          clearInterval(interval);
        }

        return prev + 1;
      });
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="">
      <Navbar />
      <section id="hero-section">
        <div
          id="car-display"
          aria-label="Car body kit"
          className="absolute inset-0 h-full w-full z-0"
        >
          {/*** Car Image ***/}
          <div className="relative h-full w-full">
            <img
              src={Car}
              className="h-full w-full object-cover pointer-events-none"
              alt="Car body kit"
            />

            {/*** Car's Interactive Hotspots ***/}
            <div className="absolute inset-0 grid grid-cols-[repeat(32,minmax(0,1fr))] grid-rows-[repeat(32,minmax(0,1fr))] w-full h-full z-40">
              {[
                {
                  desc: "Timeless 80s style",
                  position: { y: "25", x: "23" } /*** Car's Door ***/,
                },
                {
                  desc: "High performance engine",
                  position: { y: "29", x: "21" } /*** Car's Trunk ***/,
                },
                {
                  desc: "Aerodynamic design",
                  position: { y: "21", x: "24" } /*** Car's Mags ***/,
                },
                {
                  desc: "Advanced safety features",
                  position: { y: "19", x: "22" } /*** Headlights ***/,
                },
              ].map((hotspot, index) => (
                <div
                  key={index}
                  className="hotspot-container grid place-items-center"
                  style={{
                    gridColumnStart: hotspot.position.y,
                    gridRowStart: hotspot.position.x,
                  }}
                >
                  <div className="hotspot">
                    <div className="description-hotspot">{hotspot.desc}</div>
                    <span className="hotspot-btn"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*** Title Section ***/}
        <section className="flex flex-col justify-around w-auto z-20">
          <div className="flex flex-col gap-[.5rem]">
            <img src={Logo2} className="w-[7rem]"></img>
            <div
              id="Big-font"
              className="flex items-center justify-between w-[26rem] leading-none capitalize"
            >
              <div className="language-morph">
                <span>AE86 </span>

                <div className="flex">
                  {Array.from({ length: 6 }).map((_, letterIndex) => {
                    const direction = letterIndex % 2 === 0 ? 1 : -1;
                    const translate = direction * number;

                    console.log("hi", translate);

                    return (
                      <div
                        key={letterIndex}
                        className="word-wrapper"
                        style={
                          {
                            "--translate": translate,
                            "--delay": `${(letterIndex + 1) * 0.2}s`,
                          } as React.CSSProperties
                        }
                      >
                        {/****** letters invertical arrays ******/}
                        {Array.from({ length: 231 }).map((_, index) => {
                          const arrayIndex = index % languages.length;

                          return (
                            <span key={index} className="language-reveal">
                              {languages[arrayIndex][letterIndex]}
                            </span>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/**** H2 BUTTON ****/}
              <Button
                id="title-button"
                content={Alert}
                className="bg-gray-300/10 border-0"
              />
            </div>
            <div id="Small-font">
              <span className="text-gray-500">
                1983 Toyota Corolla Levin GT APEX coupé
              </span>
            </div>
          </div>
        </section>
        {/*** Nav Links & Car Body Kit ***/}
        <div id="main-content-hero" className="flex z-20">
          {/*** Navigation Links ***/}
          <nav aria-label="Navigation links" className="navbar my-auto">
            <ul className="flex flex-col gap-[.5rem]">
              {["Performance", "Design", "Safety", "Luxury", "Multimedia"].map(
                (item, index) => (
                  <Button2
                    key={index}
                    content={item}
                    className="hero-btns z-40"
                  />
                ),
              )}
            </ul>
          </nav>
        </div>

        {/*** Sub-content hero ***/}
        <div
          id="subcontent-hero"
          className="absolute top-10 right-10 flex flex-col gap-2"
        >
          <div className="flex-col w-[325px] bg-black rounded-[2rem]">
            <div className="flex items-center gap-[1rem] p-[1rem]">
              <Button className="bg-[#313131] border-none" content={Badge} />
              <div className="text-white">Unsurpassed Power</div>
            </div>

            <p className="bg-white text-gray-700 py-[1rem] px-[1.5rem] border border-gray-300 rounded-[2rem]">
              A handcrafted 503-hp biturbo V8 unleashes a 310-lb-ft torrent of
              torque. Aggressive style envelops advanced technologies.
            </p>
          </div>
          <div className="flex items-center gap-[1rem] p-[1rem] bg-gray-300/10 border border-gray-300 rounded-full">
            <Button className="border-none" content={infinite} />
            <div className="font-medium text-lg text-white">
              vpc-accessories
            </div>
          </div>
        </div>

        {/*** Feature and Color Section ***/}
        <section
          id="Selection-Feature"
          className="flex justify-end w-full items-center z-40"
        >
          <div
            id="Mid-font"
            className="flex items-center justify-end gap-[1em]"
          >
            <span className="!text-[1.5em] !font-normal !not-italic">
              Colors
            </span>
            <div className="flex justify-between gap-[.75em]">
              <div className="w-[2rem] h-[2rem] bg-black rounded-full"></div>
              <div className="w-[2rem] h-[2rem] bg-black rounded-full"></div>
              <div className="w-[2rem] h-[2rem] bg-black rounded-full"></div>
              <div className="w-[2rem] h-[2rem] bg-black rounded-full"></div>
              <div className="w-[2rem] h-[2rem] bg-black rounded-full"></div>
            </div>
          </div>
        </section>
      </section>

      {/*** Carousel ***/}
      <section className="flex flex-col gap-[2rem]">
        <div id="Mid-font" className="flex items-center gap-[1em] pl-[5rem]">
          <span className="font-bold">feature highlight</span>
          <img src={Alert} className="w-[2em] h-[2em]"></img>
        </div>
        <section className="relative flex justify-between h-[210px]">
          <div className="flex h-full shrink-0 items-end">
            <div className="flex flex-col bg-transparent px-[2rem] py-[1rem] gap-[0.5rem]">
              <Button
                content={Arrow_Left}
                onClick={() => handleBtnClick(-ITEM_WIDTH)}
                disabled={!canScrollLeft}
                aria-label="Previous slide"
              />
              <Button
                content={Arrow_Right}
                onClick={() => handleBtnClick(ITEM_WIDTH)}
                disabled={!canScrollRight}
                aria-label="Next slide"
              />
            </div>
          </div>
          <section ref={containerRef} className="carousel">
            <div className="carousel-track">
              {/*** Carousel Card 1 ***/}
              <div className="card">
                <div className="flex flex-col h-full justify-stretch">
                  <div className="flex-1 ">
                    <Button
                      content={Carseat}
                      className="border-gray-700 bg-[#141414] h-[1rem] !p-0"
                    />
                  </div>
                  <p className="card-titles text-gray-500">passenger</p>
                  <p className="subcard-titles lowercase text-[1.5rem]">
                    Capacity
                  </p>
                </div>
                <div>
                  <img
                    src={Interior}
                    className="w-[8rem] h-full rounded-[1em] object-cover"
                  />
                </div>
                <div className="blurred absolute top-6 right-24 w-auto px-4 py-2 h-[7.5rem] aspect-square rounded-xl">
                  <div className="relative h-full w-full">
                    <div className="number absolute bottom-0 left-0 text-[2rem]">
                      4
                    </div>
                  </div>
                </div>
              </div>
              {/*** Carousel Card 2 ***/}
              <div className="card">
                <div className="flex flex-col h-full w-full justify-stretch gap-[2px]">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <Button
                        content={Engine}
                        className="border-gray-700 bg-[#141414] h-[1rem] !p-0"
                      />
                      <div className="mt-2 text-[2rem] text-gray-500/60 h-auto">
                        Engine
                      </div>
                    </div>
                  </div>
                  <p className="card-titles text-gray-500">Handcrafted</p>
                  <p className="subcard-titles lowercase text-[1.75rem]">
                    1.6 L 4A/4A-C I4 SOHC
                  </p>
                </div>
              </div>
              {/*** Carousel Card 3 ***/}
              <div className="card">
                <div className="flex flex-col h-full w-full justify-stretch gap-[2px]">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <Button
                        content={Power}
                        className="border-gray-700 bg-[#141414] h-[1rem] !p-0"
                      />
                      <div className="flex items-start h-[63px] gap-2">
                        <div className="number text-[3rem] h-auto font-thin">
                          503
                        </div>
                        <div className="flex items-end h-full">
                          <div className="mt-2 text-[1.5rem] text-gray-500">
                            hp
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="card-titles text-gray-500">Power</p>
                  <p className="subcard-titles lowercase text-[1.75rem]">
                    @ 5,500-6,250 rpm
                  </p>
                </div>
              </div>
              {/*** Carousel Card 4 ***/}
              <div className="card !pb-[.5rem] !px-[.5rem]">
                <div className="flex flex-col h-full w-full justify-stretch gap-[2px]">
                  <div className="flex-1 !px-[1rem]">
                    <div className="flex items-center justify-between ">
                      <Button
                        content={Transmission}
                        className="border-gray-700 bg-[#141414] h-[1rem] !p-0"
                      />
                      <div className="flex flex-col items-end text-[1rem] text-gray-500 leading-tight">
                        <div className="">Manual</div>
                        <div className="">transmission</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#141414] rounded-3xl p-[1rem]">
                    <p className="card-titles text-gray-500">T50</p>
                    <p className="number subcard-titles lowercase text-[1.75rem]">
                      5-speed manual
                    </p>
                  </div>
                </div>
              </div>
              {/*** Carousel Card 5 ***/}
              <div className="card">
                <div className="flex flex-col h-full w-full justify-stretch gap-3">
                  <div className="">
                    <div className="flex items-center justify-between ">
                      <Button
                        content={Accelerator}
                        className="border-gray-700 bg-[#141414] h-[1rem] !p-0"
                      />
                      <div className="mt-2 text-[1.5rem] text-gray-500/60 h-auto">
                        Accelerator
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 number font-thin flex justify-between items-end h-[60px] w-full gap-3">
                    <img
                      src={Interior2}
                      className="w-[11rem] h-full rounded-[1em] object-cover"
                    />
                    <div>
                      <div className="flex flex-col items-end">
                        <div className="h-auto text-[3.5rem] leading-[0.8]">
                          3.4
                        </div>
                        <div className="text-[1rem] mr-2">sec</div>
                      </div>
                      <div className="font-normal text-gray-500 text-[1.5rem]">
                        0-100
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}
