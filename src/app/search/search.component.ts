import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public searchMovie="";
  public moviesList: any[] =[];
  public loader: boolean = false;
  constructor(private http:HttpClient,private router: Router) {}


  public getMovies(){
    this.loader = true;
    const url = `https://www.omdbapi.com/?apikey=d3f6c0ee&s={${this.searchMovie}}`;
    this.http.get(url).subscribe((result: any)=>{
      this.loader = false;
      this.moviesList = result.Search;
    })
  }



  public getMovieDetails(movieInfo:any){
    const url = 'details/'+movieInfo.imdbID;
    this.router.navigate([url]);
  }

}
