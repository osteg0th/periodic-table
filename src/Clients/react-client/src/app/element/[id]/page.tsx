import { Api } from "@/api/chemicalElementsApi";
import { FC } from "react";

const Element: FC<{ id: number }> = async ({ id }) => {
  const element = await Api.getByNumber(id);

  return (
    <ul>
      {/* <li>{element.id}</li> */}
      <li>{element.name}</li>
      <li>{element.group}</li>
      <li>{element.number}</li>
      <li>{element.period}</li>
      <li>{element.phase}</li>
      <li>{element.symbol}</li>
    </ul>
  );
};

const ElememntPage: FC<{ params: { id: string } }> = ({ params }) => {
  return (
    <section>
      <h1>This is {params.id} element</h1>
      <Element id={parseInt(params.id)} />
    </section>
  );
};

export default ElememntPage;

// export default function ElementPage({ params }: { params: { id: string } }) {
//   return <h1>This is {params.id} element</h1>;
// }
