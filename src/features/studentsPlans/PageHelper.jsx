import React from 'react'
import { Link, useParams } from "react-router-dom";
import Navigation from '../helper/navigation/Navigation';
import styles from './studentsPlans.module.css'
const PageHelper = ({ selectGroup, selectUser }) => {
    const { id } = useParams();

    let selectLesson =
        selectGroup && selectGroup.fenler.find((item) => item.id.toString() === id);
    return (
        <>
            <Navigation selectUser={selectUser} />
            <div className={`${styles.pageHelper}`}>
                <h1>{selectLesson && selectLesson.name}</h1>
                <ul>
                    <li>
                        <Link to={`/fenler/${id}/overview`}>umumi</Link>
                    </li>
                    <li>
                        <Link to={`/fenler/${id}/meetings/list`}>dersler</Link>
                    </li>
                    <li>
                        <Link to={`/fenler/${id}/discussion/list`}>qeydler</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PageHelper