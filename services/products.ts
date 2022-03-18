export function getProducts<T>(): Promise<T> {
  return fetch("/api/products", {method: "GET"}).then((res) => res.json());
}
