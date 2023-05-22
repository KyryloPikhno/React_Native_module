export interface ICharacter {
  id: number;
  name: string;
  status: string;
  image: string;
}

export interface IInitialState {
  characters: ICharacter[];
  loading: boolean;
  error: string | null;
}
