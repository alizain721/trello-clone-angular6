import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
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
  displayTextArea:boolean = false
  currentMsg:string = ''
  editedText:string = ''
  users:any = ['user1' , 'user2']

  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'))
    })
  }

  add() {
    this.boards.push({'date': Date.now() , 'msg': this.currentMsg, 'task': -1})
    this.readOnly.push(true)
    this.butons.push(false)
    this.dataservice.changeMessage(this.boards)
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

  sortByAlphAsc() {
    this.boards.sort(function(a, b){
      var x = a.msg.toLowerCase()
      var y = b.msg.toLowerCase()
      if (x < y) {return -1}
      if (x > y) {return 1}
      return 0
    })
  }

  sortByAlphDesc() {
    this.boards.sort(function(a, b){
      var x = a.msg.toLowerCase()
      var y = b.msg.toLowerCase()
      if (x > y) {return -1}
      if (x < y) {return 1}
      return 0
    })
  }

  sortByDateAsc() {
    this.boards.sort((a, b) => (a.date) - (b.date))
  }

  sortByDateDesc() {
    this.boards.sort((a, b) => (b.date) - (a.date))
  }

  save(index) {
    this.boards[index].msg = this.editedText
    this.editedText = ''
    this.displayTextArea = false
    this.readOnly[index] = true
    this.butons[index] = false
    this.dataservice.changeMessage(this.boards)

    this.boards.sort((a, b) => (a.date) - (b.date))
  }

  delete (index) {
    this.displayTextArea = false
    this.readOnly[index] = true
    this.butons[index] = false
    this.boards.splice(index,1)

  }

  onKey(event) {
    this.editedText = event.target.value
  }

  assignTask(user , task) {
    this.boards[task]["task"] = this.users[user]
  }
}
