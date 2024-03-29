import CourseStars from './CourseStars';
import { Link } from 'react-router-dom';
import { imagepaths } from './App';

function CourseCard(props) {
    let imgpath;
    if (props.name in imagepaths) imgpath = imagepaths[props.name];
    else imgpath = 'placeholder.png';

    return (
        <div className={`course-card ${props.name.replace(/[&\s]/g, '')}`}>
            <div className="course-banner">
                <Link to={"/course/" + props.name}><img className="course-preview" src={require(`./images/${imgpath}`)} alt="course preview"/></Link>
            </div>
            <div className="course-info">
                <h4>{ props.name }</h4>
                <p><a href="https://www.freecodecamp.org/" target="_">{ props.org }</a></p>
                <CourseStars />
            </div>
        </div>
    );
}

export default CourseCard;