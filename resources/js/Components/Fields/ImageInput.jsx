import React, { useRef, useState } from 'react';

const ImageInput = (props) => {
  const { value, onInput } = props;
  const [state, setState] = useState({ src: value })

  let fileinput = useRef(null);

  const onFileSelected = (e) => {
    try {
      onInput(e.target.files[0]);
      let image = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        setState({ src: e.target.result })
      };
    }catch(e) {}
  }

  return (
    <div>
      Upload Image
      <div className="w-full flex flex-col border border-gray-200 p-2 rounded">
        { state.src ?
          <img className="cursor-pointer" onClick={()=>{fileinput.current.click()}} src={ state.src } alt="" />
          :
          <div className="cursor-pointer" onClick={()=>{fileinput.current.click()}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        }
        <div className="cursor-pointer mx-auto" onClick={()=>{fileinput.current.click()}}>Choose Image</div>
        <input 
          className="hidden" type="file" accept=".jpg, .jpeg, .png" 
          onChange={(e)=>onFileSelected(e)} ref={fileinput} />
      </div>
    </div>
  );
}

export default ImageInput;
