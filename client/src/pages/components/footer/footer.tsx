import styles from '../footer/footer.module.css';
import Link from 'next/link';

export default function Footer() {

    return (
        <>
            <div className={'FlexCol ' + styles.FooterContainer}>
                <div className={'FlexRow ' + styles.FooterContent}>
                    <div className='FlexCol'>
                        <h1 className='SubHeadText BoldText'>Information</h1>
                        <h1>Information regarding the state of this app</h1>
                        <h1>Support links</h1>
                        <h1>Collaboration Requests</h1>
                    </div>
                    <div className='FlexCol'>
                        <h1 className='SubHeadText BoldText'>Socials</h1>
                        <h1>SocialFunc social media accounts</h1>
                        <Link href='https://twitter.com' className='BoldText YellowText'>Twitter</Link>
                        <Link href='https://discord.com' className='BoldText YellowText'>Discord</Link>
                        <Link href='mailto:drakebuentello@gmail.com' className='BoldText YellowText'>Email</Link>
                    </div>
                </div>
                <h1>You can find this project on <Link href='https://github.com/DrakeB1234/ProjectSocialFunc' className='BoldText YellowText'>Github!</Link></h1>
                <h1>Artwork and graphics all are created in house</h1>
                <h1>© 2023 Drake Buentello</h1>
            </div>
        </>
    )
}