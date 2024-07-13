export type ChemicalElement = {
//   id: number;
  name: string;
  symbol: string;
  phase: string;
  number: number;
  group: number;
  period: number;
};

export type ChemicalElementsApi = {
  getAll: () => Promise<ChemicalElement[]>;
  getByNumber: (id: number) => Promise<ChemicalElement>;
};

const getAll = async () => {
  const result = await fetch("http://localhost:5255/elements", {
  method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await result.json()) as ChemicalElement[];
  return data;
};

const getByNumber = async (id: number) => {
  const result = await fetch("http://localhost:5255/elements/" + id);
  var data = await result.json();
  return data;
};

export const Api: ChemicalElementsApi = {
    getAll,
    getByNumber
}
