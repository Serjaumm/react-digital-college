import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {
  const nome = "Daniel";

  const listaFrutas = ["uva", "manga", "morango"];

  const result = listaFrutas[2] === "morango" ? "é bom" : "é ruim";

  const logo = "MINHA LOGO";

  const melhorFruta = "banana";

  function handleClickButton() {
    console.log("CLIQUEI NO BOTAO");
  }

  const pessoa = {
    nome: "Sergio",
    idade: 23,
    profissao: "Progrmador",
  };

  return (
    <div>
      <Header logo={logo} melhorFruta={melhorFruta} />
      <h1>
        Olá ReactJS {nome} - {result} - {melhorFruta} - {pessoa.nome}
      </h1>
      <button onClick={handleClickButton}>Clique aqui</button>
      <Footer
        listaFrutas={listaFrutas}
        melhorFruta={melhorFruta}
        idade={pessoa.idade}
        text={"Fazer Login"}
      />
    </div>
  );
}
