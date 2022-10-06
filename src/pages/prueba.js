import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <table
        style={{
          border: "solid 1px black",
          display: "block",
          height: "150px",
          overflow: "auto"
        }}
      >
        <thead>
          <th
            style={{ position: "sticky", top: 0, "background-color": "white" }}
          >
            ID
          </th>
          <th
            style={{ position: "sticky", top: 0, "background-color": "white" }}
          >
            Texto
          </th>
          <th
            style={{ position: "sticky", top: 0, "background-color": "white" }}
          >
            Texto 1
          </th>
          <th
            style={{ position: "sticky", top: 0, "background-color": "white" }}
          >
            Texto 2
          </th>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <tr key={i} style={{ "background-color": i % 2 ? "gray" : "" }}>
              <td>{i}</td>
              <td style={{ "min-width": "300px" }}>
                Esto es texto en la table de brandon
              </td>
              <td style={{ "min-width": "300px" }}>
                Esto es texto en la table de brandon
              </td>
              <td style={{ "min-width": "300px" }}>
                Esto es texto en la table de brandon
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
