import { Api } from "@/api/chemicalElementsApi";
// import "./styles.css"

export async function Elements() {
  const elements = await Api.getAll();

  return (
    <div className="grid">
      {elements.map((element, index) => (
        <div key={index}>{element.name}</div>
      ))}
    </div>
  );
}
