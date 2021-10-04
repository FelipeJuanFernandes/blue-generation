import { Produtos } from "./Produtos"

export class Categoria{
    public id: number
    public tipo: string
    public classificacao: string
    public ativo: boolean
    public produtos: Produtos[]
}