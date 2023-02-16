import styles from '../popup/popup.module.css';
import React from 'react';

export default function Popup(props: any) {

    return (props.trigger) ? (
        <>
            <div className={'FlexCol ' + styles.PopUpOuter}>
                <div className={'FlexCol ' + styles.PopUpInner}>
                    <img onClick={() => {props.setTrigger(false)}} src='/icons/icon-x.svg' />
                    { props.children }
                </div>
            </div>
        </>
    ) : <></>;
}