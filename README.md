# ipp5-backend-api

~~~~~ sh
npm install e53e04ac/ipp5-backend-api
~~~~~

~~~~~ mjs
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-backend-api"]);
  B0(["express"]);
  B1(["express-rate-limit"]);
  B2(["express-slow-down"]);
  B3(["e53e04ac/file-entry"]);
  B4(["e53e04ac/file-entry-native"]);
  B5(["e53e04ac/hold"]);
  B6(["e53e04ac/ipp5-bookshelf-reader"]);
  B7(["e53e04ac/ipp5-bookshelf-reader-router"]);
  B8(["e53e04ac/ipp5-token-audience"]);
  B9(["joi"]);
  C0(["@types/express"]);
  C1(["@types/express-slow-down"]);
  C2(["@types/node"]);
  C3(["e53e04ac/ipp5-types"]);
  click B3 href "https://github.com/e53e04ac/file-entry";
  click B4 href "https://github.com/e53e04ac/file-entry-native";
  click B5 href "https://github.com/e53e04ac/hold";
  click B6 href "https://github.com/e53e04ac/ipp5-bookshelf-reader";
  click B7 href "https://github.com/e53e04ac/ipp5-bookshelf-reader-router";
  click B8 href "https://github.com/e53e04ac/ipp5-token-audience";
  click C3 href "https://github.com/e53e04ac/ipp5-types";
  subgraph "e53e04ac/ipp5-backend-api";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
    B4 --import--> A;
    B5 --import--> A;
    B6 --import--> A;
    B7 --import--> A;
    B8 --import--> A;
    B9 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
    C2 --import--> A;
    C3 --import--> A;
  end;
~~~~~
