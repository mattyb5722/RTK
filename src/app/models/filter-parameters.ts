export class FilterParameters<T> {
  constructor(public attribute: keyof T, public value: T[keyof T]) {}
}
