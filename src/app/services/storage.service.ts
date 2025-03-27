import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // pour stocker dans un storage un objet
  // JSON.stringinfy(object)

  // pour extraire un objet d'un JSON
  // JSON.parse(object)

  // localstorage
  setLocal(key: string, value: string): void{
    localStorage.setItem(key, value)
  }

  getLocal(key:string): string | null {
    return localStorage.getItem(key)
  }

  removeLocal(key:string){
    localStorage.removeItem(key)
  }

  clearLocal(): void {
    localStorage.clear()
  }

  // sessionstorage
  setSession(key: string, value: string): void{
    sessionStorage.setItem(key, value)
  }

  getSession(key:string): string | null {
    return sessionStorage.getItem(key)
  }

  removeSession(key:string){
    sessionStorage.removeItem(key)
  }

  clearSession(): void {
    sessionStorage.clear()
  }
}
