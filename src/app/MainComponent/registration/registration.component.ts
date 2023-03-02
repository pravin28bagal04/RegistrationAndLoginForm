import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DistrictService } from 'src/app/ApiServices/district.service';
import { HintquestionService } from 'src/app/ApiServices/hintquestion.service';
import { IdproofService } from 'src/app/ApiServices/idproof.service';
import { RegTypeService } from 'src/app/ApiServices/reg-type.service';
import { RegisterService } from 'src/app/ApiServices/register.service';
import { StatesService } from 'src/app/ApiServices/states.service';
import { TehsilService } from 'src/app/ApiServices/tehsil.service';
import { Register } from 'src/app/DataModels/register.models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiRegister: RegisterService, private reg_type: RegTypeService,
    private state_data: StatesService, private district: DistrictService, private tehsil: TehsilService, private idproof: IdproofService,
    private hintQuestion: HintquestionService, private route: Router) { }

  formRegister!: FormGroup;
  registeredUsers: any = [];
  registrationObj: Register = new Register;
  showRegister: boolean = true;
  showUpdate: boolean = false;
  reg_type_data: any = [];
  states_data: any;
  district_data: any;
  tehsil_data: any;
  idproof_data: any = [];
  hintQues_data: any = [];
  submitted = false;
  selectedState: any;
  selectedDistrict: any;

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      reg_type: [null, Validators.compose([Validators.required])],
      fname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      mname: [null, Validators.compose([Validators.minLength(4)])],
      lname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      buildingdet: [null, Validators.compose([Validators.minLength(5)])],
      street: [null, Validators.compose([Validators.minLength(5)])],
      city: [null, Validators.compose([Validators.minLength(4)])],
      pincode: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
      state: [null, Validators.compose([Validators.required])],
      district: [null, Validators.compose([Validators.required])],
      tehsil: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      mobile_no: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      idproof: [null, Validators.compose([Validators.required])],
      idproofno: [null, Validators.compose([Validators.required])],
      uid: [null, Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])],
      username: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
      userpassword: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
      hintqiestionid: [null, Validators.compose([Validators.required])],
      hintquestans: [null, Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    this.allRegistrations();
    this.getAllRegType();
    this.getAllStates();
    this.getAllIDProof();
    this.getAllHintQuestion();

  }

  get registerFormControl() {
    return this.formRegister.controls;
  }
  onReset(): void {
    this.submitted = false;
    this.formRegister.reset();

    this.route.navigate(['/register']);
    this.showRegister = true;
    this.showUpdate = false;
  }
  register(data: any) {
    this.submitted = true;
    if (this.formRegister.invalid) {
      return;
    }
    //console.log(data);
    this.showRegister = true;
    this.showUpdate = false;
    this.apiRegister.register(data)
      .subscribe({
        next: (res) => {
          alert('Registration successful...');
          this.formRegister.reset();
          this.allRegistrations();
          this.submitted = false;
        }
      })
  }

  allRegistrations() {
    this.apiRegister.getAllRegistration()
      .subscribe({
        next: (res) => {
          this.registeredUsers = res;
        }
      })
  }

  editRegister(data: any) {
    console.log(data);
    this.showRegister = false;
    this.showUpdate = true;
    this.formRegister.controls['reg_type'].setValue(data.reg_type);
    this.formRegister.controls['fname'].setValue(data.fname);
    this.formRegister.controls['mname'].setValue(data.mname);
    this.formRegister.controls['lname'].setValue(data.lname);
    this.formRegister.controls['buildingdet'].setValue(data.buildingdet);
    this.formRegister.controls['street'].setValue(data.street);
    this.formRegister.controls['city'].setValue(data.city);
    this.formRegister.controls['pincode'].setValue(data.pincode);
    this.formRegister.controls['state'].setValue(data.state);
    this.formRegister.controls['district'].setValue(data.district);
    this.formRegister.controls['tehsil'].setValue(data.tehsil);
    this.formRegister.controls['email'].setValue(data.email);
    this.formRegister.controls['mobile_no'].setValue(data.mobile_no);
    this.formRegister.controls['idproof'].setValue(data.idproof);
    this.formRegister.controls['idproofno'].setValue(data.idproofno);
    this.formRegister.controls['uid'].setValue(data.uid);
    this.formRegister.controls['username'].setValue(data.username);
    this.formRegister.controls['userpassword'].setValue(data.userpassword);
    this.formRegister.controls['hintqiestionid'].setValue(data.hintqiestionid);
    this.formRegister.controls['hintquestans'].setValue(data.hintquestans);
    this.registrationObj.id = data.id;
  }

  updateRegister(data: any) {
    this.submitted = true;
    if (this.formRegister.invalid) {
      return;
    }
    this.registrationObj.reg_type = this.formRegister.value.reg_type;
    this.registrationObj.fname = this.formRegister.value.fname;
    this.registrationObj.mname = this.formRegister.value.mname;
    this.registrationObj.lname = this.formRegister.value.lname;
    this.registrationObj.buildingdet = this.formRegister.value.buildingdet;
    this.registrationObj.street = this.formRegister.value.street;
    this.registrationObj.city = this.formRegister.value.city;
    this.registrationObj.pincode = this.formRegister.value.pincode;
    this.registrationObj.state = this.formRegister.value.state;
    this.registrationObj.district = this.formRegister.value.district;
    this.registrationObj.tehsil = this.formRegister.value.tehsil;
    this.registrationObj.email = this.formRegister.value.email;
    this.registrationObj.mobile_no = this.formRegister.value.mobile_no;
    this.registrationObj.idproof = this.formRegister.value.idproof;
    this.registrationObj.idproofno = this.formRegister.value.idproofno;
    this.registrationObj.uid = this.formRegister.value.uid;
    this.registrationObj.username = this.formRegister.value.username;
    this.registrationObj.userpassword = this.formRegister.value.userpassword;
    this.registrationObj.hintqiestionid = this.formRegister.value.hintqiestionid;
    this.registrationObj.hintquestans = this.formRegister.value.hintquestans;
    this.apiRegister.updateRegistration(this.registrationObj.id, this.registrationObj)
      .subscribe({
        next: (res) => {
          alert("Registration Update successfully..");
          this.formRegister.reset();
          this.allRegistrations();
          this.submitted = false;
        }
      })

  }

  deleteRegistration(id: any) {
    this.apiRegister.deleteRegistration(id)
      .subscribe({
        next: (res) => {
          alert("Registration Deleted...");
          this.allRegistrations();
        }
      })
  }

  getAllRegType() {
    this.reg_type.getAllRegType().subscribe({
      next: (res) => {
        this.reg_type_data = res;
      }
    })
  }

  getAllStates() {
    this.state_data.getAllStates().subscribe({
      next: (res) => {
        this.states_data = res;
      }
    })
  }

  onStateChange(e: any) {
    this.selectedState = e.target.value;
    this.district.getDistrictByStateID(this.selectedState).subscribe(
      (res: any) => {
        this.district_data = res;
      }
    )
  }

  onDistrictChange(e: any) {
    this.selectedDistrict = e.target.value;
    this.tehsil.getTehsilByStateID(this.selectedDistrict).subscribe(
      (res: any) => {
        this.tehsil_data = res;
      }
    )
  }


  getAllDistrict() {
    this.district.getAllDistricts().subscribe({
      next: (res) => {
        //console.log(res);
        //this.district_data = res;
      }
    })
  }

  getAllTehsil() {
    this.tehsil.getAllTehsils().subscribe({
      next: (res) => {
        //console.log(res);
        //this.tehsil_data = res;
      }
    })
  }
  getAllIDProof() {
    this.idproof.getAllIDProof().subscribe({
      next: (res) => {
        //console.log(res);
        this.idproof_data = res;
      }
    })
  }

  getAllHintQuestion() {
    this.hintQuestion.getAllHintQuestion().subscribe({
      next: (res) => {
        //console.log(res);
        this.hintQues_data = res;
      }
    })
  }
}
