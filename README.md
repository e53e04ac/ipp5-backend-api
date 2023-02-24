# ipp5-backend-api

~~~~~ sh
npm install e53e04ac/ipp5-backend-api
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["express"]);
    B_1(["express-rate-limit"]);
    B_2(["express-slow-down"]);
    B_3(["file-entry-native"]);
    B_4(["hold"]);
    B_5(["ipp5-bookshelf-reader"]);
    B_6(["ipp5-bookshelf-reader-router"]);
    B_7(["ipp5-token-audience"]);
    B_8(["joi"]);
  end;
  subgraph "devDependencies";
    B_9(["@types/express"]);
    B_10(["@types/express-slow-down"]);
    B_11(["@types/node"]);
    B_12(["file-entry"]);
    B_13(["ipp5-types"]);
  end;
  subgraph "github";
    C_3(["e53e04ac/file-entry-native\n9e1eedb68cfb029588967f11818997ded7756655"]);
    C_4(["e53e04ac/hold\n6845a848f97733b8cd8a34bfc03c3bf040818aa8"]);
    C_5(["e53e04ac/ipp5-bookshelf-reader\nc6ebadae2431a1b654fc3b1d99a9a5ad9221c9e6"]);
    C_6(["e53e04ac/ipp5-bookshelf-reader-router\n9f439a51edb3c1404eb39aba9c3ebb6c181494bf"]);
    C_7(["e53e04ac/ipp5-token-audience\naf74e9349b8032ff8e049beb15d2829b554ae059"]);
    C_12(["e53e04ac/file-entry\na15e61ae257f72be757cce2018bc2e2a6ff1962f"]);
    C_13(["e53e04ac/ipp5-types\n82577500bdeaa45ca281669d5ed3d3850c4376e8"]);
  end;
  subgraph "npmjs";
    C_0(["express\n4.18.2"]);
    C_1(["express-rate-limit\n6.7.0"]);
    C_2(["express-slow-down\n1.5.0"]);
    C_8(["joi\n17.8.3"]);
    C_9(["@types/express\n4.17.17"]);
    C_10(["@types/express-slow-down\n1.3.2"]);
    C_11(["@types/node\n18.14.1"]);
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
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  B_7 ----> C_7;
  B_8 ----> C_8;
  B_9 ----> C_9;
  B_10 ----> C_10;
  B_11 ----> C_11;
  B_12 ----> C_12;
  B_13 ----> C_13;
  click C_0 "https://www.npmjs.com/package/express/v/4.18.2";
  click C_1 "https://www.npmjs.com/package/express-rate-limit/v/6.7.0";
  click C_2 "https://www.npmjs.com/package/express-slow-down/v/1.5.0";
  click C_3 "https://github.com/e53e04ac/file-entry-native/tree/9e1eedb68cfb029588967f11818997ded7756655";
  click C_4 "https://github.com/e53e04ac/hold/tree/6845a848f97733b8cd8a34bfc03c3bf040818aa8";
  click C_5 "https://github.com/e53e04ac/ipp5-bookshelf-reader/tree/c6ebadae2431a1b654fc3b1d99a9a5ad9221c9e6";
  click C_6 "https://github.com/e53e04ac/ipp5-bookshelf-reader-router/tree/9f439a51edb3c1404eb39aba9c3ebb6c181494bf";
  click C_7 "https://github.com/e53e04ac/ipp5-token-audience/tree/af74e9349b8032ff8e049beb15d2829b554ae059";
  click C_8 "https://www.npmjs.com/package/joi/v/17.8.3";
  click C_9 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click C_10 "https://www.npmjs.com/package/@types/express-slow-down/v/1.3.2";
  click C_11 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click C_12 "https://github.com/e53e04ac/file-entry/tree/a15e61ae257f72be757cce2018bc2e2a6ff1962f";
  click C_13 "https://github.com/e53e04ac/ipp5-types/tree/82577500bdeaa45ca281669d5ed3d3850c4376e8";
~~~~~

~~~~~ mermaid
graph RL;
  M["index.mjs"]
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
  M["index.d.ts"]
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
