/*!
    @e53e04ac/ipp5-backend-api/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Server as HttpServer } from 'node:http';

import { Application as ExpressApplication } from 'express';
import { ErrorRequestHandler as ExpressErrorRequestHandler } from 'express';
import { RequestHandler as ExpressRequestHandler } from 'express';
import { Router as ExpressRouter } from 'express';

import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { Ipp5BookshelfReader } from 'ipp5-bookshelf-reader';
import { Ipp5BookshelfReaderRouter } from 'ipp5-bookshelf-reader-router';
import { Ipp5TokenAudience } from 'ipp5-token-audience';
import { Ipp5BackendApiEnvMap } from 'ipp5-types';
import { Unreadonly } from 'ipp5-types';

export declare type ClientInfoParams = {
    readonly clientId: string;
    readonly tenantId: string;
};

export declare type Application = {
    readonly process: Get<NodeJS.Process>;
    readonly env: Get<Ipp5BackendApiEnvMap>;
    readonly backendMountEntry: Get<FileEntry>;
    readonly bookshelfReader: Get<Ipp5BookshelfReader>;
    readonly tokenAudience: Get<Ipp5TokenAudience>;
    readonly healthcheckHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressSlowDown: Get<ExpressRequestHandler>;
    readonly expressRateLimit: Get<ExpressRequestHandler>;
    readonly verifyTokenHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown> & Partial<Unreadonly<ClientInfoParams>>>>;
    readonly bookshelfReaderRouter: Get<Ipp5BookshelfReaderRouter>;
    readonly expressRouter: Get<ExpressRouter>;
    readonly expressNotFound: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressInternalServerError: Get<ExpressErrorRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressApplication: Get<ExpressApplication>;
    readonly httpServer: Get<HttpServer>;
    readonly run: Get<Promise<void>>;
};
