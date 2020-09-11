import { BaseNode } from "./parse";

export type SupportedDataTypeNames = 'string' | 'boolean' | 'number' | 'null' | 'array' | 'oneOf' | 'object' | 'unknown';
export type ObjectGetFunction = (path: string) => BaseNode
