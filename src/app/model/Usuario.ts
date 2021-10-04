import { Produtos } from "./Produtos"

export class Usuario{
    public id: number
    public nome: string
    public usuario: string
    public email: string
    public senha: string
    public tipo: string
    public produtos: Produtos[]
    }