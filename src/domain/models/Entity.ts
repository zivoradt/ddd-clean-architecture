

export abstract class Entity<T extends NonNullable<any>>{
    public _id: T;

    constructor(id: T) {
        this._id  = id;
    }

    public equal(obj: object):boolean{
        return (obj instanceof Entity) && this._id === obj._id
    }

    public getHashCode(): number {
        const propsString = JSON.stringify(this._id);
        let hash = 0;
        for (let i = 0; i < propsString.length; i++) {
          const char = propsString.charCodeAt(i);
          hash = (hash << 5) - hash + char;
          hash = hash & hash;
        }
        return hash;
      }
}
