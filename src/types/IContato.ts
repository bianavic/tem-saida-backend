export interface Icontato {
    cep: string;
    endereco: string;
    complemento:  string;
    bairro:  string;
    cidade:  string;
    estado:  string;
    horarioDeContato?:  string; 
    telefone: Itelefone[];
}

 export interface Itelefone {
    numero: string;
    recado: boolean;
}