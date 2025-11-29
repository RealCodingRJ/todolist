"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./main.css";
import { useFormState } from "react-dom";

export default function Page() {
  // const [todo, useTodos] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValueTwo] = useState("");

  function setUserInput(event: any) {
    const values = event.target.value;
    setValue(values);
  }

  function setUserInputTwo(event: any) {
    const values = event.target.value;
    setValueTwo(values);
  }

  function getHandled(e: any) {
    console.log(value);
    console.log(value2);
    e.preventDefault();
  }

  function Button() {
    return (
      <div>
        <button onClick={getHandled}>Submit</button>
      </div>
    );
  }

  return (
    <div>
      <header>
        <div>
          <Link href="/">List Maker</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
              <Link href="/About">About</Link>
              <Link href="/Projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <main>
          <div>
            <input placeholder={"Enter Todo One: "} onChange={setUserInput} />
          </div>
          <div>
            <input
              placeholder={"Enter Todo One: "}
              onChange={setUserInputTwo}
            />
          </div>
        </main>
      </div>
      <Button />
    </div>
  );
}
