import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CricketService } from '../shared/cricket.service';
import { Cricket } from '../shared/cricket.model';

declare var M: any;

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css'],
  providers: [CricketService]
})
export class CricketComponent implements OnInit {

  constructor(private cricketService: CricketService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCricketList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.cricketService.selectedCricket = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.cricketService.postCricket(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCricketList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.cricketService.putCricket(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCricketList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCricketList() {
    this.cricketService.getCricketList().subscribe((res) => {
      this.cricketService.crickets = res as Cricket[];
    });
  }

  onEdit(emp: Cricket) {
    this.cricketService.selectedCricket = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.cricketService.deleteCricket(_id).subscribe((res) => {
        this.refreshCricketList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
