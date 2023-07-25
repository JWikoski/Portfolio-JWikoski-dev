import React, { useContext, useState  } from 'react';
import '../CSS/DetalhesProjeto.css';
import { MyContext } from "./Context";

function DetalhesProjetos() {  
  const {openDetalhes, updatetOpenDetalhes } = useContext(MyContext);
  const [zoomIn, setzoomIn] = useState(false);
  const listaDeProjetos = [
    {  id: 1, 
      nome: 'Plataforma Desktop - VTT (Virtual Tabletop)', 
      linguagem: 'C# e PostgreSQL', 
      detalhes1: <p className='conteudo_detalhes'>
          O Virtual Tabletop (VTT) foi o projeto que marcou o início dos meus estudos aprofundados em programação. Inicialmente, concebido como um experimento, esse projeto logo se tornou uma ferramenta essencial para mim e meus amigos, já que compartilhamos o mesmo hobby de participar de mesas de RPG.
          <br /><br />
          Utilizando a linguagem de programação C# e o modelo Winforms do Visual Studio, comecei o desenvolvimento da plataforma para ser executada de forma totalmente desktop, proporcionando maior desempenho e segurança para os jogadores. Para a persistência dos dados, escolhi o banco de dados PostgreSQL, o que me permitiu explorar a fundo suas funcionalidades e aprender mais sobre gerenciamento de dados.
          <br /><br />
          A integração com o banco de dados foi realizada através do NPGSQL. Além disso, a hospedagem do VTT foi feita na plataforma Supabase, proporcionando aos usuários uma experiência estável e livre de preocupações.
       </p>,
      
      detalhes2: <p className='conteudo_detalhes'>
      A versão mais recente do VTT está totalmente completa e pronta para uso, atendendo a todas as necessidades essenciais para jogos de RPG de mesa. Embora o desenvolvimento de novas atualizações para este aplicativo tenha cessado, ele permanece como um marco importante no meu percurso.
      <br /><br />
      Se você deseja experimentar o Virtual Tabletop, ele está disponível para download. Sinta-se à vontade para explorar esta ferramenta e vivenciar a experiência de RPG de mesa de uma forma completamente nova!
      </p>,
      src: 'https://picsum.photos/1640/1080'},

    { id: 2, 
      nome: 'Plataforma Web - VTT (Virtual Tabletop)', 
      linguagem: 'React e PostgreSQL', 
      detalhes1: <p className='conteudo_detalhes'>
          Após a conclusão de meu primeiro projeto VTT, minha busca por aprimorar minhas habilidades me levou a explorar outras linguagens de programação e novas ferramentas, o que resultou no desenvolvimento de uma nova plataforma ainda mais avançada e flexível.
           </p>,
      
      detalhes2: <p className='conteudo_detalhes'>
      O uso do Winforms facilitava muito o design, pois a componentização pronta do C# e modelagem visual das telas deixavam algumas tarefas mais simples.
      <br /><br />
      Enquanto o Winforms oferecia facilidade na criação de componentes usando C# e modelagem visual das telas, ele também apresentava algumas limitações no front-end, restringindo minhas possibilidades de personalização e criatividade.
     </p>,
      src: 'https://picsum.photos/1640/720'},

    { id: 3, 
      nome: 'Meu Portfólio', 
      linguagem: 'React e CSS', 
      detalhes1: <p className='conteudo_detalhes'>
        Este Portfólio é o resultado do meu comprometimento com o design feito por código, sem o uso de ferramentas prontas, tornando cada projeto único, totalmente flexível e moldável.
        </p>,
      
      detalhes2: <p className='conteudo_detalhes'>
      Desenvolvido em React, ele tem como principal objetivo apresentar não apenas o meu trabalho, mas também quem eu sou como profissional. Cada projeto reflete o meu empenho em criar experiências significativas, onde o design e a funcionalidade se complementam harmoniosamente.
      <br /><br />
      Sinta-se à vontade para explorar e conhecer o meu trabalho. Se você se interessar por alguma colaboração ou projeto em conjunto, não hesite em entrar em contato.
     </p>,
      src:'https://picsum.photos/1980/1080'},

    { id: 4, 
      nome: 'Lista de tarefas - My Tasks', 
      linguagem: 'C# e PostgreSQL', 
      detalhes1: <p className='conteudo_detalhes'>
         Meu projeto "My Tasks" visa aprimorar minha organização pessoal e profissional, fornecendo uma plataforma para definir metas, obrigações e prazos importantes, além de planejar rotinas e atividades diárias.
        </p>,
      
      detalhes2: <p className='conteudo_detalhes'>
     Embora o projeto ainda esteja em fase de desenvolvimento, estou ansioso para apresentar a versão completa em breve e compartilhar minha evolução e aprendizado ao longo do processo de criação.
      </p>,
      src: 'https://picsum.photos/1640/1080'}
  ];

  const detalheProjeto = listaDeProjetos.find(projeto => projeto.id === openDetalhes);
  
  function updateDetalhes(value){
    zoomIn ? setzoomIn(false) : updatetOpenDetalhes(value);
    
  }

  return (
      <div className={`container_detalhesP ${openDetalhes > 0 ? 'open' : ''}`} onClick={() => updateDetalhes(0)}>
        <div className={`scroll painel_detalhes ${openDetalhes > 0 ? 'open' : ''}`} onClick={(event) => event.stopPropagation()}>
          <button className='btn_fechar' onClick={() => updateDetalhes(0)}>X</button>
          <h1 style={{textAlign:'center'}}>{detalheProjeto ? detalheProjeto.nome : 'Conteúdo não encontrado'}</h1>
          {detalheProjeto ? detalheProjeto.detalhes1 : 'Conteúdo não encontrado'}
          <img onClick={() => setzoomIn(!zoomIn)} className={`img_detalhes1 ${zoomIn ? 'zoom' : ''}`} src={detalheProjeto ? detalheProjeto.src : null}></img>
          {detalheProjeto ? detalheProjeto.detalhes2 : 'Conteúdo não encontrado'}
          
        </div>
      </div>
    ) 
}

export default DetalhesProjetos;
