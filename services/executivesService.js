function opneLink() { 

  window.open("<%= executive.linkedIn %>", "_blank"); 
} 

var getExecutives = function() {
    var executives = [
      {
        id: 1,
        name: 'João Selarim',
        image: 'joao.jpg',
        ocupattion: 'Chefe',
        linkedIn: 'https://br.linkedin.com/in/selarim'
      },

      {
        id: 2,
        name: 'Pedro Rezaque',
        image: 'pedro.jpg',
        ocupattion: 'Estagiário',
        linkedIn: 'https://br.linkedin.com/in/pedro-rezaque-a346339'

     
      },

      {
        id: 3,
        name: 'Maicon Milke',
        image: 'maicon.jpg',
        ocupattion: 'Professor',
        linkedIn: 'https://br.linkedin.com/in/maicon-milke-57817663'
 
      },

      {
        id: 4,
        name: 'Rodrigo Moubar',
        image: 'rodrigo.jpg',
        ocupattion: 'Programador',
        linkedIn: 'https://br.linkedin.com/in/rodrigomoubar'
      },

      {
        id: 5,
        name: 'Jorge Letra',
        image: 'jorge.jpg',
        ocupattion: 'Guarita', 
        linkedIn: 'https://br.linkedin.com/in/jorge-letra-0b2362'
      },


    ];
  
    return executives;
  }
  
  module.exports = {
    getExecutives: getExecutives
    
  }