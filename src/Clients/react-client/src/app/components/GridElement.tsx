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

function getColorByCategory(category: string) {
  let result = "";
  switch (category) {
    case "diatomic nonmetal":
      result = "border-yellow-500";
      break;
    case "polyatomic nonmetal":
      result = "border-yellow-600";
      break;
    case "alkali metal":
      result = "border-red-500";
      break;
    case "alkaline earth metal":
      result = "border-cyan-500";
      break;
    case "post-transition metal":
      result = "border-blue-600";
      break;
    case "transition metal":
      result = "border-slate-400";
      break;
    case "metalloid":
      result = "border-slate-600";
      break;
    case "noble gas":
      result = "border-violet-700";
      break;
    case "lanthanide":
      result = "border-cyan-700";
      break;
    case "actinide":
      result = "border-green-700";
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
      hover:scale-110 duration-300
      box-border border-4 ${getColorByCategory(element.category)}
      p-1
      `}
    >
      <div className="block w-full text-center leading-none py-px">
        {/* <p>group: {element.group}</p> */}
        {/* <p>period: {element.period}</p> */}
        {/* <p>category: {element.category}</p> */}
        <div>{element.atomicNumber}</div>
        <div className="font-medium text-3xl">{element.symbol}</div>
        <div className="text-s truncate">{element.name}</div>
        <div className="text-xs truncate">{element.category}</div>
      </div>
    </div>
  );
}
