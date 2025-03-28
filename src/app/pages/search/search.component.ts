import { Component, inject } from '@angular/core';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html'
})
export class SearchComponent {
  query: string = "chat"
  searchVideosResponse : any | null = null
  
  private readonly apiService : YoutubeApiService = inject(YoutubeApiService)
  
  ngOnInit(){
    this.search()
  }

  search() {
    this.apiService.searchVideos(this.query).data!.subscribe((resp) => {
      this.searchVideosResponse = resp.items
    })
  }

  ngOnDestroy() {
    //todo unsubscribe à l'écoute
  }
}
