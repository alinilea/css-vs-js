import React from "react";
import "./styles.css";

import {
  TEXT_NO_1,
  TEXT_NO_2,
  PEOPLE_LIST,
  NUMBER_LIST,
  HOTEL
} from "./constants";
import { capitalizeFirstLetter, capitalizeString } from "./helpers";

export default function App() {
  return (
    <div className={"container"}>
      <h1 className={"my-54 text-center"}>
        CSS vs JS
        <br />
        <span> - for styling - </span>
      </h1>

      <div className={"sample"}>
        <h3 id={"first_letter_pseudo_el_vs_cap_first_letter_func"}>
          <a href={"#first_letter_pseudo_el_vs_cap_first_letter_func"}>
            <strong>::first-letter</strong>
            <span> pseudo-element vs </span>
            <strong>capitalizeFirstLetter(str)</strong>
          </a>
        </h3>
        <p className={"using-css cap-first-letter"}>{TEXT_NO_1}</p>
        <p className={"using-js"}>{capitalizeFirstLetter(TEXT_NO_1)}</p>
        <p>
          The ::first-letter CSS pseudo-element applies styles to the first
          letter of the first line of a block-level element, but only when not
          preceded by other content (such as images or inline tables).
        </p>
      </div>

      <div className={"sample"}>
        <h3 id={"text_trans_cap_pseudo_class_vs_cap_str_func"}>
          <a href={"#text_trans_cap_pseudo_class_vs_cap_str_func"}>
            <strong>text-transform: capitalize;</strong>
            <span> CSS property/value pair vs </span>
            <strong>capitalizeString(str)</strong>
          </a>
        </h3>
        <p className={"using-css cap-str"}>{TEXT_NO_2}</p>
        <p className={"using-js"}>{capitalizeString(TEXT_NO_2)}</p>
      </div>

      <div className={"sample"}>
        <h3
          id="text_trans_uppercase_prop_vs_str_to_upper_case_method"
          className="mb-8"
        >
          <a href="#text_trans_uppercase_prop_vs_str_to_upper_case_method">
            <strong>text-transform: uppercase;</strong>
            <span> CSS property/value pair vs </span>
            <strong>str.toUpperCase()</strong> method
          </a>
        </h3>
        <p className={"font-size-12 mt-0"}>
          <span>Similar for </span>
          <strong>text-transform: lowercase;</strong>
          <span> CSS property/value pair vs </span>
          <strong>str.toLowerCase()</strong> method
        </p>

        <p className={"using-css uppercased"}>{HOTEL}</p>
        <p className={"using-js"}>{HOTEL.toUpperCase()}</p>
      </div>

      <div className={"sample"}>
        <h3 id={"last_child_pseudo_cls_vs_is_last_item_var"}>
          <a href={"#last_child_pseudo_cls_vs_is_last_item_var"}>
            <strong>:last-child</strong>
            <span> pseudo-class vs </span>
            <strong>isLastItem</strong> variable
          </a>
        </h3>
        <p>
          {PEOPLE_LIST.map((item, index) => (
            <span key={index} className={`using-css people-item-css`}>
              {item.name}
            </span>
          ))}
        </p>

        <p>
          {PEOPLE_LIST.map((item, index) => {
            const isLastItem = index === PEOPLE_LIST.length - 1;
            return (
              <span
                key={index}
                className={`using-js ${isLastItem ? "" : "people-item-js"}`}
              >
                {item.name}
              </span>
            );
          })}
        </p>
      </div>

      <div className={"sample"}>
        <h3 id={"nth_of_type_even_pseudo_class_vs_is_even_item_var"}>
          <a href={"#nth_of_type_even_pseudo_class_vs_is_even_item_var"}>
            <strong>:nth-of-type(even)</strong>
            <span> pseudo-class vs </span>
            <strong>isEvenItem</strong> variable
          </a>
        </h3>
        <p>
          {NUMBER_LIST.map((item, index) => (
            <span
              key={index}
              className={`using-css number-item number-item-css`}
            >
              {item}
            </span>
          ))}
        </p>

        <p>
          {NUMBER_LIST.map((item, index) => {
            const isEvenItem = index % 2 === 0;
            return (
              <span
                key={index}
                className={`using-js number-item-js ${
                  isEvenItem ? "" : "number-even-item-js"
                }`}
              >
                {item}
              </span>
            );
          })}
        </p>
      </div>

      <div className={"sample"}>
        <p>
          <strong>:nth-of-type(even)</strong>
          <span> pseudo-class vs </span>
          <strong>isEvenItem</strong> variable
        </p>
        <p>
          {NUMBER_LIST.map((item, index) => (
            <span
              key={index}
              className={`using-css number-item number-item-css`}
            >
              {item}
            </span>
          ))}
        </p>

        <p>
          {NUMBER_LIST.map((item, index) => {
            const isEvenItem = index % 2 === 0;
            return (
              <span
                key={index}
                className={`using-js number-item-js ${
                  isEvenItem ? "" : "number-even-item-js"
                }`}
              >
                {item}
              </span>
            );
          })}
        </p>
      </div>

      <div className={"sample"} style={{ height: "100vh" }}>
        Hello
      </div>
    </div>
  );
}
