import { Component, OnInit } from '@angular/core';
import { Etudiant } from './etudiant';
import { Etudiants } from './listes-etudiants';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  etuds = Etudiants
  etudiant: Etudiant =  {
    id: 1,
    name: "Ali Ben Salah",
    average: 15.49,
    date: new Date("09-27-2003"),
    Paye: 15
  }
  selectedEtudiant !: Etudiant;    onSelect(etudiant: Etudiant): void {
    this.selectedEtudiant = etudiant;   
  }
}
