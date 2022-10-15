import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  constructor(private httpRequests:HttpClient) { }
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
  
}
// export const uploadFile = async (file) => {
// 	const CLOUDINARY_NAME = "truongnqph14659"
// 	const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`
// 	const CLOUDINARY_PRESET = "tvgpmy7n"
// 	const formData = new FormData()
// 	formData.append("file", file)
// 	formData.append("upload_preset", CLOUDINARY_PRESET)
// 	// const data = await fetch(CLOUDINARY_API, {
// 	// 	method: "POST",
// 	// 	body: formData,
// 	// })
// 	// const data_res = await data.json()

// 	// return data_res
// 	return axios({
// 		method: "post",
// 		url: CLOUDINARY_API,
// 		data: formData,
// 	})
// }
