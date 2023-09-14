import './Array.css';

function Array(pros) {
  return (
    <div className="Array">
      <hr></hr>
      <div class="registro">
        <h3>{pros.prefix} {pros.dados.sobrenome}</h3>
        <p>
          Nome: {pros.dados.nome}
          <br></br>
          Idade: {pros.dados.idade}
        </p>
        <a href={`https://github.com/${pros.dados.github}`} target="_blank">GitHub: {pros.dados.github}</a>
      </div>
    </div>
  );
}

export default Array;