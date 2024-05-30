export interface Pagination<T> {
  count: number;
  next: string;
  pages: number;
  prev: string;
  results: T[];
}
