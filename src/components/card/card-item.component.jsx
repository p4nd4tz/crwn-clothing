import { useNavigate } from "react-router-dom";

const CardItem = ({ item, className }) => {
  const { id, image, route, title } = item;

  const navigate = useNavigate();

  const handleNavigate = (route) => navigate(route);

  return (
    <div
      key={id}
      className={`border border-black px-40 py-28 bg-cover bg-no-repeat cursor-pointer 
            flex justify-center text-center items-center ${className}`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => handleNavigate(route)}
    >
      <div className="border-black border-2 bg-white py-4 opacity-80">
        <h3 className="uppercase font-bold text-xl px-16">{title}</h3>
        <p className="uppercase font-semibold text-lg mt-3 w-full">Shop Now</p>
      </div>
    </div>
  );
};

export default CardItem;
