

var a = "sim";
var b = "nao";

class Reserva{
    constructor(ID_unico,ID_do_cliente,status,data_de_entrada,data_de_saida){
        this.ID_unico = ID_unico;
        this.ID_do_cliente = ID_do_cliente;
        this.status = status;
        this.data_de_entrada = data_de_entrada;
        this.data_de_saida = data_de_saida;
    }
}
class Funcionario{
    constructor(ID_unico,nome_de_usuario,CPF,email,senha){
        this.ID_unico = ID_unico;
        this.nome_de_usuario = nome_de_usuario;
        this.CPF = CPF;
        this.email = email;
        this.senha = senha;
    }
}
class Cliente{
    constructor(ID_unico,nome,data_de_nascimento,CPF,email,senha){
        this.ID_unico = ID_unico;
        this.nome = nome;
        this.data_de_nascimento = data_de_nascimento;
        this.CPF = CPF;
        this.email = email;
        this.senha = senha;
    }
}
class Quartos{
    constructor(quant_de_camas,preco_por_noite,nome,descricao){
        this.quant_de_camas = quant_de_camas;
        this.preco_por_noite = preco_por_noite;
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Sistema{
    Sistema(){
        this.reservas_cadastradas = [];
        this.funcionarios_cadastrados = [];
        this.clientes_cadastrados = [];
        this.quartos_registrados = [];
        this.this.leitura = require('readline-sync');

    }
    fazer_reserva_cliente(){
        let nome_do_quarto_de_interesse_do_cliente = this.leitura.question("Digite o nome do quarto:");
        let data_de_entrada_do_cliente = this.leitura.question("Digite a data que deseja entrar:");
        let data_de_saida_do_cliente = this.leitura.question("Digite a data que deseja sair:");
        let cont = 0;


    }
    ver_lista_de_quartos_cliente(){
        
    }
    ver_meus_dados_cliente(cliente){
        console.log(cliente.ID_unico);
        console.log(cliente.nome);
        console.log(cliente.data_de_nascimento);
        console.log(cliente.email);
        console.log(cliente.senha);
    }
    adicionar_quarto_pelo_funcionario(){
        let quant_de_camas = this.leitura.question("Digite a quantidade de camas:");
        let preco_por_noite = this.leitura.question("Digite o preco por noite:");
        let nome_do_quarto = this.leitura.question("Digite o nome do quarto:");
        let descricao = this.leitura.question("Digite a descricao do quarto:");
        let quarto = new Quartos(quant_de_camas,preco_por_noite,nome_do_quarto,descricao);
        this.quartos_registrados.push(quarto);
    }
    mudar_status_da_reserva_para_funcionario(){
        let id_unico_da_reserva = this.leitura.question("Digite o ID_unico da reserva:");
        let cont = 0;
        while(cont != this.reservas_cadastradas.length){
            if(this.reservas_cadastradas[cont].ID_unico == id_unico_da_reserva){
                let novo_status = this.leitura.question("Digite o novo status da reserva:");
                this.reservas_cadastradas[cont].status = novo_status;
            }
        }
    }
    ver_lista_de_clientes_para_funcionario(){
        let cont = 0;
        while(cont != this.clientes_cadastrados.length){
            console.log(this.clientes_cadastrados[cont].ID_unico);
            console.log(this.clientes_cadastrados[cont].nome);
            console.log(this.clientes_cadastrados[cont].data_de_nascimento);
            console.log(this.clientes_cadastrados[cont].CPF);
            console.log(this.clientes_cadastrados[cont].email);
            console.log(this.clientes_cadastrados[cont].senha);
        }
    }
    ver_lista_de_quartos_funcionario(){
        let cont = 0;
        while(cont != this.quartos_registrados.length){
            console.log(this.quartos_registrados[cont].quant_de_camas);
            console.log(this.quartos_registrados[cont].preco_por_noite);
            console.log(this.quartos_registrados[cont].nome);
            console.log(this.quartos_registrados[cont].descricao);
            cont = cont + 1;
        }
    }
    ver_lista_de_reservas_funcionario(){
        let cont = 0;
        while(cont != this.reservas_cadastradas.length){
            console.log(this.reservas_cadastradas[cont].ID_unico);
            console.log(this.reservas_cadastradas[cont].ID_do_cliente);
            console.log(this.reservas_cadastradas[cont].status);
            console.log(this.reservas_cadastradas[cont].data_de_entrada);
            console.log(this.reservas_cadastradas[cont].data_de_saida);
            cont = cont + 1;
        }
    }
    ver_meus_dados_funcionario(funcionario){
        console.log(funcionario.ID_unico);
        console.log(funcionario.nome_de_usuario);
        console.log(funcionario.CPF);
        console.log(funcionario.email);
        console.log(funcionario.senha);
    }
    fazer_login(opcao1){
        // a variavel this.leitura não existe aqui!!!!!
        if(opcao1 == 4){
            let email = this.leitura.question("Digite o seu email:");
            let senha = this.leitura.question("Digite o seu senha:");
            let usuario_encontrado = null;
            let contador = 0;  // não é para dar o nome das variaveis de letras soltas!!!!
            //sugestao: melhor encontrar o usuário primeiro e guardar em uma variavel. Depois vc vê se encontrou ele e escolhe o que vai exibir
            while(contador != this.funcionarios_cadastrados.length){ // do jeito que vc ta fazendo esse while, mesmo depois de achar o usuário, ele vai continuar buscando depois até chegar no final do array
                if(this.funcionarios_cadastrados.email[contador] == email && this.funcionarios_cadastrados.senha[contador] == senha){
                        usuario_encontrado = this.funcionarios_cadastrados[contador];
                        break;
                }
                contador = contador + 1;
            }            //acho que eu criaria um metodo para cada opção dessa para deixar o código mais limpo
            // se uruário foi encontrado
            if(usuario_encontrado != null){
                console.log("4.Ver meus dados");
                console.log("5.Ver lista de reservas");
                console.log("6.Ver lista de quartos");
                console.log("7.Ver lista de clientes");
                console.log("8.Mudar status da reserva(pendente,adiada,realizada,cancelada)");
                console.log("9.Adicionar Quarto");
                let resp3 = this.leitura.question("Digite a sua opcao:");

            }
                let resp3 = this.leitura.question("Digite a sua opcao:");
                if(resp3 == 4){ // a ideia aqui ta certa
                    this.ver_meus_dados_funcionario(usuario_encontrado);
                }
                else if(resp3 == 5){
                    this.ver_meus_dados_funcionario();
                }
                else if(resp3 == 6){
                    ver_lista_de_quartos_funcionario();
                }
                else if(resp3 == 7){
                    ver_lista_de_clientes_para_funcionario();
                }
                else if(resp3 == 8){
                    mudar_status_da_reserva();
                }       
                else{
                    adicionar_quarto_pelo_funcionario()
                }
            }
        }
        else{
            let email = this.leitura.question("Digite o seu email:");
            let senha = this.leitura.question("Digite o seu senha:");
            let contador = 0;
            let cliente_encontrado = null;
            while(contador != this.clientes_cadastrados.length){
                if(this.clientes_cadastrados.email[contador] == email && this.clientes_cadastrados.senha[contador] == senha){
                    cliente_encontrado = this.clientes_cadastrados[contador];
                    break;
                }
                contador = contador + 1;
            }
            if(cliente_encontrado != null){
                console.log("1.Ver meus dados");
                console.log("2.Ver lista de quartos");
                console.log("3.Fazer reserva");
                console.log("4.Cancelar reserva");
                console.log("5.Ver minhas reservas");
                let resp3 = this.leitura.question("Digite a sua opcao:");
                if(resp3 == 1){
                    ver_meus_dados_cliente(cliente_encontrado);
                }
                else if(resp3 == 2){

                }

            }
                console.log("1.Ver meus dados");
                console.log("2.Ver lista de quartos");
                console.log("3.Fazer reserva");
                console.log("4.Cancelar reserva");
                console.log("5.Ver minhas reservas");
                let resp3 = this.leitura.question("Digite a sua opcao:");
                if(resp3 == 1){
                let id_unico_do_cliente_logado = this.clientes_cadastrados.ID_unico[a];
                let nome_cliente_logado = this.clientes_cadastrados.nome[a];
                let data_de_nascimento_cliente_logado = this.clientes_cadastrados.data_de_nascimento[a];
                let CPF_cliente_logado = this.clientes_cadastrados.CPF[a];
                let email_cliente_logado = this.clientes_cadastrados.email[a];
                let senha_cliente_logado = this.clientes_cadastrados.senha[a];
                }
                        else if(resp3 == 2){

                        }
                        else if(resp3 == 3){
                            
                        }
                        else if(resp3 == 4){
                            
                        }
                        else if(resp3 == 5){
                            
                        }
                    }  
                
        }
    }
    fazer_cadastro(opcao2){
        if(opcao2 == 4){
            let id_unico = this.leitura.question("Digite o seu ID_unico:");
            let nome = this.leitura.question("Digite o seu nome de usuario:");
            let cpf = this.leitura.question("Digite o seu CPF:");
            let email = this.leitura.question("Digite o seu email:");
            let senha = this.leitura.question("Digite a sua senha:");
            let pessoa = new Funcionario(id_unico,nome,cpf,email,senha);
            this.funcionarios_cadastrados.push(pessoa);
        }
        else{
            let id_unico = this.leitura.question("Digite o seu ID_unico:");
            let nome = this.leitura.question("Digite o seu nome de usuario:");
            let data_de_nascimento = this.leitura.question("Digite a sua data de nascimento:");
            let cpf = this.leitura.question("Digite o seu CPF:");
            let email = this.leitura.question("Digite o seu email:");
            let senha = this.leitura.question("Digite o seu senha:");
            let pessoa = new Cliente(id_unico,nome,data_de_nascimento,cpf,email,senha);
            this.clientes_cadastrados.push(pessoa);
        }
    }
    iniciar_sistema(){
        console.log("1.Fazer login");
        console.log("2.Fazer Cadastro");
        console.log("3.Sair do Programa");
        let resp = this.this.leitura.question("Digite um dos numeros das opcoes?");
        if(resp !=  3){
            console.log("4.Funcionario");
            console.log("5.Cliente");
            let resp2 = this.leitura.question("Digite o numero correspondente a funcionario ou a cliente");
            //verifica se é cadastro ou login
            //se for cadastro, chama metodo de cadastro e passa como parametro a opção selecionada (funcionario ou cliente)
            //o mesmo serve para o login
            if(resp == 2){
                fazer_cadastro(resp2);
            } 
        }
    }
}

