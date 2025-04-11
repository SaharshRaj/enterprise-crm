export type CustomerProfile = {
  customerID: number,
  name : string,
  emailId: string,
  phoneNumeber : string,
  purchaseHistory: string[],
  segmentationData: SegmentationData
}

export interface SegmentationData {
  Interest: string,
  Region: string,
  "Purchasing Habits": string
}