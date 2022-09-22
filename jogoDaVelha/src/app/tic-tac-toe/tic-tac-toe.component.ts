import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  currentPlayer: string = 'X';
  winnerPlayer: string = '-';

  boardMap:string[][] = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ];

  ReiniciarTabuleiro(): void{
    this.currentPlayer = 'X';
    this.winnerPlayer = '-';

    this.boardMap = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ];

  }

  TrocarJogador(): void{
    if(this.currentPlayer === 'X'){
      this.currentPlayer = "O";
    }
    else
    {
      this.currentPlayer = "X";
    }
  }

  MarcarQuadrado(linha: number, coluna:number): void{
    if(this.winnerPlayer === '-')
    {
      try {
        if(this.boardMap[linha][coluna] === '-'){
          this.boardMap[linha][coluna] = this.currentPlayer;
          this.AnalisarTabuleiro();
          if (this.winnerPlayer === '-'){
            this.TrocarJogador();
          }
        }
      }catch (e)
      {
        console.log('O valor passado de Linha e/ou Coluna é invalido');
      }
    }
  }


  AnalisarTabuleiro(): void {
    let x_counter:number = 0;
    let o_counter:number = 0;

    //Linhas
    for (let l = 0; l < 3; l++) {
      for (let c = 0; c < 3; c++) {
        if(this.boardMap[l][c] === "X"){
          x_counter++;
        }
        else if(this.boardMap[l][c] === "O"){
          o_counter++;
        }
      }

      if (x_counter === 3){
        this.winnerPlayer = 'X';
        break;
      }
      else if(o_counter === 3)
      {
        this.winnerPlayer = "O"
        break;
      }
      else {
        x_counter = 0;
        o_counter = 0;
      }
    }
    //Colunas
    for (let c = 0; c < 3; c++) {
      for (let l = 0; l < 3; l++) {
        if(this.boardMap[l][c] === "X"){
          x_counter++;
        }
        else if(this.boardMap[l][c] === "O"){
          o_counter++;
        }
      }

      if (x_counter === 3){
        this.winnerPlayer = 'X';
        break;
      }
      else if(o_counter === 3)
      {
        this.winnerPlayer = "O"
        break;
      }
      else {
        x_counter = 0;
        o_counter = 0;
      }
    }

    //Diagonal "\"
    for (let i = 0; i < 3; i++) {
      if(this.boardMap[i][i] === 'X'){
        x_counter++;
      }
      else if(this.boardMap[i][i] === 'Y'){
        o_counter++;
      }
    }

    if (x_counter === 3){
      this.winnerPlayer = 'X';
    }
    else if(o_counter === 3)
    {
      this.winnerPlayer = "O"
    }
    else {
      x_counter = 0;
      o_counter = 0;
    }

    //Diagonal "/"
    for (let i = 0; i < 3; i++) {
      if(this.boardMap[i][2-i] === 'X'){
        x_counter++;
      }
      else if(this.boardMap[i][2-i] === 'Y'){
        o_counter++;
      }
    }

    if (x_counter === 3){
      this.winnerPlayer = 'X';
    }
    else if(o_counter === 3)
    {
      this.winnerPlayer = "O"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
