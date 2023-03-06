//Metodo fetch()para buscar o arquivo dados.json ou qualquer API, Transformando o resultado em um objeto , usando o método response.JSON.

fetch('dados.json')
    .then(response => response.json())
    .then(main => {

        //ACESSANDO OS DADOS DO OBJETO JSON E ADICIONANDO  AO HTML DENTRO DO ELEMENTO DIV, USANDO A PRORPIEDADE  innerHTML.
            document.getElementById('nome_AA').innerHTML = main.AA.name;
            document.getElementById('disco_AA').innerHTML = main.AA.album;
            document.getElementById('estilo_AA').innerHTML = main.AA.style;
            document.getElementById('preco_AA').innerHTML = main.AA.price;
            document.getElementById('imagem_AA').innerHTML = main.AA.imagem;
            
        
            document.getElementById('nome_AB').innerHTML = main.AB.name;
            document.getElementById('disco_AB').innerHTML = main.AB.album;
            document.getElementById('estilo_AB').innerHTML = main.AB.style;
            document.getElementById('preco_AB').innerHTML = main.AB.price;
            document.getElementById('imagem_AB').innerHTML = main.AB.imagem;
        
        
            document.getElementById('nome_AC').innerHTML = main.AC.name;
            document.getElementById('disco_AC').innerHTML = main.AC.album;
            document.getElementById('estilo_AC').innerHTML = main.AC.style;
            document.getElementById('preco_AC').innerHTML = main.AC.price;
            document.getElementById('imagem_AC').innerHTML = main.AC.imagem;
      

    });
