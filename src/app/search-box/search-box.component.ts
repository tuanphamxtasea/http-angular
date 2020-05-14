import { Component, OnInit,Output,EventEmitter, ElementRef } from '@angular/core';

import { SearchResutl } from '../you-tube-search/search-result.model';
import { YoutubeSeachService } from '../you-tube-search/you-tube-search.service';
import { Observable,fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
@Output() loading:EventEmitter<boolean> = new EventEmitter<boolean>();
@Output() results:EventEmitter<SearchResutl[]> = new EventEmitter<SearchResutl[]>();
  constructor(private youtube:YoutubeSeachService,private el:ElementRef) { }

  ngOnInit(): void {
   fromEvent(this.el.nativeElement,'keyup').pipe(
     map((e:any)=>e.target.value),
     filter((text:string)=>text.length > 1),
     debounceTime(250),
     tap(()=>this.loading.emit(true)),
     map((query:string)=>this.youtube.search(query)),
     switchAll()
   ).subscribe(
(results:SearchResutl[])=>{
  this.loading.emit(false);
  this.results.emit(results);
},
(err:any)=>{
  console.log(err);
  this.loading.emit(false);
},
()=>{
  this.loading.emit(false);
}

   );
  }

}
