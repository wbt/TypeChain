/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { DataTypesInputContract } from "./DataTypesInput";
import { DataTypesPureContract } from "./DataTypesPure";
import { DataTypesViewContract } from "./DataTypesView";
import { EventsContract } from "./Events";
import { Name12ManglingContract } from "./Name12Mangling";
import { OverloadsContract } from "./Overloads";
import { PayableContract } from "./Payable";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "DataTypesInput"): DataTypesInputContract;
      require(name: "DataTypesPure"): DataTypesPureContract;
      require(name: "DataTypesView"): DataTypesViewContract;
      require(name: "Events"): EventsContract;
      require(name: "NAME12mangling"): Name12ManglingContract;
      require(name: "Overloads"): OverloadsContract;
      require(name: "Payable"): PayableContract;
    }
  }
}
