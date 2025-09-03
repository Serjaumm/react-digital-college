export default function Footer({ listaFrutas, melhorFruta, idade, text }) {
  console.log(listaFrutas);

  function handleClickButton2() {
    console.log("ClIQUEI NO BOTAO 02");
  }

  function resultado() {
    const result = idade + 10;

    return result;
  }

  const resultadoDaFuncao = resultado();

  return (
    <div>
      <p>{listaFrutas[0]}</p>
      <p>{listaFrutas[1]}</p>
      <p>{listaFrutas[2]}</p>
      <p>{melhorFruta}</p>
      <p>{resultadoDaFuncao}</p>
      <button onClick={handleClickButton2}>{text}</button>
    </div>
  );
}
