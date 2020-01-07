import * as React from "react";
import styles from "../SpfxReact.module.scss";
import { ISpfxReactProps } from "./ISpfxReactProps";
import App from "../home/App";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";

export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string;
  Id: string;
}

export default class SpfxReact extends React.Component<ISpfxReactProps, {}> {
  constructor(props) {
    super(props);

    this.state = {
      context: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.context.spHttpClient);
  }

  getList = () => {
    this.props.context.spHttpClient
      .get(
        this.props.context.pageContext.web.absoluteUrl +
          `/_api/web/lists?$filter=Hidden eq false`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        console.log(response.json());
      });
  };

  public render(): React.ReactElement<ISpfxReactProps> {
    const context = this.props.context;
    console.log(context, "Home Context");

    return (
      <div className={styles.spfxReact}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}></div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={this.getList}
            >
              Get Data
            </button>
          </div>
        </div>
      </div>
    );
  }
}
