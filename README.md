# ipp5-backend-api

~~~~~ sh
npm install e53e04ac/ipp5-backend-api
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-backend-api"]);
  subgraph "dependencies";
    B_0(["express"]);
    B_1(["express-rate-limit"]);
    B_2(["express-slow-down"]);
    B_3(["e53e04ac/file-entry-native"]);
    B_4(["e53e04ac/hold"]);
    B_5(["e53e04ac/ipp5-bookshelf-reader"]);
    B_6(["e53e04ac/ipp5-bookshelf-reader-router"]);
    B_7(["e53e04ac/ipp5-token-audience"]);
    B_8(["joi"]);
  end;
  subgraph "devDependencies";
    B_9(["@types/express"]);
    B_10(["@types/express-slow-down"]);
    B_11(["@types/node"]);
    B_12(["e53e04ac/file-entry"]);
    B_13(["e53e04ac/ipp5-types"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  A --reference--> B_6;
  A --reference--> B_7;
  A --reference--> B_8;
  A --reference--> B_9;
  A --reference--> B_10;
  A --reference--> B_11;
  A --reference--> B_12;
  A --reference--> B_13;
  click B_0 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_1 "https://www.npmjs.org/package/express-rate-limit/v/6.7.0";
  click B_2 "https://www.npmjs.org/package/express-slow-down/v/1.5.0";
  click B_3 "https://github.com/e53e04ac/file-entry-native/tree/4bbe53dfa25202c8fb2a5865ea3b35a7eab10b07";
  click B_4 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_5 "https://github.com/e53e04ac/ipp5-bookshelf-reader/tree/b47675fc0c1b02db3e880356acd8a479b3d6c61f";
  click B_6 "https://github.com/e53e04ac/ipp5-bookshelf-reader-router/tree/48f1d3abbb4405c8e38ff127141b23f31952e48f";
  click B_7 "https://github.com/e53e04ac/ipp5-token-audience/tree/f9340906019c7ab189ae8a666c47d5c2f9e1987b";
  click B_8 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_9 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_10 "https://www.npmjs.org/package/@types/express-slow-down/v/1.3.2";
  click B_11 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_12 "https://github.com/e53e04ac/file-entry/tree/923119d07163b8f91b6138367a04760041225a06";
  click B_13 "https://github.com/e53e04ac/ipp5-types/tree/f66ddbd49c9601df9aea4cefdbb3e5c3e65427f5";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-backend-api"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:http"
    D0(["Server"]);
  end;
  subgraph "express"
    D1(["default"]);
    D2(["Router"]);
    D11(["Application"]);
    D12(["ErrorRequestHandler"]);
    D13(["RequestHandler"]);
  end;
  subgraph "express-rate-limit"
    D3(["default"]);
  end;
  subgraph "express-slow-down"
    D4(["default"]);
  end;
  subgraph "joi"
    D5(["default"]);
  end;
  subgraph "file-entry-native"
    D6(["FileEntry"]);
  end;
  subgraph "hold"
    D7(["hold"]);
    D15(["Get"]);
  end;
  subgraph "ipp5-bookshelf-reader"
    D8(["Ipp5BookshelfReader"]);
  end;
  subgraph "ipp5-bookshelf-reader-router"
    D9(["Ipp5BookshelfReaderRouter"]);
  end;
  subgraph "ipp5-token-audience"
    D10(["Ipp5TokenAudience"]);
  end;
  subgraph "file-entry"
    D14(["FileEntry"]);
  end;
  subgraph "ipp5-types"
    D16(["Ipp5BackendApiEnvMap"]);
    D17(["Unreadonly"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D6 --import--> C0;
  D7 --import--> C0;
  D8 --import--> C0;
  D9 --import--> C0;
  D10 --import--> C0;
  D0 --import--> C1;
  D11 --import--> C1;
  D12 --import--> C1;
  D13 --import--> C1;
  D2 --import--> C1;
  D14 --import--> C1;
  D15 --import--> C1;
  D8 --import--> C1;
  D9 --import--> C1;
  D10 --import--> C1;
  D16 --import--> C1;
  D17 --import--> C1;
~~~~~
