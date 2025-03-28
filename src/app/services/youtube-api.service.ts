import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../models/response';
import { UrlCodec } from '@angular/common/upgrade';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private readonly httpClient : HttpClient = inject(HttpClient)
  
  private API_KEY = environment.YOUTUBE_API_KEY
  private API_URL = environment.YOUTUBE_API_URL
  
  constructor() { }

  // query doit être sous form "keyword+keyword+keyword"
  // /search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]
  // youtube.search.list?
  //       part=snippet
  //       &order=viewCount
  //       &q=skateboarding+dog
  //       &type=video
  //       &videoDefinition=high
       
  //       https://www.googleapis.com/youtube/v3/search
  searchVideos(query : string = "chat", maxResults: number = 10) : ResponseApi<Observable <any> | undefined>{
    const url : string = `${this.API_URL}search?part=snippet&order=relevance&maxResults=${maxResults.toString()}&q=${query}&type=video&videoDefinition=high&key=${this.API_KEY}`

    console.log("url", url)
    try {
      const videos: Observable<any> = this.httpClient.get(url)

      return {
        code: '200',
        message: 'La liste des vidéos demandées a été atteinte avec succès.',
        data: videos
      }
    } catch (error) {
      return {
        code: '666',
        message : 'Une erreur inattendue est survenue durant le chargement des vidéos.'
      }
    }
  }

 
}
