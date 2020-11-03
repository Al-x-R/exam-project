import React from 'react';
import styles from './HowItWork.module.sass';
import Header from '../../components/Header/Header';
import HowItWorkStep from '../../components/HowItWorkStep/HowItWorkStep';
import Footer from '../../components/Footer/Footer';
import data from './steps.json';
import HowItWorkQuestionsList from '../../components/HowItWorkQuestionsList/HowItWorkQuestionsList';
import Icon from '@mdi/react';
import {mdiEmailOutline} from '@mdi/js';
import video from './HowDoesSquadhelpWork.mp4';

const HowItWork = () => {

    return (
        <>
            <Header/>
            <div className={styles.container}>
                <section className={styles.how_it_work}>
                    <div className={styles.video_instruction}>
                        <video src={video} controls="controls"/>
                    </div>
                    <div className={styles.instruction}>
                        <h2>How Does Squadhelp Work?</h2>
                        <p>
                            Squadhelp allows you to host branding competitions to engage with
                            the most creative people across the globe and get high-quality
                            results, fast. Thousands of creatives compete with each other,
                            suggesting great name ideas. At the end of the collaborative
                            contest, you select one winner. The winner gets paid, and you get a
                            strong brand name that will help you succeed! It's quick, simple,
                            and costs a fraction of an agency.
                        </p>
                    </div>
                </section>
                <h3>5 Simple Steps</h3>
                <div className={styles.steps}>
                    {data.map(step => {
                        return <HowItWorkStep number={step.step} title={step.title} description={step.description}/>;
                    })}
                </div>
                <div className={styles.how_it_work_btn}>
                    <a href="https://www.squadhelp.com/contesttype" target="_blank"><span>Start a Contest</span></a>
                </div>

                <div className={styles.general_questions}>
                    <div className={styles.question_mark}>?</div>
                    <div className={styles.question_title}>
                        <h4>Frequently Asked Questions</h4>
                    </div>
                </div>
                <HowItWorkQuestionsList/>
            </div>
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
                        <div className={styles.et_in_touch_btn}>
                            <a href="#" target="_blank">Get in touch</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default HowItWork;

