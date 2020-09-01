import {Student} from './student'
export class Course {
    name:string;
    /**
     * Valor do curso em FLOAT.
     */
    price:number;
    /**
     * Duração em ANOS do curso.
     */
    duration:number;
    students:Student[]
}
