const Card = (props: {title:string, description:string}) => {
  return (
    <>
      <div className=" md:h-[320px] p-2 md:w-[350px] w-[280px] border-green-500 border-2 border-solid rounded-lg ">
        <div className="flex justify-center">
        <img src="/pngwing.png" className="w-[200px] " />
        </div>
        <h1 className="text-center font-bold uppercase">{props.title}</h1>
        <p className="text-center font-normal">{props.description}</p>
      </div>
    </>
  );
};

export default Card;
