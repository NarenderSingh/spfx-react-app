import * as React from "react";
import Navigation from "./Navigation";
import Welcome from "./Welcome";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: "USER 1",
      email: "USER1@GMAIL.COM",
      model: [
        {
          field1: "Value 1",
          field2: "",
          field3: "",
          field4: ""
        },
        {
          field1: "Value 2",
          field2: "",
          field3: "",
          field4: ""
        },
        {
          field1: "Value 3",
          field2: "",
          field3: "",
          field4: ""
        }
      ]
    };
  }

  changeField = (i: number, e: any) => {
    let model = this.state.model;
    model[i][e.target.name] = e.target.value;
    this.setState({ model });
  };

  addRow = () => {
    let model = this.state.model;
    let newItem = {
      field1: "",
      field2: "",
      field3: "",
      field4: ""
    };

    model.push(newItem);
    this.setState({ model });
  };

  saveModel = () => {
    console.log(this.state.model);
  };

  render() {
    return (
      <div className="container">
        <form action="">
          <button type="button" onClick={this.addRow}>
            Add New Row
          </button>
          <hr />
          <br />
          <table className="table table-bordered">
            <tbody>
              {this.state.model.map((d: any, i: number) => (
                <tr key={i}>
                  <td>
                    <input
                      type="text"
                      name="field1"
                      className="form-control"
                      value={this.state.model[i].field1}
                      onChange={e => this.changeField(i, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="field2"
                      className="form-control"
                      value={this.state.model[i].field2}
                      onChange={e => this.changeField(i, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="field3"
                      className="form-control"
                      value={this.state.model[i].field3}
                      onChange={e => this.changeField(i, e)}
                    />
                  </td>
                  <td>
                    <select
                      name="field4"
                      className="form-control"
                      value={this.state.model[i].field4}
                      onChange={e => this.changeField(i, e)}
                    >
                      <option value="value 1">value 1</option>
                      <option value="value 2">value 2</option>
                      <option value="value 3">value 3</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr />
          <br />
          <br />
          <button type="button" onClick={this.saveModel}>
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}

export default App;
