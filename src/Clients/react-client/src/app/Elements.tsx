import { Api } from "@/api/chemicalElementsApi";

export async function Elements() {
  let elements = (await Api.getAll()).filter(
    (f) => f.category != "actinide" && f.category != "lanthanide"
  );
  return (
    <div className="grid grid-cols-18 grid-rows-7 gap-1 overflow-scroll justify-center">
      {elements.map((element, index) => {

        const className = `text-center
      box-border border-4
      col-start-${element.group}
      row-start-${element.period}
      border-green-500
      container
      min-w-40
      min-h-40
      col-span-1
      row-span-1
      `;

        console.table(element);
        return (
          <div className={className} key={index}>
            <p>number: {element.atomicNumber}</p>
            <p>name: {element.name}</p>
            <p>group: {element.group}</p>
            <p>period: {element.period}</p>
            <p>category: {element.category}</p>
          </div>
        );
      })}
    </div>
  );
}
