function onLoadInicial(){
    if (localStorage.getItem('estacionamento') == null){ 
        carregaDados();
    }
}


function carregaDados(){

dadosIniciais = [];

carro1 = {
    placa: "abc-1234",
    modelo: "palio",
    cor: "vermelhor",
    date: "13/12/2021 14:30",
    hora: new Date().getHours(),
    minutos: new Date().getMinutes(),
    apartamento: "106",
    hospede: "Flávio Roberto Pereira",
    vaga: "02",
    checkout: true,
    dataSaida: "15/12/2021 11:55",

}

carro2 = {
    placa: "pdf-1020",
    modelo: "duster",
    cor: "branco",
    date: new Date(),
    hora: new Date().getHours(),
    minutos: new Date().getMinutes(),
    apartamento: "303",
    hospede: "Juliana Gomes Araújo",
    vaga: "07",
    checkout: false,
    dataSaida: "",

}

moto1 = {
    placa: "pdk-5462",
    modelo: "moto",
    cor: "preto",
    date: new Date(),
    hora: new Date().getHours(),
    minutos: new Date().getMinutes(),
    apartamento: "502",
    hospede: "Carolina Fonseca Costa",
    vaga: "19",
    checkout: false,
    dataSaida: "",
}

moto2 = {
    placa: "jkg-3398",
    modelo: "moto",
    cor: "branco",
    date: "12/12/2021 15:29",
    hora: new Date().getHours(),
    minutos: new Date().getMinutes(),
    apartamento: "708",
    hospede: "Jennifer Siqueira Andrade",
    vaga: "27",
    checkout: true,
    dataSaida: "16/12/2021 10:27",

}

carro3 = {
    placa: "pdf-7893",
    modelo: "onix",
    cor: "vermelho",
    date: new Date(),
    hora: new Date().getHours(),
    minutos: new Date().getMinutes(),
    apartamento: "907",
    hospede: "Paulo Neto Viana",
    vaga: "35",
    checkout: false,
    dataSaida: "",
}

dadosIniciais.push(carro1);
dadosIniciais.push(carro2);
dadosIniciais.push(carro3);
dadosIniciais.push(moto1);
dadosIniciais.push(moto2);

localStorage.setItem('estacionamento', JSON.stringify(dadosIniciais));

}

function cliqueCadastro(e){

    var apartamento = window.document.getElementById('cadastroApartamento').innerText;
    var vaga = window.document.getElementById('cadastroVaga').innerText;
    var hospede = window.document.getElementById('cadastroNome').innerText;
    var checkout = false;
    var cor = window.document.getElementById('cadastroCor').innerText;
    var veiculo = window.document.getElementById('cadastroVeiculo').innerText;
    var placa = window.document.getElementById('cadastroPlaca').innerText;
    var date = new Date();
    var hora = new Date().getHours();
    var minutos = new Date().getMinutes();
    var dataSaida = "";

    cadastro = { 
        apartamento: apartamento,
        vaga: vaga,
        hospede: hospede,
        checkout: checkout,
        cor: cor,
        veiculo: veiculo,
        placa: placa,
        date: date,
        hora: hora,
        minutos: minutos,
        dataSaida: dataSaida,
    }

    var carrosEstacionamento = JSON.parse(localStorage.getItem('estacionamento'));
    carrosEstacionamento.push(cadastro);
    localStorage.setItem('estacionamento', JSON.stringify(carrosEstacionamento));

    alert('Cadastro realizado!');

    e.preventDeFault();
}


function cliqueVerificar(e){
  
    var placa = window.document.getElementById('placa').value;
    var modelo = window.document.getElementById('modelo').value;

    var carroNaoCadastrado = true;
    var carrosEstacionamento = JSON.parse(localStorage.getItem('estacionamento'));

    var i = 0;
    if(placa== "" || modelo == ""){
            alert("Favor preencher todos os campos.");
        }
        else{
    while( i < carrosEstacionamento.length){

        if (placa == carrosEstacionamento[i].placa && modelo == carrosEstacionamento[i].modelo && carrosEstacionamento[i].checkout == true){
            alert('Entrada não permitida! Hóspede já realizou checkout!');
            carroNaoCadastrado = false;
        } else if (placa == carrosEstacionamento[i].placa && modelo == carrosEstacionamento[i].modelo && (carrosEstacionamento[i].dataSaida == "")){
       console.log('entrooooou');
        var modelo = carrosEstacionamento[i].modelo;
        var placa = carrosEstacionamento[i].placa;
        var horaEntrada = carrosEstacionamento[i].hora;
        var dataEntrada = carrosEstacionamento[i].date;

        var tabelaVerificar = document.getElementById("tabela-verificar");
        tabelaVerificar.innerHTML = "<tr> <td>" + modelo + "</td> <td>" + placa + "</td> <td>" + horaEntrada + "</td>" + "<td>" + dataEntrada + "</td> </tr>";
        i = carrosEstacionamento.length; 
        carroNaoCadastrado = false;
    }
        i = i + 1;
    }

    if(carroNaoCadastrado){

        alert("Carro não cadastrado! Caso deseje cadastrar, redirecione para a tela principal.");
    }
}
        
    
    e.preventDeFault();
}

function statusEstacionamento(e){
    var carrosEstacionamento = JSON.parse(localStorage.getItem('estacionamento'));
    //console.log(carrosEstacionamento);
   var tabelaCarros = document.getElementById('status-estacionamento'); 
    var i = 0;
    while( i < carrosEstacionamento.length){
        var modelo = carrosEstacionamento[i].modelo;
        var placa = carrosEstacionamento[i].placa;
        var horaEntrada = carrosEstacionamento[i].hora + ":" + carrosEstacionamento[i].minutos;
        var entrada = carrosEstacionamento[i].date;
        
        if(!(carrosEstacionamento[i].checkout)){
             tabelaCarros.innerHTML +=  "<tr> <td>" + modelo + "</td> <td>" + placa + "</td> <td>" + horaEntrada + "</td>" + "<td>" + entrada + "</td> </tr>";        
        }
        console.log('modelo, placa e hora: ', modelo, placa, horaEntrada);
        i = i + 1;

       
       
    }
    e.preventDeFault();
}

function registrosMovimentacao(e){
    var carrosEstacionamento = JSON.parse(localStorage.getItem('estacionamento'));
    //console.log(carrosEstacionamento);
   var tabelaCarros = document.getElementById('carros-estacionados'); 
    var i = 0;
    while( i < carrosEstacionamento.length){
        var apartamento = carrosEstacionamento[i].apartamento;
        var vaga = carrosEstacionamento[i].vaga;
        var placa = carrosEstacionamento[i].placa;
        var entrada = carrosEstacionamento[i].date;
        var hora = carrosEstacionamento[i].hora + ":" + carrosEstacionamento[i].minutos;
        if(carrosEstacionamento[i].checkout){
            var saida = "sim (checkout realizado)";
        } else{
            var saida = "não";
        }        
        var saidaHora = carrosEstacionamento[i].dataSaida;

        i = i + 1;

        tabelaCarros.innerHTML +=  "<tr> <td>" + apartamento + "</td> <td>" + vaga + "</td> <td>" + placa + "</td>" + "<td>" + entrada + "</td> <td>" + hora + "</td> <td>" + saida + "</td> <td>" + saidaHora + "</td> </tr>";
        
    }
    e.preventDeFault();

}

