import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';

const CourseForm = ({allAuthors,onChange,course,errors , onSave, loading }) => {
return (
    <div>
        <h1>Manage Course</h1>
        <TextInput 
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>

         <SelectInput 
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}/>

        <TextInput 
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}/>

        <TextInput 
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}/>

        <input 
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
        </div>
);
};

CourseForm.PropTypes={
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm; 
