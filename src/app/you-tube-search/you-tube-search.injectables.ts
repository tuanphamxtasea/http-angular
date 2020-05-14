let YOUTUBE_API_KEY:string ="AIzaSyAQvriT_NATNEr287aNaKx5CKfLvsCOBHA";
let YOUTUBE_API_URL:string ="https://www.googleapis.com/youtube/v3/search";
import{
  YoutubeSeachService
}from './you-tube-search.service';

export const youTubeSearchInjectables:Array<any>=[
{provide:YoutubeSeachService,useClass:YoutubeSeachService},
{provide:'YOUTUBE_API_KEY',useValue:YOUTUBE_API_KEY},
{provide:'YOUTUBE_API_URL',useValue:YOUTUBE_API_URL}
]
