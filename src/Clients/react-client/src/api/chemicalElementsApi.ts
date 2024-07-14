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
  var uri = process.env.API_BASE_URL + "/elements";
  const result = await fetch(uri, {
  method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await result.json()) as ChemicalElement[];
  return data;
};

const getByNumber = async (id: number) => {
  var uri = process.env.API_BASE_URL + "/elements/" + id;
  const result = await fetch(uri);
  var data = await result.json();
  return data;
};

export const Api: ChemicalElementsApi = {
    getAll,
    getByNumber
}
