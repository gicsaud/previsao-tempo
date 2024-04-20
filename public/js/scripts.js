
function formatarData(){
    const dataAtual = new Date();
    const format = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',      
      month: 'long',        
      year: 'numeric'       
    });
    
    const dataFormatada = format.format(dataAtual); 
    
    const pData = document.getElementById('date');
    pData.textContent = dataFormatada;
    }
    
    document.addEventListener('DOMContentLoaded', (event) => {
        formatarData(); // Isso chamará sua função assim que o DOM estiver pronto
      });
    
      function buscarTemperatura(cidade) {
        fetch(`/api/weather?city=${cidade}`)
          .then(response => response.json())
          .then(data => {
            if (data.by === 'default') {
              alert('Cidade não encontrada.');
            } else {
              const temperatura = data.results.temp;
              alert(`A temperatura em ${cidade} é: ${temperatura}ºC`);
            }
          })
          .catch(error => {
            console.error('Erro ao buscar dados da API', error);
          });
      }
      