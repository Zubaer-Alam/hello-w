const Card = ({ offer }) => {
  console.log(offer);

  return (
    <>
      <div className="glass bg-[#000000b3] rounded-xl overflow-hidden display-flex py-4 h-96 mx-auto w-full relative">
        <div className="bonus-card my-6 text-white text-left p-4">
          <h2 className="text-xl font-bold  text-center animate-float uppercase">
            {offer.title}
          </h2>
          <div className="">
            <div className="flex flex-col">
              <iframe src={offer.image}></iframe>
            </div>
            <p className="text-gray-300 ">{offer.description}</p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Card;
