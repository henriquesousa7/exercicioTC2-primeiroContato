import { Component, OnInit } from '@angular/core';
import { ListarAluno } from '../listarAluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {

  aluno : ListarAluno = {
    nome: "Henrique de Sousa Santos",
    dataIngresso: "01/01/2019",
    previsaoFormatura: "20/12/2021"
  }

  aluno2 : ListarAluno = {
    nome: "Alisson Ferreira",
    dataIngresso: "01/01/2020",
    previsaoFormatura: "20/12/2022"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// Henrique de Sousa Santos - SC3009165