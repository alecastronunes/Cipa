

function carCandidatos(){
    var x = DadosCandidatos.length;    
    for(i=0;i<x;i++){
        
     $("#" + i).html("<p><h3>" + DadosCandidatos[i].nome + "</h3><br/><h4>Departamento: " + DadosCandidatos[i].departamento + "<br/>Cargo: " + DadosCandidatos[i].cargo + "<br/>Idade: " + DadosCandidatos[i].idade + " anos" + "<br/>Anos de Empresa: " + DadosCandidatos[i].tempodeempresa + "</h4></p>");   
     
    }
}

function carCandVotos(){
    
    var x = DadosCandidatos.length;
    
    for(i=0;i<x;i++){
        
        $("#" + i).html("<p><h3>" + DadosCandidatos[i].nome + "</h3></p>");
        
    }
}

function votar(){
    
    var x = DadosCandidatos.length;
    var candVotados = parseInt($("input:radio[name=radio]:checked").val());
    if(candVotados >= 0){
        
        for(i=0;i<x;i++){
 
        if(candVotados == i){
            if(localStorage.getItem("votacao"+i) == null)localStorage.setItem("votacao"+i,0);
            localStorage.setItem("votacao"+i,1+parseInt(localStorage.getItem("votacao"+i)));
            alert("Voto registrado com sucesso!");
            }
            }
        }else alert("Nenhum candidato selecionado! Selecione para votar.");
    }

function carregaVotos(){
    
    var x = DadosCandidatos.length;
    
    for(i=0;i<x;i++){
        if(localStorage.getItem("votacao"+i) == null)localStorage.setItem("votacao"+i,0);
        $("#"+i).html("<p><h3> " + DadosCandidatos[i].nome +"<h2>Total de Votos: </br>" + localStorage.getItem("votacao"+i) + "</h2>");

        }
    
}


function carEquipe(){
    
    var x = DadosEquipe.length;
    
    for(i=0;i<x;i++){
        
        $("#" + i).html("<p><b>Nome: " + DadosEquipe[i].nome + "<br/> RGM: " + DadosEquipe[i].rgm + "<br/> Curso: " + DadosEquipe[i].curso + "</b></p>");
    
    }
}





    

 