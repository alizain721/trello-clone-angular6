import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../core/services/data/data.service'

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  username:string = ''
  boardTitle:string = 'To Do'
  boards:any = []
  message:string = ''

  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });
  }

  add() {
    this.boards.push('');
    this.dataservice.changeMessage('Update View');
  }

}
