let ListaAlunos = [];

const sistema = () => {
    console.log("O que você deseja fazer?");
    console.log("1-Adicionar aluno\n2-Listar alunos\n3-Buscar aluno\n4-Alterar aluno\n-Remover aluno");
    let decisao = prompt("O que você deseja fazer?");

    if (decisao == 1) {
        AddAluno();  
    } else if (decisao == 2) {
        ListaAluno();
    } else if (decisao == 3) {
        BuscaAluno();
    } else if (decisao == 4) {
        RemoveAluno();
    }
}

class Aluno {
    constructor(nome, periodo) {
        this.nome = nome;
        this.periodo = periodo;
    }

    addNome(NovoNome){
        this.nome = NovoNome;
    }

    addPeriodo(NovoPeriodo){
        this.periodo = NovoPeriodo;
    }
}

const AddAluno = () => {
    let novoAluno = new Aluno;
    
    let oNome = prompt("Qual o nome desse aluno?");
    let oPeriodo = prompt("Qual o período desse aluno?");
    
    novoAluno.addNome(oNome);
    novoAluno.addPeriodo(oPeriodo);
    ListaAlunos.push(novoAluno);   
}

const ListaAluno = () => {
    for (pessoas in ListaAlunos) {
        console.log(pessoas.nome);
        console.log(pessoas.periodo);
    }
}

const AlteraAluno = () => {
    let oIndice = prompt("Qual aluno você deseja alterar?");
    for (ListaAlunos.len() in ListaAlunos){
        if (oIndice in ListaAlunos) {
            let decisao2 = prompt("O que você deseja alterar?\n1-Nome\n2-Período");
            if (decisao2 == 1) {
                meuAluno = ListaAlunos(arr[oIndice]);
                let novoNome = prompt("Qual o novo nome?");
                meuAluno.addNome(novoNome);
                alert("Adicionado!");
                } else if (decisao2 == 2){
                   meuAluno = ListaAlunos(arr[oIndice]);
                    let novoPeriodo = prompt("Qual o novo período?");
                    meuAluno.addNome(novoPeriodo);
                    alert("Adicionado!");
                }
        } 
    }
}

const RemoveAluno = () => {
    let oIndice = prompt("Qual aluno você deseja remover?");
    if (oIndice in ListaAlunos) {
        ListaAlunos.splice(oIndice, oIndice);
    }
}

const BuscaAluno = () => {
    let oIndice = prompt("Qual índice você deseja buscar?");
    ListaAlunos.indexOf(oIndice);
}

sistema();
