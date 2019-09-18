var getProjects = function() {
    var projects = [
      {
        id: 1,
        title: 'Projeto 1',
        image: 'post1.jpg',
        description: 'Projeto pá',
        body: 'Meu primeiro post bla blaa sdfa sdfas df asdf asdf asdf asdf'
      },
      {
        id: 2,
        title: 'Projeto 2',
        image: 'post2.jpg',
        description: 'Projeto pi',
        body: 'Meu segundo post bla bla asd f 2'
      },
      {
        id: 3,
        title: 'Projeto 3',
        image: 'post2.jpg',
        description: 'Projeto po',
        body: 'Esse é o novo sistema do blog da Católica de SC'
      }
    ];
  
    return projects;
  }
  
  module.exports = {
    getProjects: getProjects
  }