export enum FallbackType {
  NoResult = 'no-result',
  Error = 'error',
}

export interface FallbackProps {
  type: FallbackType;
  title: string;
  subTitle: string;
}
