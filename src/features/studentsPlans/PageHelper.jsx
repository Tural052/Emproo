import React from 'react'
import { Link, useParams } from "react-router-dom";
import Navigation from '../helper/navigation/Navigation';
const PageHelper = ({selectGroup,selectUser}) => {
    const { id } = useParams();

    let selectLesson =
        selectGroup && selectGroup.fenler.find((item) => item.id.toString() === id);
    return (
        <>
            <Navigation selectUser={selectUser} />
            <div>
                {selectLesson && selectLesson.name}
                <ul>
                    <li>
                        <Link to={`/fenler/${id}/overview`}>umumi</Link>
                        <Link to={`/fenler/${id}/meetings/list`}>dersler</Link>
                        <Link to={`/fenler/${id}/discussion/list`}>qeydler</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PageHelper