import StyleButton from "./Button.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    icon: any;
}

export default function Button(props: Props) {
    const { icon } = props;
    return (
        <div className={StyleButton.button}>
            <FontAwesomeIcon icon={icon} className={StyleButton.icon} />
        </div>
    )
}