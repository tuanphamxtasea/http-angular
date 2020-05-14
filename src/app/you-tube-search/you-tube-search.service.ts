import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResutl } from './search-result.model';
import { map } from 'rxjs/operators';


@Injectable()
export class YoutubeSeachService{

  constructor(
    private http: HttpClient,
    @Inject('YOUTUBE_API_KEY') private apiKey:string,
    @Inject('YOUTUBE_API_URL') private apiUrl:string
  ){

  }

  search(query:string):Observable<SearchResutl[]>{
    const params:string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxresults=10`
      ].join('&');
      const queryUrl =`${this.apiUrl}?${params}`;


       return this.http.get(queryUrl).pipe(map(response=>{

        return <any>response['items'].map(item=>{
            return new SearchResutl({
              id:item.id.videoId,
              title:item.snippet.title,
              description: item.snippet.description,
              thumbnailUrl: item.snippet.thumbnails.high.url
            });

        });

      }));
  }
}
