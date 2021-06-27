import React from 'react';

const SearchBlog = ({ searchingText }) => {
  //   const emptyField = () => {};
  return (
    <div>
      <form className='form-inline'>
        <div>
          <input
            type='text'
            placeholder='Type to search..'
            //   value={text}
            onChange={(e) => searchingText(e.target.value)}
            className='form-control mr-sm-2'
            // onKeyDown={(e) => searchingText(e.target.value)}
          />

          {/* <input
            type='reset'
            // value='Clear Search'
            defaultValue=''
            onClick={emptyField}
          /> */}
        </div>
      </form>
    </div>
  );
};

export default SearchBlog;
