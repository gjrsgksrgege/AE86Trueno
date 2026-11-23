import React from "react";
import ReactDOM from "react-dom/client";
import { Hero } from "./hero";

export default function Main() {
  return (
    <section className="flex flex-col w-full">
      <Hero />
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
