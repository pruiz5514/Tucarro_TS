// To parse this data:
//
//   import { Convert } from "./file";
//
//   const icarros = Convert.toIcarros(json);

export interface Icarros {
    id?:          string;
    img:         string;
    marca:       string;
    modelo:      string;
    anio:        number;
    kilometraje: number;
    precio:      number;
    ciudad:      string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toIcarros(json: string): Icarros[] {
        return JSON.parse(json);
    }

    public static icarrosToJson(value: Icarros[]): string {
        return JSON.stringify(value);
    }
}
