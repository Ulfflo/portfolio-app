import colours from "../public/colours.jpg";
import Image from "next/image";

export default function Card() {
  return (
    <div className="border border-solid rounded-md w-48 h-72">
      <Image src={colours} className="rounded-t-md" />
      <h2>hello</h2>
      <p></p>
    </div>
  );
}
