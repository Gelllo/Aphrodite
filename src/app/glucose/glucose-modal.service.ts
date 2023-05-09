import { Injectable } from '@angular/core';
import { GlucoseModalComponent } from './glucose-modal/glucose-modal.component';

@Injectable({
  providedIn: 'root'
})
export class GlucoseModalService {
  private modal: GlucoseModalComponent;

  add(modal: GlucoseModalComponent) {
      this.modal = modal;
  }

  // remove() {
  //     this.modal.ngOnDestroy();
  // }

  // open() {
  //     this.modal.open();
  // }

  // close() {
  //     this.modal.close();
  // }
}
