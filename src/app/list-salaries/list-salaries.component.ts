import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Salarie} from '../Model/Salarie';
import {SalarieService} from '../salarie.service';

@Component({
  selector: 'app-list-salaries',
  templateUrl: './list-salaries.component.html',
  styleUrls: ['./list-salaries.component.css']
})
export class ListSalariesComponent implements OnInit {
  errorMessage;
  critere = new FormControl('');
  salaries: Salarie [];

  constructor(private salarieService: SalarieService) {
  }

  ngOnInit(): void {
  }

  getSalaries(critere) {
    critere = this.critere.value;
    console.log('this.critere +++++' + critere);
    this.salarieService.getSalaries(critere).subscribe(
      (salaries) => {
        //this.critere = critere;
        this.salaries = salaries;
      },
      (error) => {
        alert('Probleme d accés à l api ');
      }
    );
  }
}
