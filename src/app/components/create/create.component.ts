import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  newQuick(){
    this.router.navigate(['quick']);
  }

  newCustom(){
    this.router.navigate(['custom']);
  }

}
