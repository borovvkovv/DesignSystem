export enum TextColorType {
  Text,
  BackGround,
}

export interface IColorText {
  text: string;
  isColored: boolean;
  colorType?: TextColorType;
}