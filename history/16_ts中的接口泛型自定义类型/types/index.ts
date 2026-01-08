

// 定义一个接口，限制Person对象的结构
export interface PersonInter {
  id: string
  name: string;
  age: number;
}

// 自定义类型           <> ==> 泛型
// export type Persons= Array<PersonInter>
export type Persons=PersonInter[]
