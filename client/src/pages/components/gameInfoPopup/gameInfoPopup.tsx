// import components / styles
import styles from './gameInfoPopup.module.css';
import Gamehowmany from './gameContent/howmany';
import Gamehowmany2 from './gameContent/howmany2';
import Gamehowmany3 from './gameContent/howmany3';

export default function GameInfo(props: any) {

  return (
    <div className={'FlexColCenter ' + styles.GameInfoParent}>
      {(props.gameTitle == 'howmany') ? <Gamehowmany settrigger={ props.settrigger } /> : <></>}
      {(props.gameTitle == 'howmany2') ? <Gamehowmany2 settrigger={ props.settrigger } /> : <></>}
      {(props.gameTitle == 'howmany3') ? <Gamehowmany3 settrigger={ props.settrigger } /> : <></>}
    </div>
  )
}