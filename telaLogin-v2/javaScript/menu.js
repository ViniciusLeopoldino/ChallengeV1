function changeContent(contentId) {
    var contents = document.getElementsByClassName('conteudo');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
  
    // Exibir o popup após alguns segundos (ex: 1 segundos)
    setTimeout(function() {
      popup.classList.remove('hidden');
      
      // Esconder o popup após mais alguns segundos (ex: 5 segundos)
      setTimeout(function() {
        popup.classList.add('hidden');
      }, 3000); // 3000 milissegundos = 3 segundos
    }, 1000); // 1000 milissegundos = 1 segundos
  });

function logout() {
    // Fazer logout, redirecionar para a página de login
    window.location.href = "login.html";
}



