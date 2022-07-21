export interface IUserRepository {
  get<T>(id: string): Promise<T>;
  getAll<T>(): Promise<T[]>;
  create<T>(): Promise<T>;
}
