import photo from 'assets/photo.jpg';
import StylePhoto from "./Photo.module.scss";

export default function Photo() {
    return (
        <div className={StylePhoto.photo_box}>
            <img src={photo} alt="Guilherme Amorim" className={StylePhoto.photo} />
        </div>
    )
}