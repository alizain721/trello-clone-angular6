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
  Doing:any = []
  Done:any = []
  readOnly:any = []
  butons:any = []
  message:string = ''
  displayTextAreaBoard:boolean = false
  displayTextAreaDoing:boolean = false
  displayTextAreaDone:boolean = false
  currentMsg:string = ''
  editedText:string = ''
  users:any = ['user1' , 'user2']

  constructor(private router:Router, private dataservice: DataService, private activatedRoute: ActivatedRoute) {
    if(!localStorage.getItem('username')) {
      this.router.navigate(['/login'])
    }
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'))
    })
  }

  add(list:any) {
    if(list == 'Doing') {
      this.Doing.push({'date': Date.now() , 'msg': this.currentMsg, 'task': -1})
      this.displayTextAreaDoing = false
    }
    else if (list == 'Done') {
      this.Done.push({'date': Date.now() , 'msg': this.currentMsg, 'task': -1})
      this.displayTextAreaDone = false

    }
    else if(list == 'board') {
      this.boards.push({'date': Date.now() , 'msg': this.currentMsg, 'task': -1})
      this.displayTextAreaBoard = false
    }
    this.readOnly.push(true)
    this.butons.push(false)
    let history = []
    history = history.concat(this.boards)
    history = history.concat(this.Doing)
    history = history.concat(this.Done)
    this.dataservice.changeMessage(history)
    this.currentMsg = ''
  }


  toggle(list: string) {
    if(list == 'Doing') {
      this.displayTextAreaDoing = !this.displayTextAreaDoing
    }
    else if (list == 'Done') {
      this.displayTextAreaDone = !this.displayTextAreaDone
      
    }
    else if(list == 'board') {
      this.displayTextAreaBoard = !this.displayTextAreaBoard
    }

    this.currentMsg = ''
  }

  edit(index) {
    this.readOnly[index] = false
    this.butons[index] = true
  }

  sortByAlphAsc() {
    this.boards.sort(function(a, b){
      let x = a.msg.toLowerCase()
      let y = b.msg.toLowerCase()
      if (x < y) {return -1}
      if (x > y) {return 1}
      return 0
    })
  }

  sortByAlphDesc() {
    this.boards.sort(function(a, b){
      let x = a.msg.toLowerCase()
      let y = b.msg.toLowerCase()
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
    this.displayTextAreaBoard = false
    this.readOnly[index] = true
    this.butons[index] = false
    this.dataservice.changeMessage(this.boards)

    this.boards.sort((a, b) => (a.date) - (b.date))
  }

  delete (index) {
    this.displayTextAreaBoard = false
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

  moveAllTasks(list1, list2 ) {
    if(list2 == 'boards') {
      if(list1 == 'Doing') {
        this.Doing = this.Doing.concat(this.boards)
      }
      else if (list1 == 'Done') {
        this.Done = this.Done.concat(this.boards)
      }
      this.boards = []
    }
    else if(list2 == 'Doing') {
      if(list1 == 'boards') {
        this.boards = this.boards.concat(this.Doing)
      }
      else if (list1 == 'Done') {
        this.Done = this.Done.concat(this.Doing)
      }
      this.Doing = []
    }
    else if(list2 == 'Done') {
      if(list1 == 'Doing') {
        this.Doing = this.Doing.concat(this.Done)
      }
      else if (list1 == 'boards') {
        this.boards = this.boards.concat(this.Done)
      }
      this.Done = []
    }
  }
}
