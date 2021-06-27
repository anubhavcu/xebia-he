import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const CreateBlog = ({ onAdd }) => {
  const [body, setBody] = useState('');
  const handleChange = (e, editor) => {
    const data = editor.getData();
    console.log(data);
    setBody(data);
  };
  const handleSubmit = () => {
    console.log(body);
    onAdd(body);
  };
  return (
    <div className='App'>
      <h2>Start writing below, click submit when finished</h2>

      <CKEditor
        editor={ClassicEditor}
        data='<p>Start writing ...</p>'
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          //   console.log('Editor is ready to use!', editor);
        }}
        onChange={handleChange}
        // onBlur={(event, editor) => {
        //   console.log('Blur.', editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log('Focus.', editor);
        // }}
      />
      <button className='btn btn-dark my-3' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
export default CreateBlog;
