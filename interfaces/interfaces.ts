export interface ICharacter {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}

export interface IInitialState {
  characters: ICharacter[];
  loading: boolean;
  error: string | null;
}

export interface ICharacterResponse {
  results: ICharacter[];
}
