import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

function Blog() {
  // articukos de ejemplo
  const articulos = [
    {
      title: "Cómo mejorar tu productividad",
      description: "Consejos prácticos para organizar tu tiempo y ser más eficiente.",
      icon: "📝",
      color: "primary",
      link: "/blog/articulo-1"
    },
    {
      title: "Tendencias de desarrollo web 2025",
      description: "Descubre las nuevas tecnologías que dominarán el mundo del frontend y backend.",
      icon: "💻",
      color: "success",
      link: "/blog/articulo-2"
    },
    {
      title: "Seguridad informática esencial",
      description: "Protege tus sistemas y datos con estos consejos básicos de ciberseguridad.",
      icon: "🛡️",
      color: "danger",
      link: "/blog/articulo-3"
    },
    {
      title: "Cómo crear aplicaciones móviles",
      description: "Guía rápida para empezar a desarrollar apps para iOS y Android.",
      icon: "📱",
      color: "info",
      link: "/blog/articulo-4"
    },
    {
      title: "Bases de datos modernas",
      description: "Introducción a bases de datos SQL y NoSQL para principiantes.",
      icon: "🗄️",
      color: "warning",
      link: "/blog/articulo-5"
    },
    {
      title: "Consultoría tecnológica",
      description: "Cómo un experto puede ayudarte a escalar tu negocio con tecnología.",
      icon: "🚀",
      color: "secondary",
      link: "/blog/articulo-6"
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Nuestro Blog</h1>
      <div className="row g-4 justify-content-center">
        {articulos.map((articulo, index) => (
          <div className="col-md-4" key={index}>
            <Card
              icon={articulo.icon}
              title={articulo.title}
              description={articulo.description}
              color={articulo.color}
            />
            <div className="text-center mt-3">
              <Button
                text="Leer más"
                color={articulo.color}
                size=""
                link={articulo.link}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
