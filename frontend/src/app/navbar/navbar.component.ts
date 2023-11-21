import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { SearchService } from "../service/search.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {

  constructor(
 
    private router: Router,
 
    private searchService:SearchService
  ) {}
  loginStatus: Boolean = false;

  public isMenuCollapsed = true;
  searchTerm = '';
  public username:any;
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  userList = [];

  capitalizaFirstAndLastName(fullName:string) {
    return fullName.toLowerCase().replace(/\b./g, function (a) {
      return a.toUpperCase();
    });
  }


  showSearch = true;
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSearch = this.router.url === '/home';
      }
    });
  }
  
 
  search($event: any) {
    this.searchTerm = $event;
    this.searchService.updateSearch(this.searchTerm);
  }


}
