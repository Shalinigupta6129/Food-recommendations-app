import "./styles.css";
import React, { useState } from "react";

const places = {
  Punjab: [
    {
      name: "1. Lassi",
      rating: "5/5",
      about:
        "Lassi is a regional name for buttermilk, the traditional dahi –based drink. Lassi is a blend of yogurt, water, spices, and sometimes fruit."
    },
    {
      name: "2. Chole Kulche",
      rating: "4/5",
      about:
        "A traditional Punjabi recipe, Chole Kulche is made from maida (white refined flour) and cooked in a tandoor. The Kulche is stuffed with potatoes, cottage cheese, pomegranate seeds and spices. Generously glazed with a dollop of butter, it is served with chole – the spicy chickpea curry."
    },
    {
      name: "3. Dal Makhani",
      rating: "4.9/5",
      about:
        "Dal makhani is a famous dish in Punjab. A relatively modern variation of traditional lentil dishes, it is made with urad dal and other pulses, and includes butter and cream."
    }
  ],
  Gujarat: [
    {
      name: "1. Dhokla",
      rating: "5/5",
      about:
        "Dhokla is a savoury sponge dish that is native to the Indian state of Gujarat.It is made with a fermented batter that is steamed to a cake-like consistency."
    },
    {
      name: "2. Undhiyu",
      rating: "4.7/5",
      about:
        "Undhiyu is a Gujarati mixed vegetable dish that is a regional specialty of Surat, Gujarat, India. The name of this dish comes from the Gujarati word undhu, which translates to upside down, since the dish is traditionally cooked upside down underground in earthen pots, termed matlu, which are fired from above."
    },
    {
      name: "3. Basundi",
      rating: "4.9/5",
      about:
        "Basundi is an Indian sweet mostly in Gujarat. It is a sweetened condensed milk made by boiling milk on low heat until the milk is reduced by half."
    }
  ],
  Maharastra: [
    {
      name: "1. Vada Pav",
      rating: "5/5",
      about:
        "Vada Pav can easily be called the Indian version of a burger! A delicious, spicy, deep-fried patty made of potato is squeezed between a thick slice of bread, similar to a burger bun. Between the vada (patty) and pav (bread) a spicy mix of spices and salt is sprinkled and garnished with a fried, salted green chilli. It's an all-day snack and is extremely popular among Maharashtrians"
    },
    {
      name: "2. Misal Pav",
      rating: "4.9/5",
      about:
        "Misal Pav is quintessentially from Pune and is one of the most popular Maharashtrian breakfast, snack or even brunch. It is a street food popularly found in Mumbai. It has a spicy and tangy lentil curry which is made with moth beans and is served with Pav bread. "
    },
    {
      name: "3. Puran poli",
      rating: "4/5",
      about:
        " This delectable food item is a sweet version of the loving parantha. The stuffing is made from jaggery (gur), yellow gram (chana) dal, plain flour, cardamom powder and ghee (clarified butter). It is a popular dish in festive occasions and also can be eaten at any time of the day."
    }
  ]
};
var themes = Object.keys(places);

export default function App() {
  const [themeType, setTheme] = useState("Punjab");
  function themeClickHandler(themeType) {
    setTheme(themeType);
  }
  return (
    <div className="App" style={{}}>
      <header
        style={{
          backgroundImage:
            "url(https://as1.ftcdn.net/v2/jpg/02/54/20/88/1000_F_254208823_NXcV5RCcWJ1vgSuWjhPqIpPmqXIyBrDO.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          padding: "1rem",
          margin: "0px auto"
        }}
      >
        <h1
          style={{
            borderRadius: "0.5rem",
            color: "white",
            padding: "0.5rem  1rem"
          }}
        >
          Food recommendations of states
        </h1>
        <p
          style={{
            fontSize: "smaller",
            color: "white"
          }}
        >
          Select states given below to know know about the famous foods..
        </p>
        <div>
          {themes.map((theme) => (
            <button
              onClick={() => themeClickHandler(theme)}
              style={{
                cursor: "pointer",
                borderRadius: "0.5rem",
                background: "black",
                padding: "0.5rem  1rem",
                border: "1px solid white",
                color: "white",
                fontWeight: "bold",
                margin: "1rem 0.5rem"
              }}
            >
              {theme}
            </button>
          ))}
        </div>
      </header>
      <div
        style={{
          textAlign: "left",
          padding: "1rem ",
          margin: "auto"
        }}
      >
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {places[themeType].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "0.5rem 1rem",
                border: "1px solid grey",
                width: "auto",
                margin: "1rem 3rem",
                backgroundColor: "lightgoldenrodyellow",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <h2> {place.name} </h2>
              <small style={{ paddingBottom: "2px" }}>
                {" "}
                Rationg: {place.rating}{" "}
              </small>
              <p> {place.about} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
