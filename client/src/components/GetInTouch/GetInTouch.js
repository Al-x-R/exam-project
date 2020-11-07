import React from 'react';
import Icon from '@mdi/react';
import {mdiEmailOutline} from '@mdi/js';
import styles from './GetInTouch.module.sass';

const GetInTouch = () => {
    return (
        <section className={styles.get_in_touch}>
            <div className={styles.container}>
                <div className={styles.get_in_touch_wrapper}>
                    <div className={styles.icon}>
                        <Icon path={mdiEmailOutline}
                              size={2}
                              color="#455a89"/>
                    </div>
                    <div className={styles.contacts}>
                        <h1>Questions?</h1>
                        <div className={styles.contacts_text}>Check out our <a href="#" target="_blank">FAQs</a>
                            or send us a <a href="#" target="_blank">message</a>.
                            For assistance with launching a contest, you can also call us at (877)&nbsp;355-3585 or
                            schedule a <a href="#" target="_blank">Branding Consultation</a>
                        </div>
                    </div>
                    <div className={styles.get_in_touch_btn}>
                        <a href="#" target="_blank">Get in touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
