// vì là type nó ko phải là giá trị nên ko sử dụng split như JS đc, mà phải dùng lib ts-toolbelt
import { String, Union } from "ts-toolbelt";

const query = `/home?name=phandat&age=21`;
//kết quả mong muốn
// const objQueryResult = {
//   name: "phandat",
//   age: 21,
// };

type Query = typeof query;
type SecondQueryPart = String.Split<Query, "?">[1]; // tách ra `/home?name=phandat&age=21` ["/home", "name=phandat&age=21" ]
//  "name=phandat&age=21"
type QueryElements = String.Split<SecondQueryPart, "&">; // ["name=phandat", "age=21" ]

type QueryParam = {
  //QueryElements là 1 cái mảng, thì Q in nó sẽ loop qua từng phần tử trong cái  QueryElements[number] này, [number]  là index trong QueryElements
  [Q in QueryElements[number]]: {
    [K in String.Split<Q, "=">[0]]: String.Split<Q, "=">[1]; // K in tức loop qua những cái ở trong Q
  };
}[QueryElements[number]]; // nó sẽ hiểu là nó sẽ loop qua ["name=phandat", "age=21" ]

const objQueryResults: Union.Merge<QueryParam>;
