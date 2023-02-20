import styles from '../popupcontent/helppopup.module.css';
import Link from 'next/link';

export default function Help() {
    return (
        <>
        <div className={'FlexCol ' + styles.HelpContainer}>
            <h1 className='HeadText BlackText BoldText'>Help</h1>
        </div>
        </>
    )
}