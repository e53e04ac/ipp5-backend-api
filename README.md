# ipp5-backend-api

~~~~~ sh
npm install e53e04ac/ipp5-backend-api
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
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
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  A ----> B_8;
  A ----> B_9;
  A ----> B_10;
  A ----> B_11;
  A ----> B_12;
  A ----> B_13;
  click B_0 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_1 "https://www.npmjs.org/package/express-rate-limit/v/6.7.0";
  click B_2 "https://www.npmjs.org/package/express-slow-down/v/1.5.0";
  click B_3 "https://github.com/e53e04ac/file-entry-native/tree/6235b010d480ef2922c4759443e7bf906b55e12b";
  click B_4 "https://github.com/e53e04ac/hold/tree/5dd6f94b8ecd94f98219a7afae52320676380c27";
  click B_5 "https://github.com/e53e04ac/ipp5-bookshelf-reader/tree/42649142c34a71ab48a48ac7492c0ec81415e7ed";
  click B_6 "https://github.com/e53e04ac/ipp5-bookshelf-reader-router/tree/a156b2a975902dc8695b227159fbadffbd8f781b";
  click B_7 "https://github.com/e53e04ac/ipp5-token-audience/tree/be3e37cce369300c256b59f765f8ab79f4a403a1";
  click B_8 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_9 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_10 "https://www.npmjs.org/package/@types/express-slow-down/v/1.3.2";
  click B_11 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_12 "https://github.com/e53e04ac/file-entry/tree/5e7bd3bb6438d7a2d7019e184729b9390342bb7d";
  click B_13 "https://github.com/e53e04ac/ipp5-types/tree/228a79560e81a38fca36baec24e5729d1f36bb9f";
~~~~~

~~~~~ mermaid
graph RL;
  M(["index.mjs"])
  subgraph "node:http";
    I_0_0(["Server"]);
  end;
  subgraph "express";
    I_1_0(["default"]);
    I_1_1(["Router"]);
  end;
  subgraph "express-rate-limit";
    I_2_0(["default"]);
  end;
  subgraph "express-slow-down";
    I_3_0(["default"]);
  end;
  subgraph "joi";
    I_4_0(["default"]);
  end;
  subgraph "file-entry-native";
    I_5_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_6_0(["hold"]);
  end;
  subgraph "ipp5-bookshelf-reader";
    I_7_0(["Ipp5BookshelfReader"]);
  end;
  subgraph "ipp5-bookshelf-reader-router";
    I_8_0(["Ipp5BookshelfReaderRouter"]);
  end;
  subgraph "ipp5-token-audience";
    I_9_0(["Ipp5TokenAudience"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
  M ----> I_8_0;
  M ----> I_9_0;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-api";
    E_0(["type ClientInfoParams"]);
    E_1(["type Application"]);
  end;
  M(["index.d.ts"])
  subgraph "node:http";
    I_0_0(["Server"]);
  end;
  subgraph "express";
    I_1_0(["Application"]);
    I_1_1(["ErrorRequestHandler"]);
    I_1_2(["RequestHandler"]);
    I_1_3(["Router"]);
  end;
  subgraph "file-entry";
    I_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_3_0(["Get"]);
  end;
  subgraph "ipp5-bookshelf-reader";
    I_4_0(["Ipp5BookshelfReader"]);
  end;
  subgraph "ipp5-bookshelf-reader-router";
    I_5_0(["Ipp5BookshelfReaderRouter"]);
  end;
  subgraph "ipp5-token-audience";
    I_6_0(["Ipp5TokenAudience"]);
  end;
  subgraph "ipp5-types";
    I_7_0(["Ipp5BackendApiEnvMap"]);
    I_7_1(["Unreadonly"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_1_2;
  M ----> I_1_3;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
  M ----> I_7_1;
  E_0 ----> M;
  E_1 ----> M;
~~~~~
