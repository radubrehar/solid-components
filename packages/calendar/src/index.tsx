import type { Component } from "solid-js";

// import styles from "./App.module.css";

type CalendarProps = {
  name?: string;
  fullname?: string;
  age?: string;
};

export const Calendar: Component<CalendarProps> = (props) => {
  console.log(props, "!");
  return (
    <div>
      <header>
        <p>The Calendar cmp</p>
      </header>
    </div>
  );
};

export const x = 5;
