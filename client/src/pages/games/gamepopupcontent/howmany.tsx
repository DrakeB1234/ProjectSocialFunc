import styles from '../gamepopupcontent/game.module.css';
import Link from 'next/link';

export default function Game() {

    return (
        <>
        <div className={'FlexCol ' + styles.GameContainer}>
            <h1 className='HeadText BoldText'>How Many?</h1>
            <img src='/gamebanner-socialfunc.png' />
            <div className={'FlexRow ' + styles.GameInfo}>
                <h1>Players: <span>3-8</span></h1>
                <h1>Time: <span>10-15 minutes</span></h1>
                <h1>Play: <span>Local</span></h1>
            </div>
            <div className={'FlexRow ' + styles.GameInfo}>
                <Link href='' className='SubHeadText BoldText BlackText'>Host Game</Link>
            </div>
            <div className={'FlexCol ' + styles.GameContent}>
                <h1 className='HeadText GreyText'>Description</h1>
                <h2 className='SubHeadText'>&emsp;This is a game about strategy. Work together with
                    randomly assigned companions to figure out just how many are
                    there? Great for large groups and highly interactable.
                </h2>
                <h1 className='HeadText GreyText'>How to Play</h1>
                <ol>
                    <li className='SubHeadText'>1: Groups will be automatically assigned</li>
                    <li className='SubHeadText'>2: Each group must agree on a team name</li>
                    <li className='SubHeadText'>3: Once every team is ready, game will automatically start</li>
                </ol>
                <h1 className='HeadText GreyText'>How to Host Game</h1>
                <h2 className='SubHeadText'>&emsp;In order to play this game, first have one device dedicated
                to the "display" device <span className='BlackText BoldText'>(this device would not be able to partipate)</span>. Have other players join
                with displayed room code. Once enough players have joined, the host device can select start game.
                </h2>
            </div>
        </div>
        </>
    )
}