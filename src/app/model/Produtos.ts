import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produtos{
    public id: number
    public nome: string
    public descricao: string
    public foto: string
    public preco: number
    public quantidade: number
    public categoria: Categoria
    public usuario: Usuario
}