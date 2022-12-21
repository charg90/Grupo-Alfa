import React, { useState } from "react";
import {
  respiratorio,
  vigilancia,
  cardiovascular,
  accesoVascular,
  metabolicoNutricion,
  transfusiones,
  procedimientos,
  terapiaDeDrogras,
} from "../../Helpers/afection";
const Afections = () => {
  const afections = [
    ...respiratorio,
    ...vigilancia,
    ...cardiovascular,
    ...accesoVascular,
    ...metabolicoNutricion,
    ...transfusiones,
    ...procedimientos,
    ...terapiaDeDrogras,
  ];
  const [isChecked, setIsChecked] = useState(
    afections.map((obj) => {
      return { ...obj, active: false };
    })
  );
  const [total, setTotal] = useState(0);
  console.log(total);

  const handleChange = (id) => {
    const checkedItems = isChecked.map((item) => {
      return id === item.id ? { ...item, active: !item.active } : item;
    });
    setIsChecked(checkedItems);
  };

  const handleTotal = () => {
    console.log("hola");
    const totalPoints = isChecked.reduce((sum, state) => {
      if (state.active === true) {
        return sum + state.points;
      } else {
        return sum;
      }
    }, 0);
    setTotal(totalPoints);
  };

  return (
    <>
      {" "}
      <h1>Afections</h1>
      <h3>respiratorias</h3>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
        </tr>
        {respiratorio.map((resp) => {
          return (
            <tbody key={resp.id}>
              <tr>
                <td>{resp.name}</td>
                <td>{resp.points}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(resp.id)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h3>Vigilancia</h3>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
        </tr>
        {vigilancia.map((resp) => {
          return (
            <tbody key={resp.id}>
              <tr>
                <td>{resp.name}</td>
                <td>{resp.points}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(resp.id)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h3>Cardiovascular</h3>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
        </tr>
        {cardiovascular.map((resp) => {
          return (
            <tbody key={resp.id}>
              <tr>
                <td>{resp.name}</td>
                <td>{resp.points}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(resp.id)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h3>Acceso Vascular</h3>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
        </tr>
        {accesoVascular.map((resp) => {
          return (
            <tbody key={resp.id}>
              <tr>
                <td>{resp.name}</td>
                <td>{resp.points}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(resp.id)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h3>Metabolico Nutricion</h3>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
        </tr>
        {metabolicoNutricion.map((resp) => {
          return (
            <tbody key={resp.id}>
              <tr>
                <td>{resp.name}</td>
                <td>{resp.points}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(resp.id)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h3>Transfuciones</h3>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
        </tr>
        {transfusiones.map((resp) => {
          return (
            <tbody key={resp.id}>
              <tr>
                <td>{resp.name}</td>
                <td>{resp.points}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(resp.id)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h3>Procedimientos</h3>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
        </tr>
        {procedimientos.map((resp) => {
          return (
            <tbody key={resp.id}>
              <tr>
                <td>{resp.name}</td>
                <td>{resp.points}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(resp.id)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <h3>Terapia de drogas</h3>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Puntos</th>
        </tr>
        {terapiaDeDrogras.map((resp) => {
          return (
            <tbody key={resp.id}>
              <tr>
                <td>{resp.name}</td>
                <td>{resp.points}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleChange(resp.id)}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button onClick={() => handleTotal()}>Caluclar</button>
      <p>total Point :{total} </p>
    </>
  );
};

export default Afections;
