
class Quartos{
    constructor(quant_de_camas,preco_por_noite,nome,descricao){
        this.quant_de_camas = quant_de_camas;
        this.preco_por_noite = preco_por_noite;
        this.nome = nome;
        this.descricao = descricao;
    }
}


class Reserva{
    constructor(ID_unico,ID_do_cliente,status,data_de_entrada,data_de_saida,quarto_reservado){
        this.ID_unico = ID_unico;
        this.ID_do_cliente = ID_do_cliente;
        this.status = status;
        this.data_de_entrada = data_de_entrada;
        this.data_de_saida = data_de_saida;
        this.quarto_reservado = quarto_reservado;
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
class Sistema{
    constructor(teste){
        this.reservas_cadastradas = [];
        this.funcionarios_cadastrados = [];
        this.clientes_cadastrados = [];
        this.quartos_registrados = [];
        this.id_de_reserva = 1;
        this.leitura = require('readline-sync')

    }
    ver_minhas_reservas_cliente(){
        if(this.reservas_cadastradas.length == 0){
            console.log('\n');
            console.log("O cliente nao possui nenhuma reserva\n");
            return;
        }
        let id_do_cliente = this.leitura.question("Digite o seu ID do cliente:");
        console.log('\n');
        let cont = 0;
        let achei = false;
        while(cont != this.reservas_cadastradas.length){
            if(this.reservas_cadastradas[cont].ID_do_cliente == id_do_cliente){
                console.log("ID unico da reserva:",this.reservas_cadastradas[cont].ID_unico);
                console.log("Status:",this.reservas_cadastradas[cont].status);
                console.log("Data de entrada:",this.reservas_cadastradas[cont].data_de_entrada);
                console.log("Data de saida:",this.reservas_cadastradas[cont].data_de_saida);
                achei = true;
            }
            cont = cont + 1;
        }
        if(!achei){
            console.log("Sua reserva nao foi encontrada");
        }
    }
    cancelar_reserva_cliente(){
        if(this.reservas_cadastradas.length == 0){
            console.log("O cliente nao possui nenhuma reserva");
            return;
        }
        let id_do_cliente = this.leitura.question("Digite o seu ID do cliente:");
        console.log('\n');
        let cont = 0;
        let achei = 0;
        let achei2 = false;
        while(cont != this.reservas_cadastradas.length){
            if(this.reservas_cadastradas[cont].ID_do_cliente == id_do_cliente){
                this.reservas_cadastradas[cont].status == "Cancelada";
                achei2 = true;
            }
            cont = cont + 1;
        }
        if(!achei2){
            console.log("Sua reserva nao foi encontrada para ser cancelada");
        }
    }

    fazer_reserva_cliente(){
        let nome_do_quarto_de_interesse_do_cliente = this.leitura.question("Digite o nome do quarto:");
        let cont = 0;
        let data_de_entrada_do_cliente = this.leitura.question("Digite a data que deseja entrar no formato dd/mm/aaaa:");
        let data_de_saida_do_cliente = this.leitura.question("Digite a data que deseja sair no formato dd/mm/aaaa:");
        let data_entrada_reserva = new Date(data_de_entrada_do_cliente).getTime();
        let data_saida_reserva = new Date(data_de_saida_do_cliente).getTime();
        let data_entrada_reserva_2;
        let data_saida_reserva_2;
        let id_do_cliente = this.leitura.question("Digite o seu ID de cliente:");
        let achei = true;
        let reserva;
        while(cont != this.reservas_cadastradas.length){
            if(this.reservas_cadastradas[cont].quarto_reservado.nome == nome_do_quarto_de_interesse_do_cliente){
                if(this.reservas_cadastradas[cont].status == "Adiada" || this.reservas_cadastradas[cont].status == "Cancelada"){
                    data_entrada_reserva_2 = new Date(this.reservas_cadastradas[cont].data_de_entrada).getTime();
                    data_saida_reserva_2 = new Date(this.reservas_cadastradas[cont].data_de_saida).getTime();
                    if(data_entrada_reserva < data_entrada_reserva_2 && data_saida_reserva < data_entrada_reserva_2){
                        achei = true;
                    }
                    else if(data_entrada_reserva > data_saida_reserva_2 && data_saida_reserva > data_saida_reserva_2){
                        achei = true;
                    }
                    else{
                        achei = false;
                        break;
                    }
                }
            }
            cont = cont + 1;
        }
        
        if(achei == true){
            cont = 0;
            let achei_o_quarto = 0;
            while(cont != this.quartos_registrados.length){
                if(this.quartos_registrados[cont].nome == nome_do_quarto_de_interesse_do_cliente){
                    achei_o_quarto = this.quartos_registrados[cont];
                }
                cont = cont + 1;
            }
            reserva = new Reserva(this.id_de_reserva,id_do_cliente,"realizada",data_de_entrada_do_cliente,data_de_saida_do_cliente,achei_o_quarto);
            this.reservas_cadastradas.push(reserva);
            this.id_de_reserva = this.id_de_reserva + 1;
            console.log("Reserva agendada");
        }
        else{
            console.log("Nao foi possivel agendar a sua reserva");
        }
        
    }
    ver_lista_de_quartos_cliente(){
        
        
    }
    ver_meus_dados_cliente(cliente){
        console.log("ID_unico:",cliente.ID_unico);
        console.log("Nome:",cliente.nome);
        console.log("Data de nascimento:",cliente.data_de_nascimento);
        console.log("Email:",cliente.email);
        console.log("Senha:",cliente.senha);
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
        let achei = false;
        while(cont < this.reservas_cadastradas.length){
            if(this.reservas_cadastradas[cont].ID_unico == id_unico_da_reserva){
                let novo_status = this.leitura.question("Digite o novo status da reserva:");
                this.reservas_cadastradas[cont].status = novo_status;
                achei = true;
            }
        }
        if(!achei){
            console.log("Reserva nao encontrada");
        }
    }
    ver_lista_de_clientes_para_funcionario(){
        if(this.clientes_cadastrados.length == 0){
            console.log("Nao ha nenhum cliente no momento");
            return;
        }
        let cont = 0;
        while(cont != this.clientes_cadastrados.length){
            console.log("ID unico:",this.clientes_cadastrados[cont].ID_unico);
            console.log("Nome:",this.clientes_cadastrados[cont].nome);
            console.log("Data de nascimento",this.clientes_cadastrados[cont].data_de_nascimento);
            console.log("CPF:",this.clientes_cadastrados[cont].CPF);
            console.log("Email:",this.clientes_cadastrados[cont].email);
            console.log("Senha:",this.clientes_cadastrados[cont].senha);
        }
    }
    ver_lista_de_quartos_funcionario(){
        if(this.quartos_registrados.length == 0){
            console.log("Nao ha nenhum quarto no momento");
            return;
        }
        let cont = 0;
        while(cont != this.quartos_registrados.length){
            console.log("Quantidade de camas:",this.quartos_registrados[cont].quant_de_camas);
            console.log("Preco por noite",this.quartos_registrados[cont].preco_por_noite);
            console.log("Nome:",this.quartos_registrados[cont].nome);
            console.log("Descricao:",this.quartos_registrados[cont].descricao);
            cont = cont + 1;
        }
    }
    ver_lista_de_reservas_funcionario(){
        if(this.reservas_cadastradas.length == 0){
            console.log("Nao ha nenhuma reserva");
        }
        let cont = 0;
        while(cont != this.reservas_cadastradas.length){
            console.log("ID unico:",this.reservas_cadastradas[cont].ID_unico);
            console.log("ID do cliente:",this.reservas_cadastradas[cont].ID_do_cliente);
            console.log("status:",this.reservas_cadastradas[cont].status);
            console.log("data de entrada:",this.reservas_cadastradas[cont].data_de_entrada);
            console.log("data_de_saida:",this.reservas_cadastradas[cont].data_de_saida);
            cont = cont + 1;
        }
    }
    ver_meus_dados_funcionario(funcionario){
        console.log("ID unico",funcionario.ID_unico);
        console.log("Nome de usuario:",funcionario.nome_de_usuario);
        console.log("CPF:",funcionario.CPF);
        console.log("email:",funcionario.email);
        console.log("senha:",funcionario.senha);
    }
    fazer_login(opcao1){
        console.log("Página de Login\n");
        if(opcao1 == 1){ //opcao selecionada foi do funcionario
            let email = this.leitura.question("Digite o seu email:");
            let senha = this.leitura.question("Digite o seu senha:");
            let usuario_encontrado = null;
            let contador = 0;
            while(contador != this.funcionarios_cadastrados.length){
                if(this.funcionarios_cadastrados[contador].email == email && this.funcionarios_cadastrados[contador].senha == senha){
                        usuario_encontrado = this.funcionarios_cadastrados[contador];
                        break;
                }
                contador = contador + 1;
            }
            if(usuario_encontrado != null){ //verifica se o usuario foi encontrado
                let resp3 = 1;
                do{
                    console.log("\nFuncionario logado!");
                    console.log("4.Ver meus dados");
                    console.log("5.Ver lista de reservas");
                    console.log("6.Ver lista de quartos");
                    console.log("7.Ver lista de clientes");
                    console.log("8.Mudar status da reserva(pendente,adiada,realizada,cancelada)");
                    console.log("9.Adicionar Quarto");
                    console.log("10.Sair da conta");
                    console.log('\n');
                    resp3 = this.leitura.question("Digite a sua opcao:");
                    if(resp3 > 0 && resp3 < 10)
                    {
                        if(resp3 == 4){ // a ideia aqui ta certa
                            this.ver_meus_dados_funcionario(usuario_encontrado);
                        }
                        else if(resp3 == 5){
                            this.ver_lista_de_reservas_funcionario();
                        }
                        else if(resp3 == 6){
                            this.ver_lista_de_quartos_funcionario();
                        }
                        else if(resp3 == 7){
                            this.ver_lista_de_clientes_para_funcionario();
                        }
                        else if(resp3 == 8){
                            this.mudar_status_da_reserva_para_funcionario();
                        }       
                        else{
                            this.adicionar_quarto_pelo_funcionario();
                        }
                    }
                }while(resp3 > 0 && resp3 < 10);
                
            }
            else{
                console.log("Usuario nao encontrado");
            }  
        }
        else{
            let email = this.leitura.question("Digite o seu email:");
            let senha = this.leitura.question("Digite o seu senha:");
            let contador = 0;
            let cliente_encontrado = null;
            while(contador != this.clientes_cadastrados.length){
                if(this.clientes_cadastrados[contador].email == email && this.clientes_cadastrados[contador].senha == senha){
                    cliente_encontrado = this.clientes_cadastrados[contador];
                    break;
                }
                contador = contador + 1;
            }
            if(cliente_encontrado != null){
                let resp3 = 1;
                do{
                    console.log("\nFuncionario logado!\n");
                    console.log("1.Ver meus dados");
                    console.log("2.Ver lista de quartos");
                    console.log("3.Fazer reserva");
                    console.log("4.Cancelar reserva");
                    console.log("5.Ver minhas reservas");
                    console.log("6.Sair da conta");
                    resp3 = this.leitura.question("Digite a sua opcao:");
                    if(resp3 > 0 && resp3 < 6){
                        if(resp3 == 1){
                            ver_meus_dados_cliente(cliente_encontrado);
                        }
                        else if(resp3 == 2){

                        }
                        else if(resp3 == 3){
                            this.fazer_reserva_cliente()
                        }
                        else if(resp3 == 4){
                            this.cancelar_reserva_cliente();
                        }
                        else{
                            this.ver_minhas_reservas_cliente();
                        }
                    }
                }while(resp3 > 0 && resp3 < 6);
            }
            else{
                console.log("\nUsuario nao encontrado\n");
            }
        }
    }
    fazer_cadastro(opcao2){
        if(opcao2 == 1){
            console.log("Formulario para cadastrar funcionario:\n")
            let id_unico = this.leitura.question("Digite o seu ID_unico:");
            let nome = this.leitura.question("Digite o seu nome de usuario:");
            let cpf = this.leitura.question("Digite o seu CPF:");
            let email = this.leitura.question("Digite o seu email:");
            let senha = this.leitura.question("Digite a sua senha:");
            console.log('\n');
            const pessoa = new Funcionario(id_unico,nome,cpf,email,senha);
            //let funcionarios = this.funcionarios_cadastrados;
            //console.log(this.funcionarios_cadastrados);
            this.funcionarios_cadastrados.push(pessoa);
        }
        else{
            console.log("Formulario para cadastrar cliente:\n")
            let id_unico = this.leitura.question("Digite o seu ID_unico:");
            let nome = this.leitura.question("Digite o seu nome de usuario:");
            let data_de_nascimento = this.leitura.question("Digite a sua data de nascimento:");
            let cpf = this.leitura.question("Digite o seu CPF:");
            let email = this.leitura.question("Digite o seu email:");
            let senha = this.leitura.question("Digite o seu senha:");
            console.log('\n');
            let pessoa = new Cliente(id_unico,nome,data_de_nascimento,cpf,email,senha);
            this.clientes_cadastrados.push(pessoa);
        }
    }
    iniciar_sistema(){
        let resp = 1;
        let resp2;
        do{
            console.log("Página Inicial")
            console.log("Digite um dos numeros das opcoes abaixo: ");
            console.log("1.Fazer login");
            console.log("2.Fazer Cadastro");
            console.log("3.Sair do Programa");
            resp = this.leitura.question()
            console.log('\n');
            if(resp > 0 && resp < 3)
            {
                console.log("Digite o numero correspondente a funcionario ou a cliente: ");
                console.log("1.Funcionario");
                console.log("2.Cliente");
                resp2 = this.leitura.question();
                console.log('\n');
                if(resp == 1){
                    this.fazer_login(resp2);
                }
                if(resp == 2){
                    this.fazer_cadastro(resp2);
                } 
            }
        }while(resp > 0 && resp < 3);
    }
}

let sistema = new Sistema(1);
sistema.iniciar_sistema();

