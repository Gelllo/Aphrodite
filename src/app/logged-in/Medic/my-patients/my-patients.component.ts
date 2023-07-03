import { Component, OnInit } from '@angular/core';
import { User } from '../../Admin/users/users.component';
import { UsersService } from 'src/app/services/Users/users.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit{

  patients: User[];
  patientEmail = new FormControl('');

  constructor(private userService:UsersService){

  }

  ngOnInit(): void {
    this.populateWithPatients();
  }

  populateWithPatients():void{
    this.userService.GetMyPatients().subscribe(
      (x:any)=>{
        console.log(x);
        this.patients = x.patients;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  AddPatient():void{
    this.userService.AddPatient(this.patientEmail.value).subscribe(
      (x:any)=>{
        this.populateWithPatients();
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  deleteRecord(index:any){
    console.log(event);
    this.patients.splice(index, 1);
  }
}
