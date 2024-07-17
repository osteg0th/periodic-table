import { Api, ChemicalElement } from "@/api/chemicalElementsApi";
import { TableElement } from "./GridElement";

export async function Elements() {
  const elements = await Api.getAll();
  const mainElements = elements.filter(
    (f) => f.category != "actinide" && f.category != "lanthanide"
  );
  const additionalElements = elements.filter(
    (f) => f.category == "actinide" || f.category == "lanthanide"
  );

  return (
    <div className="space-y-4 break-before-avoid break-inside-avoid">
      <div className="grid auto-cols-fr gap-2 px-2 py-6">
        {mainElements.map((element, index) => {
          return (
            <TableElement
              key={index}
              element={element}
              row={element.period}
              column={element.group}
            />
          );
        })}
      </div>

      <div className="grid auto-cols-fr gap-2 px-2 py-6">
        {additionalElements.map((element, index) => {
          var row = element.category == "lanthanide" ? 1 : 2;
          return <TableElement key={index} element={element} row={row} />;
        })}
      </div>
    </div>
  );
}
