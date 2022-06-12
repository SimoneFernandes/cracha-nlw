/*com esse script vamos trocar o username q está dentro da html */
const LinkSocialMedia = {
  github: 'SimoneFernandes',
  instagram: 'simongat.fer.souza',
  facebook: 'simone.fernandesdesouza.5',
  linkedin: 'simone-fernandes-de-souza-52918273',
  twitter: 'Simone_FerSouza'
}

function changeSocialMediaLinks() {
  /*document.getElementById('userName').textContent = 'Cibele'
  ou podemos só usar essa linha de comando abaixo em vez do document.getElementById...pq o .textContent reconhece o id e faz a troca se fosse uma classe ou tag o .textContent não reconhece
  userName.textContent = 'maricota'*/

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

/*vamos criar uma nova função pra ir la no github buscar as informações e trazer para o script pra depois substituir no html  */

function getGithubProfileInfos() {
  /*const url = "htpps://api.github.com/users/simonefernandes" bem, poderiamos fazer assim mas ai depois teria q fazer na mão a troca dos todas as redes sociais, então vamos puxar pela const LinkSocialMedia no template string e faremos apena uma troca caso tenhamos q trocar de usuario */

  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  /*alert(url) fazer alert é bom pra ver se ta pegando olink q queremos */

  /* fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name
    })*/

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
      /*userLink.textContent = data.login desse jeito tirou o emblema do github deixando somente o nome, pra isso tivemos q colocar uma caixa de span no nome para ficar o emblema e o nome */
    })
}
getGithubProfileInfos()
/* o fetch guarda a url no .them promete q vai fazer guardando na variavel response,entra uma função anomima/arrow pra transfomar o conteúdo em arquivo.Json e promete e guarda numa variavel data */

/*bom, o fetch é para buscar as informações q a api quer, seria o json mas o fetch não sabe q ta pegando o tal do json e sim as informações */

/* .then() ->promessi é extamente a promessa, q é um recurso do Jsvsascript, pra pegar resposta de alguma coisa, nesse caso ele pega a resposta do fetch  */

/*arrow (flecha) function é a contração de uma função, uma forma mais simples de escrever uma função
 ai o Arrow vira uma função anônima mas com agumento e usando o sinal de igual e maior como uma flecha, mas pra chma la pra executar essa função, tem q estudar mais um pouco o javascript, disse a jaqueline kkk
 */
