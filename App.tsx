import * as React from 'react';
import { Traditional } from './TradionalWay';
import { NonTraditional } from './ContextWay';

import './style.css';
import { NonTraditional } from './ContextWay';

export default function App() {
  return (
    <div>
      <h2>Working with React Context</h2>
      <p>See notes at TradionalWay.tsx and ContextWay.tsx</p>

      <br />
      <div>
        <NonTraditional />
        <p>..........</p>
        <Traditional />
      </div>
    </div>
  );
}
