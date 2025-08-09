import Block from "@/components/lota/Block";
import BlockEmpy from "@/components/lota/BlockEmpy";

const page = () => {
  const filasLota = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const creartablero = () => {
    for (let i = 0; i <= 2; i++) {
      let numeros = [];
      while (numeros.length < 5) {
        let num = Math.floor(Math.random() * 9);
        if (!numeros.includes(num)) {
          numeros.push(num);
        }
      }
      for (let j = 0; j < numeros.length; j++) {
        filasLota[i][numeros[j]] = -1;
      }
    }
    for (let i = 0; i <= 8; i++) {
      let valor = [];
      let total = 0;
      for (let j = 0; j <= 2; j++) {
        if (filasLota[j][i] === -1) {
          total++;
        }
      }
      if (total > 0) {
        while (valor.length < total) {
          let min = 0;
          let max = 0;
          if (i === 0) {
            min = 1;
            max = 9;
          } else if (i === 8) {
            min = 80;
            max = 90;
          } else {
            min = i * 10;
            max = min + 9;
          }
          let num = randomEntero(min, max);
          if (!valor.includes(num)) {
            valor.push(num);
          }
        }
        valor = [valor.sort()];
        for (let j = 0; j <= 2; j++) {
          if (filasLota[j][i] === -1) {
            filasLota[j][i] = valor[0].shift();
          }
        }
      }
    }
  };

  const randomEntero = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  creartablero();
  return (
    <div className="container m-auto bg-gray-300 p-4 ">
      <div className="border-2 border-sky-400 bg-gray-100 grid grid-cols-9 p-4 w-fit m-auto   ">
        {filasLota[0].map((block, index) =>
          block > 0 ? (
            <Block key={index} number={block} />
          ) : (
            <BlockEmpy key={index} />
          )
        )}
        {filasLota[1].map((block, index) =>
          block > 0 ? (
            <Block key={index} number={block} />
          ) : (
            <BlockEmpy key={index} />
          )
        )}
        {filasLota[2].map((block, index) =>
          block > 0 ? (
            <Block key={index} number={block} />
          ) : (
            <BlockEmpy key={index} />
          )
        )}
      </div>
    </div>
  );
};
export default page;
