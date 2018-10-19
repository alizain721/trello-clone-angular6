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
  readOnly:any = []
  butons:any = []
  message:string = ''
  displayTextArea:boolean = false;
  currentMsg:string = ''
  editedText:string = ''

  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'))
    });
  }

  add() {
    this.boards.push(this.currentMsg);
    this.readOnly.push(true)
    this.butons.push(false)
    this.dataservice.changeMessage(this.currentMsg)
    this.displayTextArea = false
    this.currentMsg = ''
  }

  toggle() {
    this.displayTextArea = !this.displayTextArea
    this.currentMsg = ''
  }

  edit(index) {
    this.readOnly[index] = false
    this.butons[index] = true

  }

  save(index) {
    this.boards[index] = this.editedText
    this.editedText = ''
    this.displayTextArea = false
    this.readOnly[index] = true
    this.butons[index] = false
  }

  onKey(event) {this.editedText = event.target.value}

}
