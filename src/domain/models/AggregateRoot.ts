import { Entity } from "./Entity";


export abstract class AggregateRoot<T> extends Entity<T>{

    constructor(id: T) {
        super(id);
      }
}