function Card() {
  return (
    <div className="bg-white cursor-pointer w-87 h-60 rounded-lg">
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg"
          alt="Headphones"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
          +
        </div>
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light m-1">Headphones</span>
        <span className="text-lg font-medium">$300</span>
      </p>
    </div>
  );
}
export default Card;
