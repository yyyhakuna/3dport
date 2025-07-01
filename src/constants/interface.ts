export type Card = {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
};

// TitleHeader组件的接口定义
export interface TitleHeaderProps {
  title: string;
  sub: string;
}
export type model = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}
   
