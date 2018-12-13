import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class')
  public cssClass = 'row';

  public votes = 10;
  public title = 'Angular';
  public link = 'angular.io';

  constructor() { }

  ngOnInit() {
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }

}
