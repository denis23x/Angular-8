import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
})
export class StaffComponent implements OnInit {

  title = '';

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }
}
