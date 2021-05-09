import { IImage } from './IImage'

export default interface IFilmData {
  image: IImage,
  id: string,
  title: string,
  rank: number,
  authors: string,
  year: number,
}
