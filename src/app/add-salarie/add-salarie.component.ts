import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {SalarieService} from '../salarie.service';
import {Router} from '@angular/router';
import {Salarie} from '../Model/Salarie';
import {SalarieRequest} from '../Model/SalarieRequest';

@Component({
  selector: 'app-add-salarie',
  templateUrl: './add-salarie.component.html',
  styleUrls: ['./add-salarie.component.css']
})
export class AddSalarieComponent implements OnInit {
  errorMessage;
  salarieForm: FormGroup;
  fields: any;
  critere = new FormControl('');
  constructor(private salarieService: SalarieService,
              private router: Router,
              private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fields = {
      isRequired: true,
      type: {
        options: [
          {
            salno: '',
            salname: '',
            position: ''
          }
        ]
      }
    };
    this.salarieForm = this.fb.group({
      type: this.fb.group({
        options: this.fb.array([])
      })
    });
    this.patch();

  }
    // tslint:disable-next-line:typedef
  patch() {
    const control = this.salarieForm.get('type.options') as FormArray;
    this.fields.type.options.forEach(x => {
      control.push(this.patchValues(x.salno, x.salname, x.position));
    });
  }
  // tslint:disable-next-line:typedef
  patchValues(salno, salname, position) {
    return this.fb.group({
      salno: [salno],
      salname: [salname],
      position: [position]
    });
  }

  // tslint:disable-next-line:typedef
  addRow() {
    this.patch();
  }
  addSalarie(formulaire) {
    const salarieRequest: SalarieRequest = new SalarieRequest();
    const formArray: Salarie[] = formulaire.type.options;
    salarieRequest.salaries = formArray;
    salarieRequest.critere = this.critere.value;
    this.salarieService.addSalarie(salarieRequest).subscribe(
      (response) => {
        const link = ['salaries'];
        this.router.navigate(link);
      },
      (error) => this.errorMessage = `Erreur de connexion, vous devez contacter l administrateur`
    );
  }
}
