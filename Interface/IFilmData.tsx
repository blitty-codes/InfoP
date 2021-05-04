import { IImage } from './IImage'

export interface IFilmData {
  image: IImage,
  id: number,
  title: string,
  rank: number,
  authors: string,
  year: number,
}
