import { FlipWords } from "@/components/ui/Flipword";

function CommonTitile({ title, word }: { title: string; word: string[] }) {
  return (
    <div className=" flex justify-center gap-2 items-center sm:mt-10 sm:mb-10 mt-4 mb-4">
      <h1 className=" text-gray-100  sm:text-4xl text-2xl font-Kanit font-medium">
        {title}{" "}
      </h1>
      <span className=" sm:text-4xl text-2xl font-semibold font-Kanit bg-gradient-to-r animate-text from-violet-500 via-purple-300 to-violet-400 bg-clip-text text-transparent">
        <FlipWords words={word} />
      </span>
    </div>
  );
}

export default CommonTitile;
