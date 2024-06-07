import { Person } from "./person";
import { Starship } from "./starship";

export interface Entity {
    message: string;
    result: {
      properties: Person | Starship;
      description: string;
      _id: string;
      uid: string;
      __v: number;
    };
}
