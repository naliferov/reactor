import * as React from "react";
import styles from "./Post.module.scss";

export type Props = {
    title: string;
    txt: string;
};

export class Post extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {

        const post = this.props;

        return (
            <div className={styles.post}>
                <div className={styles.post_content}>
                    <div>
                        <h1>{post.title}</h1>
                        <div className={styles.post_text}>
                            <p>{post.txt}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}