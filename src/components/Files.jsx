import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Files() {
 
  return (
<>
        <h1>**Write what you Like!!!!!</h1>
    <div className='d-flex justify-content-center'>
        <div className='input-field'>
          <h4>Tell Us Your Story:</h4>
          <textarea name="body" id="body"></textarea>
          <br />
          <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event ) => {
                        console.log( event );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }/>
        </div>
    </div>
    <br />
</>
  )
}

export default Files