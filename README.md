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
  click B_3 "https://github.com/e53e04ac/file-entry-native/tree/874175e9fe9373cd4b0ce7d96ef744f2e41898b0";
  click B_4 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_5 "https://github.com/e53e04ac/ipp5-bookshelf-reader/tree/4191393917542248f31d9f2e69e412c034530d70";
  click B_6 "https://github.com/e53e04ac/ipp5-bookshelf-reader-router/tree/3b059ad78291ff05ff437215a0d6e11859148995";
  click B_7 "https://github.com/e53e04ac/ipp5-token-audience/tree/f16ec35990b0d48ef04a377a982694a18e5f8864";
  click B_8 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_9 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_10 "https://www.npmjs.org/package/@types/express-slow-down/v/1.3.2";
  click B_11 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_12 "https://github.com/e53e04ac/file-entry/tree/54166105381939e5a1c4dee0af1f44705e5f44bc";
  click B_13 "https://github.com/e53e04ac/ipp5-types/tree/ef144d850d518b40703ea085cb940b3ec452bde2";
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.mjs"])
  subgraph "node:http";
    B_0_0(["Server"]);
  end;
  subgraph "express";
    B_1_0(["default"]);
    B_1_1(["Router"]);
  end;
  subgraph "express-rate-limit";
    B_2_0(["default"]);
  end;
  subgraph "express-slow-down";
    B_3_0(["default"]);
  end;
  subgraph "joi";
    B_4_0(["default"]);
  end;
  subgraph "file-entry-native";
    B_5_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_6_0(["hold"]);
  end;
  subgraph "ipp5-bookshelf-reader";
    B_7_0(["Ipp5BookshelfReader"]);
  end;
  subgraph "ipp5-bookshelf-reader-router";
    B_8_0(["Ipp5BookshelfReaderRouter"]);
  end;
  subgraph "ipp5-token-audience";
    B_9_0(["Ipp5TokenAudience"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_1_1;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
  A ----> B_7_0;
  A ----> B_8_0;
  A ----> B_9_0;
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.d.ts"])
  subgraph "node:http";
    B_0_0(["Server"]);
  end;
  subgraph "express";
    B_1_0(["Application"]);
    B_1_1(["ErrorRequestHandler"]);
    B_1_2(["RequestHandler"]);
    B_1_3(["Router"]);
  end;
  subgraph "file-entry";
    B_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_3_0(["Get"]);
  end;
  subgraph "ipp5-bookshelf-reader";
    B_4_0(["Ipp5BookshelfReader"]);
  end;
  subgraph "ipp5-bookshelf-reader-router";
    B_5_0(["Ipp5BookshelfReaderRouter"]);
  end;
  subgraph "ipp5-token-audience";
    B_6_0(["Ipp5TokenAudience"]);
  end;
  subgraph "ipp5-types";
    B_7_0(["Ipp5BackendApiEnvMap"]);
    B_7_1(["Unreadonly"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_1_1;
  A ----> B_1_2;
  A ----> B_1_3;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
  A ----> B_7_0;
  A ----> B_7_1;
~~~~~
