// // Context way of working with Var, Props and functions in React

import * as React from 'react';
import { createContext, useContext } from 'react';

const MyContextVar = createContext({
  startingValueParameter: 5,
});

function MyFunction() {
  const { startingValueParameter } = useContext(MyContextVar);

  return <p> My Function value: {startingValueParameter}</p>;
}

function MyOtherFunction() {
  const { startingValueParameter } = useContext(MyContextVar);

  return <p> My Other Function value: {startingValueParameter}</p>;
}

export function NonTraditional() {
  return (
    <div>
      <h4>
        Below we are using Context way to work with Var, Props and functions.
        Now we can pass the same parameter value to both components - It's like
        using shared variable (variavel compartilhada)
        <br />
      </h4>
      <MyFunction />
      <MyOtherFunction />
    </div>
  );
}

// React Context is a method to pass props from parent to child
// component(s), by storing the props in a store(similar in Redux) and
// using these props from the store by child component(s) without actually
// passing them manually at each level of the component tree.

// Notes in portuguese

// import createContext()
// Dentro do () vai um objeto ou valor inicial
// O contexto é uma função que precisa ser armazendada numa variável
// O nome da variável tem haver com o tipo de informação a ser guardada nesse contexto

// Para compartilhar a informação com os compnentes então importa tbem o useContext
// import { createContext, useContext } from 'react';

// e dentro da minha função posso buscar eg: o active cycle assim:

// function NewCycleForm() {
// const { activeCycle } = useContext(MyContextVar)

// e de dentro agora eu consigo accessar o activeCycle, assim
// return <p> NewCycleForm: {activeCycle} </p>;
