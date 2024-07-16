import { ChemicalElement } from "@/api/chemicalElementsApi";
import { FC } from "react";

export const DetailedElement: FC<DetailedElementType> = ({ element }) => {
  return(
    <div>This is detailed view</div>
  )
};

export type DetailedElementType = {
  element?: ChemicalElement;
};
