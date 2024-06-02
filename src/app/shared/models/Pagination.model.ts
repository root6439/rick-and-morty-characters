export interface Pagination<T> {
  info: { count: number; next: string; pages: number; prev: string };
  results: T[];
}
