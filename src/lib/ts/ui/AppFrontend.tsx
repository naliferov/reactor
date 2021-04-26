import {Post} from "./components/Post/Post";
import "./../../../frontend/css/index.css"
import styles from "./AppFrontend.module.scss";
import * as React from "react";

interface Props {
    route: string;
}

export default class AppFrontend extends React.Component<Props> {

    constructor(props: any) {
        super(props);
    }

    render() {
        const route = this.props.route;

        return (
            <div>
                <nav>
                    <div className="leftNav">
                        <a className={`${styles.navItem} ${route === '/main' ? styles.navItemActive : ''}`} href="/">main</a>
                        <a className={`${styles.navItem} ${route === '/blog' ? styles.navItemActive : ''}`} href="/blog">blog</a>
                    </div>
                </nav>
                <div className={styles.page}>
                    {<Post title={'Post title'} txt={"Some post txt"}/>}
                </div>
            </div>
        );
    }
}