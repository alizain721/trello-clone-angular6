import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service'

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
	boardTitle:string = 'To Do';
  boards:any = [];
  message:string = '';
  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }

  add() {
    this.boards.push('');
    this.dataservice.changeMessage('Update View');
  }

}
