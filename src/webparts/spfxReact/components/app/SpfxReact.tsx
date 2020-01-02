import * as React from "react";
import styles from "../SpfxReact.module.scss";
import { ISpfxReactProps } from "./ISpfxReactProps";
import { escape } from "@microsoft/sp-lodash-subset";
import App from "../home/App";

export default class SpfxReact extends React.Component<ISpfxReactProps, {}> {
  public render(): React.ReactElement<ISpfxReactProps> {
    return (
      <div className={styles.spfxReact}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>

              <App />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
