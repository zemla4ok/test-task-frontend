import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import {ISearchByKeyResult} from '../../interfaces/interfaces';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public searchForm: FormGroup;
  public resultText: string;

  constructor(private readonly searchService: SearchService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchText: new FormControl('', [Validators.required])
    });
  }

  public searchByKey(activationFormValue): void {
    this.searchService.searchByKey(activationFormValue.searchText)
    .subscribe((result: ISearchByKeyResult) => {
      this.resultText = result.value;
    });
  }
}
