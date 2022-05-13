import StyleCredentials from "./Credentials.module.scss";

export default function Credentials() {
    return (
        <div className={StyleCredentials.credentials}>
            <h1 className={StyleCredentials.credentials__h1}>
                Guilherme Amorim
            </h1>
            <h2 className={StyleCredentials.credentials__h2}>
                Full Stack
            </h2>
        </div>
    )
}