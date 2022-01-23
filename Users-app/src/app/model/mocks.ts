import { User } from "./user.model";

export const USER_DATA : User[] = [{
    FirstName: "Chris",
    LastName: "Hemsworth",
    Company: "Marvel",
    dob: new Date("Dec 21,1965"),
    isWorking: true,
    income: 500000,
    votes: 50,
    imagePath: "../../../assets/img/Chris-Hemsworth-10.jpg",
    comments : []
},
{
    FirstName: "Scarlett",
    LastName: "Johansson",
    Company: "Marvel",
    dob: new Date("Feb 22,1975"),
    isWorking: false,
    income: 600000,
    votes: 40,
    imagePath: "../../../assets/img/Scarlett.jfif",
    comments : [{star : 4,body:"Great Performance",author:"abc@gmail.com"},
                {star : 5,body:"Well Done",author:"xyz@outlook.com"}]
}]

