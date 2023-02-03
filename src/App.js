import React from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Carousel from "./components/sliders/SliderComponent";
import { SliderData } from "./components/sliders/SliderData";
import ChatButton from "./components/buttons/ChatButton";
import Banner from "./components/banners/Banner";
import CardsTemplate from "./components/partials/CardsTemplate.js";
import CardLogo from './components/partials/img/cards-img/wolburg.png';
import ContactForm from "./components/forms/ContactForm";

function App() {
  const data = SliderData
  const location = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      img: CardLogo,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis, perferendis maiores laboriosam non laudantium fugit voluptatibus eligendi repellat deserunt provident explicabo illo tenetur. Voluptates modi quibusdam magni fugiat voluptatum inventore veniam impedit dignissimos repellendus, iste suscipit voluptas quas temporibus hic error dolorum sed consequuntur?",
      location: "Lagos, Nigeria",
    },
    {
      id: 2,
      img: CardLogo,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis, perferendis maiores laboriosam non laudantium fugit voluptatibus eligendi repellat deserunt provident explicabo illo tenetur. Voluptates modi quibusdam magni fugiat voluptatum inventore veniam impedit dignissimos repellendus, iste suscipit voluptas quas temporibus hic error dolorum sed consequuntur?",
      location: "Lagos, Nigeria",
    },
    {
      id: 3,
      img: CardLogo,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis, perferendis maiores laboriosam non laudantium fugit voluptatibus eligendi repellat deserunt provident explicabo illo tenetur. Voluptates modi quibusdam magni fugiat voluptatum inventore veniam impedit dignissimos repellendus, iste suscipit voluptas quas temporibus hic error dolorum sed consequuntur?",
      location: "Lagos, Nigeria",
    },
    {
      id: 4,
      img: CardLogo,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis, perferendis maiores laboriosam non laudantium fugit voluptatibus eligendi repellat deserunt provident explicabo illo tenetur. Voluptates modi quibusdam magni fugiat voluptatum inventore veniam impedit dignissimos repellendus, iste suscipit voluptas quas temporibus hic error dolorum sed consequuntur?",
      location: "Lagos, Nigeria",
    },
    {
      id: 5,
      img: CardLogo,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis, perferendis maiores laboriosam non laudantium fugit voluptatibus eligendi repellat deserunt provident explicabo illo tenetur. Voluptates modi quibusdam magni fugiat voluptatum inventore veniam impedit dignissimos repellendus, iste suscipit voluptas quas temporibus hic error dolorum sed consequuntur?",
      location: "Lagos, Nigeria",
    },
  ];

  const cards = location.map(data => {
    return <CardsTemplate data={data} key={data.id} styles='rounded-md bg-black text-white text-sm shadow shadow-primary-grey p-2 capitalize' />;
  });

  return (
    <>
      <Header />
      <div className="App">
        <main>
          <Banner />
          <center>
            {" "}
            <div className="text-3xl text-black mt-12">text black</div>
            <h1 className="text-3xl font-bold text-white bg-black">
              {" "}
              white color
            </h1>
            <h1 className="text-3xl font-bold text-primary-green">
              primary-green
            </h1>
            <h1 className="text-3xl font-bold text-primary-blue">
              Primary blue
            </h1>
            <h1 className="text-3xl font-bold text-secondary-green">
              Secondary green
            </h1>
            <h1 className="text-3xl font-bold text-secondary-blue">
              secondary Blue
            </h1>
            <h1 className="text-3xl font-bold bg-secondary-grey">
              GREY BACKGROUND
            </h1>
          </center>
          <Carousel resources={data} />
          <ChatButton />
          <div className="flex flex-wrap space-x-2 space-y-2 w-11/12 mx-auto">
            {cards}
          </div>
          <div className="w-full mt-4">
            <ContactForm />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
