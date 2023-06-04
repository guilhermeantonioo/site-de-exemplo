function saveTheme(){
  if(document.body.classList.contains('dark')){
      localStorage.setItem('tema' , 'dark');
  }else{
    localStorage.removeItem('tema' , 'dark');
  }
}


document.addEventListener('DOMContentLoaded', function() {
    // Verificar se há uma preferência de tema salva
    const temaSalvo = localStorage.getItem('tema');
  
    if (temaSalvo === 'dark') {
      // Aplicar o tema escuro
      document.body.classList.add('dark');
    } else {
      // Aplicar o tema claro (padrão)
      document.body.classList.remove('dark');
    }
  });