import * as React from "react";
import styles from "../SpfxReact.module.scss";
import { ISpfxReactProps } from "./ISpfxReactProps";
import App from "../home/App";

export default class SpfxReact extends React.Component<ISpfxReactProps, {}> {
  public render(): React.ReactElement<ISpfxReactProps> {
    return (
      <div className={styles.spfxReact}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <App />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
