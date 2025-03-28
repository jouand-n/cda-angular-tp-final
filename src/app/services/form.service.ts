import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  value(form : FormGroup, key: string) : any {
    return form.get(key)?.value
  }

  // todo
  // onSubmit(form : FormGroup, service: any,  onSucessFn : (service : any) => Response){
  //   if(form.valid){
  //     onSucessFn(service)
  //   }
  // }
}
