import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Button from "../components/Button";

function Servicios() {
  // Array con información de los servicios
  const servicios = [
    { icon: "💻", title: "Desarrollo Web", description: "Aplicaciones web modernas y rápidas", color: "primary" },
    { icon: "📱", title: "Apps Móviles", description: "Apps escalables para iOS y Android", color: "success" },
    { icon: "☁️", title: "Cloud", description: "Soluciones en la nube seguras y confiables", color: "info" },
    { icon: "🏢", title: "Bases de Datos", description: "Optimización y administración de datos", color: "warning" },
    { icon: "🛡️", title: "Seguridad", description: "Protección completa de tus sistemas", color: "danger" },
    { icon: "🚀", title: "Consultoría", description: "Impulsa tu negocio con nuestros expertos", color: "secondary" },
  ];

  return (
    <div>

      <Hero
        title="Nuestros Servicios"
        description="Conoce cómo podemos ayudarte a crecer"
        backgroundImage="https://wallpapers.com/images/hd/anime-scenery-4k-3840-x-2160-gspk0zrexw7k0dsl.jpg"
      />

      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {servicios.map((servicio, index) => (
            <div className="col-md-4" key={index}>
              <Card
                icon={servicio.icon}
                title={servicio.title}
                description={servicio.description}
                color={servicio.color}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center my-5">
        <Button
          text="Contáctanos Ahora"
          color="primary"
          size="lg"
          link="/contacto"
        />
      </div>
    </div>
  );
}

export default Servicios;
