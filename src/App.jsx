//no topo eu tenho as importações (imports)

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


export default function App () {

//aqui é área lógica (js)
  const eu = {
    nome: 'Sérgio',
    idade: 23,
    altura: 1.83,
    profissão: 'Desenvolvedor Full Stack'
  };

  const logo = "MINHA LOGO";

  return (
    <div>
      <Header logo={logo}/>
      <h1>
        Olá ReactJS {eu.nome}, tenho {eu.idade} anos, minha altura é {eu.altura}m e sou {eu.profissão}
      </h1>
      <button>Clique aqui</button>
      <Footer/>
    </div>
  );
}
