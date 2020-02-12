import * as React from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

class AutoComplete extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      user: "USER 1",
      email: "USER1@GMAIL.COM",
      model: [
        {
          selected: [],
          field1: "Value 1",
          field2: "",
          field3: "",
          field4: ""
        }
      ],
      isLoading: false
    };
  }

  render() {
    return (
      <div className="container">
        <h2>Auto Complete in Grid</h2>
        <AsyncTypeahead
          isLoading={this.state.isLoading}
          onSearch={query => {
            this.setState({ isLoading: true });
            fetch(`https://api.github.com/search/users?q=${query}`)
              .then(resp => resp.json())
              .then(json =>
                this.setState({
                  isLoading: false,
                  options: json.items
                })
              );
          }}
          options={this.state.options}
          labelKey={option => `${option.login}`}
        />
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
                    <AsyncTypeahead
                      id="field0"
                      name="selected"
                      onSearch={query => {
                        this.setState({ isLoading: true });
                        fetch(`https://api.github.com/search/users?q=${query}`)
                          .then(resp => resp.json())
                          .then(json => {
                            this.setState({
                              isLoading: false,
                              options: json.items
                            });
                          });
                      }}
                      options={this.state.options}
                      labelKey={option => `${option.login}`}
                      selected={this.state.model[i].selected}
                      onChange={e => this.changeTypeAhead(i, e)}
                    />
                  </td>
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
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                    </select>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={e => this.remove(i, e)}
                    >
                      Remove
                    </button>
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

  changeField = (i: number, e: any) => {
    let model = this.state.model;
    model[i][e.target.name] = e.target.value;

    this.setState({ model });
  };

  changeTypeAhead = (i: number, e: any) => {
    let model = this.state.model;
    model[i].selected = e;

    this.setState({ model });
  };

  addRow = () => {
    let model = this.state.model;
    let newItem = {
      selected: [],
      field1: "",
      field2: "",
      field3: "",
      field4: ""
    };

    model.push(newItem);
    this.setState({ model });
  };

  remove = (index: number, e: any) => {
    let model = this.state.model;
    model.splice(index, 1);

    this.setState({ model });
  };

  saveModel = () => {
    console.log(this.state.model);
  };
}

export default AutoComplete;
