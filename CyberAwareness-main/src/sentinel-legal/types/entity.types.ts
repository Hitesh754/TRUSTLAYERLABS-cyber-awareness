/** Extracted entity from incident narrative or evidence text (regex-only). */
export interface ExtractedEntities {
  upiIds: string[];
  phoneNumbers: string[];
  utrIds: string[];
  ifscCodes: string[];
  urls: string[];
  emails: string[];
  walletAddresses: string[];
}

export interface EntityExtractionResult {
  entities: ExtractedEntities;
  sourceTextLength: number;
}
