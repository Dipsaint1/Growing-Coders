import React from 'react';

const Form = () => {
  return (  
    <form>
      <div className="select">
        <label htmlFor="">Filter by programme track</label>
        <br/>
        <select name="tracks" className='filter-tracks'>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
    </form>
  );
}

export default Form;