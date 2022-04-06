import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public movieDetails: any = {};
  constructor( private route: ActivatedRoute,
    private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paraMap: any)=>{
      console.log("params:", paraMap);
      const url = `https://www.omdbapi.com/?apikey=d3f6c0ee&plot=full&i=${paraMap.params.id}`;
      this.http.get(url).subscribe((result: any)=>{
        this.movieDetails = result;
      })
    })
  }

  public backToTop(){
    this.router.navigate(['']);
  }

}
