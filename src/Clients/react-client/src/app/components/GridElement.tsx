import { ChemicalElement } from "@/api/chemicalElementsApi";

function getColorByBlock(block: string) {
  let result = "";
  switch (block) {
    case "s":
      result = "border-red-500";
      break;
    case "f":
      result = "border-yellow-500";
      break;
    case "d":
      result = "border-green-500";
      break;
    case "p":
      result = "border-cyan-500";
      break;
  }
  return result;
}

export function TableElement(props: {
  element: ChemicalElement;
  row?: number;
  column?: number;
}) {
  const { element, row, column } = props;
  return (
    <div
      className={`text-center
      ${column && "col-start-" + column}
      ${row && "row-start-" + row}
      container

      col-span-1
      row-span-1
      hover:scale-110 duration-300
      flex items-center content-center justify-center
      box-border border-4 ${getColorByBlock(element.block)}

      md:size-16
      lg:size-20
      xl:size-24
      2xl:size-24
      `}
    >
      <div className="size-full">
        {/* <p>group: {element.group}</p> */}
        {/* <p>period: {element.period}</p> */}
        {/* <p>category: {element.category}</p> */}
        <p>{element.atomicNumber}</p>
        <p className="text-3xl">{element.symbol}</p>
        <p className="opacity-0 hover:opacity-100">{element.name}</p>
      </div>
    </div>
  );
}
