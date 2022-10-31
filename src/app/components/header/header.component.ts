import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { ContactComponent } from '../admin/message/contact/contact.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private MessageService: MessageService,private router:Router) {}
  public waitingMessage: any
  public content:String =''
  public responsevice:any={}
  public nameUser:String=''
  public userSend:any
  public idUserSelecter:String = ''
  public currentUserId:any
  public current:any
  ngOnInit(): void {    
    if (this.MessageService.getStorage()) {
      this.nameUser =this.MessageService.getStorage().name
      this.currentUserId = this.MessageService.getStorage().id
      //status User
      this.MessageService.getAll().subscribe((data:any)=>{
        this.current = data.data.find((item:any)=> item._id == this.currentUserId)
        if (this.current.status == "false") {
          this.MessageService.statusUser(this.currentUserId).subscribe((data)=>{
            if (data) {
              console.log(data);
            }
          })
        }
      })
    }
    this.MessageService.idUserSlected.subscribe((data:any)=>{
      if (data!=='') {
       this.idUserSelecter = data
      }
    })
    this.MessageService.getMessage().subscribe((data:any)=>{
      const datas = data.data.filter((item:any)=>{
        return item.sendTo === this.currentUserId&&item.send
      })
      this.MessageService.getAll().subscribe((data)=>{
        this.userSend = Object.values(data.data)
      })
      this.waitingMessage = Object.values(datas).filter((item:any)=>item.status == false)
    })
    this.MessageService.Notifications.subscribe((data:any)=>{
      this.MessageService.getAll().subscribe((data)=>{
        this.userSend = Object.values(data.data)
      })
      this.waitingMessage = Object.values(data).filter((item:any)=>item.status == false)
    })
    this.MessageService.onStatusMessage().subscribe((data:any)=>{
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
    const dropdown = document.querySelector<HTMLElement>('.dropdown-menu a')
    if (table?.classList.contains('active')) {
      table?.classList.remove('active');
    } else {
      table?.classList.add('active');
      if (dropdown.children.length > 4) {
        dropdown.style.overflowY = "scroll";
        dropdown.style.overflowY = "scroll";
        dropdown.style.height = "325px";
        dropdown.style.display = "block";
      }
    }
  }
  Notifications() {
    console.log('1');
  }
  a(){
    console.log('a');
    
  }
  logout(){
    localStorage.clear();
    if (this.MessageService.getStorage()=='') {
        this.MessageService.lougout(this.currentUserId).subscribe((data)=>{
          if (data) {
            this.router.navigate(['/'])
          }
        })
    }    
  }
}
