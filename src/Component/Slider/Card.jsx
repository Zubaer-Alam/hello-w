

const Card = () => {
  return (
    <div
      className="h-96 mx-auto rounded-2xl w-full bg-black opacity-70 p-4 relative overflow-hidden shadow-md"
     
    >
      <div
        className="absolute shadow-inner shadow-gray-700 p-4 inset-0 backdrop-filter backdrop-blur-lg bg-opacity-30"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.09)" }}
      >
        <p className="text-white ">Hello</p>
      </div>
    </div>
  );
};

export default Card;
