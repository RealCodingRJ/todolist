"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./main.css";
import { useFormState } from "react-dom";
import { todo } from "node:test";

export default function Page() {
  const [todo1, useTodos1] = useState("");
  const [todo2, useTodos2] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValueTwo] = useState("");

  function setUserInput(event: any) {
    const values = event.target.value;
    setValue(values);
  }

  const isEmpty1 = value == "" ? "Empty" : value;
  const isEmpty2 = value2 == "" ? "Empty" : value2;

  function setUserInputTwo(event: any) {
    const values = event.target.value;
    setValueTwo(values);
  }

  function getHandled(e: any) {
    useTodos1(value);
    useTodos2(value2);
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

      <h2>Todo 1: {todo1 == "" ? "Empty" : todo1}</h2>
      <h2>Todo 2: {todo2 == "" ? "Empty" : todo2}</h2>
    </div>
  );
}
