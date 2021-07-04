export interface ProgressStatus {
  status: ProgressStatusEnum;
  percentage?: number;
  body?: any;
}

export enum ProgressStatusEnum {
  START, COMPLETE, IN_PROGRESS, ERROR
}
