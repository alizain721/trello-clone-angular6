import { Component, OnInit } from '@angular/core'
import { DataService } from '../../core/services/data/data.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  message:string = ''
  history:any = []
  username = ''
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(message => this.history = message )
    this.username = localStorage.getItem('username')
  }

}
