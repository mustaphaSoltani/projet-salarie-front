export class Salarie {
  id: number;
  salno: string;
  salname: string;
  position: string;

  constructor(id , salno = '', salname = '', position = '') {
    this.salno = salno;
    this.salname = salname;
    this.position = position;
  }
}
