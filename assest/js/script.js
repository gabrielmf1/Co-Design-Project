/*
  Se não sabe o que é isto, volte para os vídeos de JavaScript.
*/

// Open the full screen search box 


document.addEventListener('DOMContentLoaded', function() {

  function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
  }

// Close the full screen search box 
  function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
  }
    /*let menuitem = document.querySelector('button.menu-item')

    let keys

    keys = document.querySelectorAll('.menu-total')

    for(let key of keys) {
      key.addEventListener('click', function() {
        concDigit(menuitem, key.innerHTML)
      })
    }
  /*
    Se não sabe o que é isto, volte ao ingrediente 2.
  */
  let db = connect('https://p-co-desig.firebaseio.com/')

  /*
    Uma query string é uma maneira de colocar um dicionário
    no próprio endereço da página. O início dela é marcado
    por um "?" e ela consiste em um número indeterminado de
    pares "chave=valor" separados por "&".

    A função extract lê a query string da página atual e
    transforma ela em um dicionário JavaScript usual.
  */
  let params = extract()

  /*
    Se não sabe o que é isto, volte ao ingrediente 3.
  */

/*  let path = "/area/" + params["projeto"]*/
  let path = '/' + params['area'] + '/' + params['projeto']
  console.log(path)
  db.download(path, function(data) {
    /*
      Se não sabe o que é isto, volte ao ingrediente 3.
    */
    replace('body', {
        'D': data['descricao'],
        'G': data['goal'],
        'T': data['titulo'],
        'S': data['semestre'],
        'M': data['materia'],
        'I': data['image'],
    })
  })
})