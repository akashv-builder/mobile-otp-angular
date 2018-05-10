import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { get_ip } from '../app/data.config'
import 'rxjs/add/operator/map' 

@Injectable()
export class SearchService {

  constructor(private http:Http) { }

  getOTP(searchInput:string){
    return this.http.get(get_ip.search_api+searchInput).map(data => data.json(),(error:any) => {this.handleError();});
  }

  handleError(){
    console.log("Error : ¯\_(ツ)_/¯");
}

}
