import './footer.scss'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

export const Footer = () => {

    return (
        <footer className='footer'>
            <div className='footer__socialMedia'>
                <AiOutlineInstagram className='footer__icons' />
                <AiOutlineTwitter className='footer__icons' />
            </div>
            <div className='footer__gmail'>
                <p className='footer__gmail__p'> <MdEmail className='envelopeIcon'/> toplevel@gmail.com</p>
            </div>
        </footer>
    )
}