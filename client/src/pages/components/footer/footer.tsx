import styles from '../footer/footer.module.css';
import Link from 'next/link';

export default function Footer() {

    return (
        <>
            <div className={'FlexCol ' + styles.FooterContainer}>
                <div className={'FlexRow ' + styles.FooterContent}>
                    <div className='FlexCol'>
                        <h1 className='HeadText'>Information</h1>
                        <h1>Information regarding the state of this app</h1>
                        <h1>Support links</h1>
                        <h1>Collaboration Requests</h1>
                    </div>
                    <div className='FlexCol'>
                        <h1 className='HeadText'>Socials</h1>
                        <Link href='https://twitter.com' target='_blank' className='BoldText YellowText'>Twitter</Link>
                        <Link href='https://discord.com' target='_blank' className='BoldText YellowText'>Discord</Link>
                        <Link href='mailto:drakebuentello@gmail.com' target='_blank' className='BoldText YellowText'>Email</Link>
                    </div>
                    <div className='FlexCol'>
                        <h1 className='HeadText'>Pages</h1>
                        <Link href='/' className='BoldText YellowText'>Home</Link>
                        <Link href='/games' className='BoldText YellowText'>Games</Link>
                        <Link href='/play' className='BoldText YellowText'>Play</Link>
                        <Link href='/updates' className='BoldText YellowText'>Updates</Link>
                    </div>
                </div>
                <div className='FlexCol'>
                    <h1>View this projects source code on <Link href='https://github.com/DrakeB1234/ProjectSocialFunc' target='_blank' className='BoldText YellowText'>github</Link>!</h1>
                    <h1>All Graphics and Media created by Me!</h1>
                    <h1>© 2023 Drake Buentello</h1>
                </div>
            </div>
        </>
    )
}