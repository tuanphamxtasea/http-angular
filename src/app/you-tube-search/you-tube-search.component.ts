import { Component, OnInit } from '@angular/core';
import { SearchResutl } from './search-result.model';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {
results:SearchResutl;
loading:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  updateResults(resutls:SearchResutl):void{
    this.results=resutls;
  }

}
