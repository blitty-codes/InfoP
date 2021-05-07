import { IImage } from './IImage'

export default interface IFilmData {
  image: IImage,
  id: number,
  title: string,
  rank: number,
  authors: string,
  year: number,
}
