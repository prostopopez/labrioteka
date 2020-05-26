import React from 'react';
import './style.css';
import '../../../style/main.css';

class Authors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            item: {
                name: ``,
                email: ``,
                phoneNumber: ``,
                commentaries: ``
            },
            errors: {
                name: null,
                email: null,
                commentaries: null,
                checked: null
            }
        };
    }

    render() {
        return <div className={'about'}>
            <div className={'cont'}>
                <div className={'content'}>
                    <h2 className={'titlePage'}>{`pageName`}</h2>

                    <p>
                        I On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                        the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their
                        duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                    </p>
                    <p>
                        These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice
                        is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is
                        to be welcomed and every pain avoided.
                    </p>
                    <p>
                        But in certain circumstances and owing to the claims of duty or the obligations of business it will
                        frequently occur that pleasures have to be repudiated and annoyances accepted.
                    </p>
                    <p>
                        The wise man therefore always holds in these matters to this principle of selection: he rejects
                        pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                    </p>
                    <div className={'feedbackForm'}>
                        <div className={'text'}>
                            <h2>{`feedbackFormName`}</h2>
                            <p>{`subTitle`}<span>*</span>{`subTitleRight`}</p>
                        </div>
                        <div className={'form'}>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Authors;
