
interface ValueObjectProps{
    [index: string]: any
}

export abstract class ValueObject<T extends ValueObjectProps>{

    public props: T

    constructor(props: T) {
        const baseProps = {
            ... props
        }
        this.props = baseProps
    }

    public equal(vo?: ValueObject<T>): boolean{
        if(vo === undefined || vo === null){
            return false
        }
        if (!(vo instanceof ValueObject)) {
            return false;
          }

        if(vo.props === undefined){
            return false;
        }

        return this.deepEqual(vo?.props, this.props)
    }

    public getHashCode(): number {
        const propsString = JSON.stringify(this.props);
        let hash = 0;
        for (let i = 0; i < propsString.length; i++) {
          const char = propsString.charCodeAt(i);
          hash = (hash << 5) - hash + char;
          hash = hash & hash;
        }
        return hash;
      }



    private deepEqual(obj1: any, obj2: any): boolean {
        if (obj1 === obj2) {
          return true;
        }
      
        if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
          return false;
        }
      
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
      
        if (keys1.length !== keys2.length) {
          return false;
        }
      
        for (let key of keys1) {
          if (!this.deepEqual(obj1[key], obj2[key])) {
            return false;
          }
        }
      
        return true;
      }
}