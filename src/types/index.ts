import { ActionTypes, EntityTypes, RequestCodes } from "./enums";

export interface RequestPayload {
  entity: EntityTypes;
  action: ActionTypes;
  options: RequestPayloadOptions | {};
}

export interface RequestPayloadOptions {
  code: RequestCodes;
}

export interface RequestPayloadOptionsModified {
  code?: RequestCodes;
  rUserId: string;
}

export interface IBasicObject {
  [key: string]: any;
}
