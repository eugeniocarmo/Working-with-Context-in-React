// // Tradicional way of working with Var, Props and functions in React

import * as React from 'react';

function NewCycleForm({ activeCycle }: { activeCycle: number }) {
  return <p> NewCycleForm {activeCycle}</p>;
}

function Countdown({ activeCycle }: { activeCycle: number }) {
  return <p>Countdown {activeCycle}</p>;
}

export function Traditional() {
  const activeCycleVar1 = 1;
  const activeCycleVar2 = 2;

  return (
    <div>
      <h4>
        Below we are using the tradicional way to work with Var, Props and
        functions in React without using Context
      </h4>
      <NewCycleForm activeCycle={activeCycleVar1} />
      <Countdown activeCycle={activeCycleVar2} />
    </div>
  );
}

// Notes in portuguese:
// Se eu quero o valor da variável const activeCycle = 1;
// tenha o seu valor accesado dentro dos componentes,
// então eu envio para ambos via propriedade da função() esse valor da variável
// Sending variables via properties in the normal way without Context
// mas usando o contexto no React, eu quero evitar enviar muitas variáveis.
{
  /* <NewCycleForm activeCycle={activeCycleVar} />
  <Countdown activeCycle={activeCycleVar}

// Context from 2:30 */
}

// Simple Tradicional way of working with Var, Props and functions in React  (simplified code below with error just for explanation purpose)

// import * as React from 'react';

// function NewCycleForm() {
//   return <h1> NewCycleForm {activeCycle}</h1>;
// }

// function Countdown() {
//   return <h1>Countdown {activeCycle}</h1>;
// }

// export function Home() {
//   const activeCycleVar = 1;

//   return (
//     <div>
//       <NewCycleForm activeCycle />
//       <Countdown activeCycle />
//     </div>
//   );
// }
