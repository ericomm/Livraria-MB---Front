import { Autor } from "./autor";
import { Categoria } from "./categoria";


export interface Livro{

id:number;
capa:string;
titulo: string;
categoria: Categoria;
autor: Autor;
sumario: string;
preco: number;
numero_de_paginas: number;
isbn: string;
data_publicacao: string;
subtitulo: string;
}
