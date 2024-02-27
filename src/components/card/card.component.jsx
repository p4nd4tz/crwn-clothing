import CardItem from "./card-item.component";

const cards = [
  {
    id: 1,
    title: "hats",
    image: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    image: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    image:
      "https://images.pexels.com/photos/7501135/pexels-photo-7501135.jpeg?cs=srgb&dl=pexels-jonathan-pagaoa-7501135.jpg&fm=jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    image: "https://i.ibb.co/7CQVJNm/blue-tank.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    image: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
    route: "shop/mens",
  },
];

const Card = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {cards.slice(0, 3).map((card) => (
            <CardItem key={card.id} item={card} />
        ))}
      </div>
      <div className="my-5 flex gap-5">
        {cards.slice(3).map((card) => (
          <CardItem key={card.id} item={card} className={`w-1/2`}/>
        ))}
      </div>
    </>
  );
};

export default Card;
