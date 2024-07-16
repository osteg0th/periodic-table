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
    <div className="space-y-4">
      <div className="grid grid-cols-18 grid-rows-7 gap-1 justify-center w-5/6 mx-auto py-2 px-6">
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
        <div className="col-start-4 col-end-11 row-start-1 row-end-3">
          {/* <DetailedElement element={selectedElement}/> */}
        </div>
      </div>

      <div className="grid grid-cols-18 grid-rows-2 gap-2 justify-center w-4/6 mx-auto">
        {additionalElements.map((element, index) => {
          var row = element.category == "lanthanide" ? 1 : 2;
          return <TableElement key={index} element={element} row={row} />;
        })}
      </div>
    </div>
  );
}
