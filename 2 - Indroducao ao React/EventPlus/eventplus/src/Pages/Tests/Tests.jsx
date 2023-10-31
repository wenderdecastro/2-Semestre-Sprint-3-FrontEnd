import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const Tests = () => {

  const Input = ({onChange, type, placeholder, id})
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);



  return (
    <div>
      <form action="">
        <h2>Calculadora</h2>

        <br />
        
        <Input
          type={"number"}
          placeholder={"Insira um número:"}
          name={"input1"}
          id={"number1"}
          value={n1}
          onChange={(e) => { setN1(e.target.value) }}
        />
        <br />
        <br />
        <Input
          type={"number"}
          placeholder={"Insira um número:"}
          name={"input2"}
          id={"number2"}
          value={n2}
          onChange={(e) => { setN2(e.target.value) }}
        />
        <br />
        <br />
        <Button text={"Calcular"} type={"submit"} />
      </form>
    </div>
  );
};

export default Tests;
