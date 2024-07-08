// To parse this data:
//
//   import { Convert } from "./file";
//
//   const icarros = Convert.toIcarros(json);
// Converts JSON strings to/from your types
export class Convert {
    static toIcarros(json) {
        return JSON.parse(json);
    }
    static icarrosToJson(value) {
        return JSON.stringify(value);
    }
}
