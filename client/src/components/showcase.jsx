import ShowcaseButton from "./buttons/showcaseButton";

const Showcase = () => {
  return (
    <div className="relative flex h-[80vh] w-full items-center justify-center">
      {/* Background with Overlay */}
      <div
        className="relative flex h-full w-full flex-col items-center justify-center gap-4 bg-cover bg-center p-4 text-center before:absolute before:inset-0 before:bg-black/70 before:content-['']"
        style={{ backgroundImage: "url('/bgs.png')" }}
      >
        {/* Content */}
        <img
          className="relative w-[60%]"
          src="/shoebox_icon.png"
          alt="Shoebox Icon"
        />
        <h1 className="relative text-2xl font-bold text-white">
          Showcase Title
        </h1>
        <ShowcaseButton />
      </div>
    </div>
  );
};

export default Showcase;
