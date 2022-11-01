import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  private socket: Socket;
  public ListOrders = new BehaviorSubject<any>({}) 
  public url = 'http://localhost:8080'
  constructor(private httpRequests:HttpClient) { 
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']})
    if(localStorage.getItem('host')){
      this.socket.emit('hostIp',JSON.parse(localStorage.getItem('host')).id)
    }
  }
  API = 'http://localhost:8080/api'
  createHost(dataHost:any):Observable<any[]>{
    return this.httpRequests.post<any[]>(`${this.API}/host/signup`,dataHost)
  }
  signinHost(dataHost:any):Observable<any[]>{
    return this.httpRequests.post<any[]>(`${this.API}/host/signin`,dataHost)
  }
  sendImage(file:any):Observable<any[]>{
    const CLOUDINARY_NAME = "truongnqph14659"
    const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`
    const CLOUDINARY_PRESET = "tvgpmy7n"
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", CLOUDINARY_PRESET)
    return this.httpRequests.post<any[]>(CLOUDINARY_API,formData)
  }
  
  getSupplement():Observable<any[]>{
    return this.httpRequests.get<any[]>(`${this.API}/suplements`)
  }
  getSleepingPlaces():Observable<any[]>{
    return this.httpRequests.get<any[]>(`${this.API}/sleeping`)
  }
  getCategorys():Observable<any[]>{
    return this.httpRequests.get<any[]>(`${this.API}/listCategory`)
  }
  getSupplements(listIdSupplements:any):Observable<any[]>{
    return this.httpRequests.post<any[]>(`${this.API}/getsupplements`,listIdSupplements)
  }
  getSleepById(listIdSleeping:any):Observable<any[]>{
    return this.httpRequests.post<any[]>(`${this.API}/sleepingplaces`,listIdSleeping)
  }
  getBathrooms():Observable<any[]>{
    return this.httpRequests.get<any[]>(`${this.API}/bathrooms`)
  }
  getBathroomById(listIdBath:any):Observable<any[]>{
    return this.httpRequests.post<any[]>(`${this.API}/bathrooms`,listIdBath)
  }
  createPro(dataPro:any):Observable<any[]>{
    return this.httpRequests.post<any[]>(`${this.API}/addProduct`,dataPro)
  }
  listOrder(dataHost:any):Observable<any[]>{
    return this.httpRequests.post<any[]>(`${this.API}/order`,dataHost)
  }
  updateOrder(data:any):Observable<any[]>{
    return this.httpRequests.patch<any[]>(`${this.API}/order/${data.id}`,data)
  }
  listOrderNotSeem(data:any):Observable<any[]>{
    return this.httpRequests.post<any[]>(`${this.API}/oderseem`,data)
  }
  connectIpHost(){
     this.socket.emit('hostIp',JSON.parse(localStorage.getItem('host')).id)
  }
  sendOrder(data:any){
    this.socket.emit('sendorder',data)
  }
  NotificationOrder(): Observable<any>{
    return new Observable<any>(observer => {
      this.socket.on('orderresponse', (data) => {
          observer.next(data);
      });
    });
  }

  sendConfirm(data:any){
    this.socket.emit('confirmOrder',data)
  }
  sendCancel(data:any){
    this.socket.emit('cancelOrder',data)
  }
  createOrderFake(data:any):Observable<any[]>{
    return this.httpRequests.post<any[]>(`${this.API}/addorder`,data)
  }
}