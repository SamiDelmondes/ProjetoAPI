fetch('http://viacep.com.br/ws/08770610/json/').then(Response => {
    return Response.json()
}).then(corpo =>{
    //console.log(corpo)
    document.getElementById("rua").value = corpo.logradouro;
    document.getElementById("estado").innerHTML = corpo.add;
})