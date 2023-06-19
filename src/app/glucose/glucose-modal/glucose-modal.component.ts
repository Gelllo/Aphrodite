import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GlucoseModalService } from '../glucose-modal.service';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Glucose } from '../glucose';
import { GlucoseService } from '../glucose.service';
//import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-glucose-modal',
  templateUrl: './glucose-modal.component.html',
  standalone: true,
  //imports: [NgbDatepickerModule, ReactiveFormsModule],
  styleUrls: ['./glucose-modal.component.css'],
})
export class GlucoseModalComponent implements AfterViewInit{
  @ViewChild('content') modalRef: TemplateRef<any>;

  closeResult = '';

  constructor(
     private glucoseService: GlucoseService,
       private route: ActivatedRoute,
        private router: Router
) {
}
  ngAfterViewInit(): void {
    console.log(this.modalRef);
    this.open();
  }

	open() {
    // console.log(this.modalRef);
		// this.modalService.open(this.modalRef, { ariaLabelledBy: 'modal-basic-title' }).result.then(
		// 	(result) => {
		// 		this.closeResult = `Closed with: ${result}`;
		// 	},
		// 	(reason) => {
		// 		this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		// 	},
		// );
	}

	private getDismissReason(reason: any): string {
		// if (reason === ModalDismissReasons.ESC) {
		// 	return 'by pressing ESC';
		// } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		// 	return 'by clicking on a backdrop';
		// } else {
		// 	return `with: ${reason}`;
		// }
    return "";
	}

  glucoseForm:FormGroup;
  editMode = false;
  id: number;

  onSubmit(){
    const newGlucoseRecord = new Glucose(
      this.glucoseForm.value['glucoseLevel'],
      this.glucoseForm.value['dateRegistered'],
      this.glucoseForm.value['color'],
    )

    if(this.editMode){

      this.glucoseService.updateGlucoseRecord(this.id, newGlucoseRecord);
    }
    else{
      this.glucoseService.addGlucoseRecord(newGlucoseRecord);
    }

    // this.close();
  }

  private initForm(){
    let glucoseLevel = '';
    let dateRecorded = '';

    if(this.editMode){
      const glucoseRecord = this.glucoseService.getGlucoseRecord(this.id);
      glucoseLevel = glucoseRecord.glucoseLevel.toString();
      dateRecorded = glucoseRecord.dateRecorded.toDateString();
    }

    this.glucoseForm = new FormGroup({
      'glucoseLevel': new FormControl(glucoseLevel, Validators.required),
      'dateRecorded': new FormControl(dateRecorded, Validators.required),
    })
  }

  // open() {
  //     this.element.style.display = 'block';
  //     document.body.classList.add('modal-open');
  //     this.isOpen = true;
  //     this.element;
  // }

  // close() {
  //   this.element.style.display = 'none';
  //   document.body.classList.remove('modal-open');
  //   this.isOpen = false;
  // }
}
