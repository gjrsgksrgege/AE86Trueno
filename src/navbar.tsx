import Dashboard from "./assets/dashboard_icon.png";
import Search from "./assets/search_icon.png";
import Message from "./assets/message_icon.png";
import Menu from "./assets/menu_icon.png";
import Down from "./assets/down_arrow.png";

import Button, { Button3 } from "./component/buttons";

export function Navbar() {
  return (
    <section className="navbar-wrapper">
      {/*** Nav Links ***/}
      <nav className="flex-1 relative navbar">
        <ul className="flex w-full h-full gap-[1em]">
          {[
            "Models",
            "Services",
            "Experience",
            "Shop",
            "Purchase",
            "Configurate",
          ].map((item, index) => (
            <li id="nav-links" key={index} className="z-10">
              <span className="whitespace-nowrap text-white cursor-pointer">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      {/*** Menu Toggle ***/}
      <div className="flex justify-end gap-[.5em]">
        <div className="dropdown-menu relative inline-block">
          <button
            id="dashboard"
            className="flex justify-center gap-[.5em] rounded-full"
          >
            <Button3
              id="search"
              content2={
                <div className="flex items-center gap-1">
                  <img src={Dashboard} className="w-[2em] h-[2em]" alt="" />
                  <img src={Down} className="w-[1.5em] h-[1.5em]" alt="" />
                </div>
              }
              className="border-0 !aspect-auto"
            />
          </button>
          <ol className="sub-menu bg-white w-[10em] shadow-lg">
            {["sub 1", "sub 2", "sub 3"].map((item, index) => (
              <li
                key={index}
                className="px-[1.5em] py-[1em] hover:bg-black hover:text-white cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ol>
        </div>
        <Button id="search" content={Search} className="border-0" />
        <Button id="message" content={Message} className="border-0" />
        <Button id="menu" content={Menu} className="border-0" />
      </div>
    </section>
  );
}
