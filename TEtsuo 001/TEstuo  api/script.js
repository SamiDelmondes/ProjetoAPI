
const myArray =`{"nome1":"Charlie Brown Jr.", "musica1":"Meu Novo Mundo", "idade1":"31 anos",
                "nome2":"Highly Suspect", "musica2":" My Names is Human", "idade2":"14 anos", 
                "nome3":"Avicii", "musica3":" Waiting For Love ", "idade3":"28 anos",
                "nome4":"Mac Miller", "musica4":" Self care", "idade4":" 26 anos",
                "nome5":"Post Malone", "musica5":" I Fall Apart", "idade5":" 27 anos",
                "nome6":"Imagine Dragons", "musica6":" Radioactive", "idade6":" 15 anos"
                }`

const data = JSON.parse(myArray);

function api1(){
    
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome1;
    document.getElementById("musica").innerHTML = `Música: ` + data.musica1;
    document.getElementById("idade").innerHTML = `Idade da banda: ` + data.idade1;
    document.getElementById("video").setAttribute('src', './midia/novoMundo.mp4')

}

function api2(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome2;
    document.getElementById("musica").innerHTML = `Música: ` + data.musica2;
    document.getElementById("idade").innerHTML = `Idade da banda: ` + data.idade2;
    document.getElementById("video").setAttribute('src', './midia/myName.mp4')
}

function api3(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome3;
    document.getElementById("musica").innerHTML = `Música: ` + data.musica3;
    document.getElementById("idade").innerHTML = `Idade: ` + data.idade3;
    document.getElementById("video").setAttribute('src', './midia/avicci.mp4')
    
}

function api4(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome4;
    document.getElementById("musica").innerHTML = `Música: ` + data.musica4;
    document.getElementById("idade").innerHTML = `Idade : ` + data.idade4;0
    document.getElementById("video").setAttribute('src', './midia/Self.mp4')
    
}

function api5(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome5;
    document.getElementById("musica").innerHTML = `Música: ` + data.musica5;
    document.getElementById("idade").innerHTML = `Idade : ` + data.idade5;
    document.getElementById("video").setAttribute('src', './midia/IFallApart.mp4')
}

function api6(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome6;
    document.getElementById("musica").innerHTML = `Música: ` + data.musica6;
    document.getElementById("idade").innerHTML = `Idade da banda: ` + data.idade6;
    document.getElementById("video").setAttribute('src', './midia/Dragons.mp4')
}

