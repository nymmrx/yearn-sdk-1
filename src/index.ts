/**
 * Welcome to the Yearn SDK documentation.
 *
 * ## Yearn namespace
 *
 * [[Yearn]] is a wrapper for all the services and interfaces of the SDK.
 *
 * ### Interfaces
 *
 * - [[VaultInterface]] asset aggregation for yearn's v1 & v2 vaults.
 * - [[IronBankInterface]] asset aggregation form iron bank products.
 * - [[TokenInterface]] utility function for ERC20 and balances.
 * - [[EarningsInterface]] historical earnings.
 *
 * ### Services
 *
 * SDK is divided in services representing the different data sources for
 * yearn products and the access method used to read / write from them.
 *
 * - [[LensService]]: provides access to yearn's assets and user position.
 * -→ [[RegistryV2Adapter]]: adapter of V2 vaults.
 * -→ [[IronBankAdapter]]: adapter of iron bank assets.
 * - [[OracleService]]: pricing engine used for calculations.
 * - [[ZapperService]]: interaction with zapper public API.
 * - [[VisionService]]: interaction with yearn's product stats aggregator.
 * - [[SubgraphService]]: interaction with yearn's subgraph
 *
 * ### Peer dependencies
 *
 * SDK requires several dependencies from the ethers.js project.
 *
 * @module
 */

// global fetch polyfill
import "cross-fetch/polyfill";

export { ChainId } from "./chain";
export { Context, ContextValue } from "./context";
export { EarningsInterface } from "./interfaces/earnings";
export { IronBankInterface } from "./interfaces/ironbank";
export { TokenInterface } from "./interfaces/token";
export { VaultInterface } from "./interfaces/vault";
export { IronBankAdapter } from "./services/adapters/ironbank";
export { RegistryV2Adapter } from "./services/adapters/registry";
export { LensService } from "./services/lens";
export { OracleService } from "./services/oracle";
export { SubgraphService } from "./services/subgraph";
export { VisionService } from "./services/vision";
export { ZapperService } from "./services/zapper";
export * from "./types";
export { Yearn } from "./yearn";
