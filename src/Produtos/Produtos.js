import React from 'react';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smarthphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return produtos.map(({ nome, propriedades }) => (
    <div key={nome}>
      <h4>{nome}</h4>

      {propriedades.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  ));
};

export default Produtos;
