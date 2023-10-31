import Title from "./components/Title/Title";
import CardEvento from "./components/CardEvento/CardEvento";
import Container from "./components/Container/Container";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Title text="teste props" />
      <Container>
        <CardEvento
          title="Titulo do Evento"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis praesentium in repellat rerum architecto laboriosam nam! Eaque eos voluptatibus earum laborum placeat consequuntur, ex alias iusto vero. Laboriosam saepe incidunt, maiores nobis repudiandae harum officia esse sint? Expedita, eaque necessitatibus? Obcaecati laborum quia facilis debitis laboriosam iusto praesentium! Ad?"
          linkText="Conectar"
        />
        <CardEvento
          title="Titulo do Evento"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis praesentium in repellat rerum architecto laboriosam nam! Eaque eos voluptatibus earum laborum placeat consequuntur, ex alias iusto vero. Laboriosam saepe incidunt, maiores nobis repudiandae harum officia esse sint? Expedita, eaque necessitatibus? Obcaecati laborum quia facilis debitis laboriosam iusto praesentium! Ad?"
          linkText="Conectar"
        />
        <CardEvento
          title="Titulo do Evento"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis praesentium in repellat rerum architecto laboriosam nam! Eaque eos voluptatibus earum laborum placeat consequuntur, ex alias iusto vero. Laboriosam saepe incidunt, maiores nobis repudiandae harum officia esse sint? Expedita, eaque necessitatibus? Obcaecati laborum quia facilis debitis laboriosam iusto praesentium! Ad?"
          linkText="Conectar"
        />
        <CardEvento
          title="Titulo do Evento"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis praesentium in repellat rerum architecto laboriosam nam! Eaque eos voluptatibus earum laborum placeat consequuntur, ex alias iusto vero. Laboriosam saepe incidunt, maiores nobis repudiandae harum officia esse sint? Expedita, eaque necessitatibus? Obcaecati laborum quia facilis debitis laboriosam iusto praesentium! Ad?"
          linkText="Conectar"
        />
      </Container>
    </div>
  );
}

export default App;
