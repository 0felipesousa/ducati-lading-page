import React from 'react';
import './Specifications.css';

const Specifications = () => {
  const specs = [
    { title: 'Motor', value: '937 cc' },
    { title: 'Potência', value: '111 cv' },
    { title: 'Torque', value: '93 Nm' },
    { title: 'Peso', value: '188 kg' },
    { title: 'Velocidade Máxima', value: '245 km/h' },
    { title: 'Consumo Médio', value: '19.5 km/l' },
    { title: 'Tanque', value: '15.5 L' },
    { title: 'Altura do Assento', value: '820 mm' }
  ];

  return (
    <section id="specs" className="specs">
      <div className="specs-container">
        <h2>Especificações Técnicas</h2>
        <div className="specs-grid">
          {specs.map((spec) => (
            <div key={spec.title} className="spec-card">
              <h3>{spec.title}</h3>
              <p>{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;