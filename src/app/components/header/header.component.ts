import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { ContactComponent } from '../admin/message/contact/contact.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('nav') nav: any;
  constructor(private MessageService: MessageService) {}
  public waitingMessage: any
  public content:String =''
  public responsevice:any={}
  public nameUser:String=''
  public userSend:any
  public idUserSelecter:String = ''
  ngOnInit(): void {
    this.MessageService.idUserSlected.subscribe((data:any)=>{
      if (data!=='') {
       this.idUserSelecter = data
      }
    })
    this.MessageService.nameUser.subscribe((data)=>{
      if (data) {
        this.nameUser = data
      }
    })
    this.MessageService.Notifications.subscribe((data:any)=>{
      this.MessageService.getAll().subscribe((data)=>{
        this.userSend = Object.values(data.data)
      })
      this.waitingMessage = Object.values(data).filter((item:any)=>item.status == false)
    })
    this.MessageService.onStatusMessage().subscribe((data:any)=>{
      let c:any
      const map = new Map()
      data.data.idMessage.forEach((item:any) => {
        map.set(item,item)
      });
      const m =  this.waitingMessage.filter((items:any)=>items._id !== map.get(items._id))       
      if (this.waitingMessage.length !== 0) {
        this.waitingMessage = m
      }
    })
    this.MessageService.Notification().subscribe((data:any)=>{
      if (data.data.send !== this.idUserSelecter) {
        const b = [...this.waitingMessage,data.data]
        this.waitingMessage = b
      }
    })
  }

  clickHanler() {
    const table = document.querySelector('.dropdown-menu');
    if (table?.classList.contains('active')) {
      table?.classList.remove('active');
    } else {
      table?.classList.add('active');
    }
  }
  Notifications() {
    console.log('1');
  }
}
