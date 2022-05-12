import StylePhoto from './Photo.module.scss';
import photo from 'assets/photo.jpg';

export default function Photo() {
    return (
        <div className={StylePhoto.photo_div}>
            <img className={StylePhoto.photo} src={photo} alt={"Guilherme Amorim"} />
        </div>
    )
}