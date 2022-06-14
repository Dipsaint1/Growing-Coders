import React from 'react';

const Form = ({setTrack, filteredTracks}) => {
  const statusHandler = (e) => {
    setTrack(e.target.value);
  }

  return (  
    <form>
      <div className="select container-fluid">
        <label htmlFor="">Filter by programme track</label>
        {/* <br/> */}
        <select onChange={statusHandler} name="tracks" className='filter-tracks'>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
        </select>
      </div>
    </form>
  );
}

export default Form;