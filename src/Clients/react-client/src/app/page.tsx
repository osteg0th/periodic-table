import { Api } from "@/api/chemicalElementsApi";
import Image from "next/image";

async function Elements() {
  const elements = await Api.getAll();

  return (
    <div>
      {elements.map((element, index) => (
        <div key={index}>{element.name}</div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <section>
      <Elements/>
    </section>
  );
}
