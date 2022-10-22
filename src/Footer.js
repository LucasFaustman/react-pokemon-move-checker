import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div className="footer">
            <h4>Created By Lucas Faustman</h4>
            <a href='https://github.com/LucasFaustman'><FontAwesomeIcon size='2x' icon={faGithub} /></a>

        </div>
    )
}