import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';

const CourseList = ({courses}) => {
    return (
        <table className="table">
            <thead>
                <tr>    
                     <th></th>      
                    <th>Title</th>
                    <th>Author id</th>
                    <th>Category</th>
                    <th>Length</th>
                    </tr>
            </thead>
            <tbody>
                {courses.map(course => 
                <CourseListRow  course={course} />)
                 }
                </tbody>
            </table>
    );
};

CourseList.PropTypes= {
    courses: PropTypes.array.isRequired
};

export default CourseList;