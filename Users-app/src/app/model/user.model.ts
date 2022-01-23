import { Comments } from "./comment.model";

export interface User{
  FirstName : string;
  LastName : string;
  dob : Date;
  isWorking : boolean;
  income : number;
  Company : string;
  imagePath : string;
  votes : number;
  comments : Comments[]
}