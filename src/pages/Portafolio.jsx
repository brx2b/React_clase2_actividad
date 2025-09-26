import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

function Portafolio() {
  const proyectos = [
    {
      title: "Proyecto Web 1",
      description: "Landing page moderna creada con React y Bootstrap",
      icon: "💻",
      color: "primary"
    },
    {
      title: "App Móvil 2",
      description: "Aplicación móvil multiplataforma para iOS y Android",
      icon: "📱",
      color: "success"
    },
    {
      title: "Proyecto Cloud 3",
      description: "Solución en la nube con bases de datos y servicios escalables",
      icon: "☁️",
      color: "info"
    }
  ];

  return (
    <div>
      {/* Hero con Lorem Ipsum */}
      <Hero
        title="Mi Portafolio"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        backgroundImage="https://wallpaperdelight.com/wp-content/uploads/2024/06/A-dramatic-wallpaper-showcasing-intricate-gothic-architecture-features-such-as-pointed-arches-gargoyles-and-flying-buttresses-against-a-stormy-sky-background.jpg"
      />

      <div className="container my-5">
        <h2 className="text-center mb-4">Proyectos Destacados</h2>
        <div className="row g-4 justify-content-center">
          {proyectos.map((proyecto, index) => (
            <div className="col-md-4" key={index}>
              <Card
                icon={proyecto.icon}
                title={proyecto.title}
                description={proyecto.description}
                color={proyecto.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portafolio;
