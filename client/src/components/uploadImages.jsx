import React, { Fragment, useState } from 'react';
import http from "../services/httpService"; 
import { ToastContainer, toast } from 'react-toastify';
import Progress from './progress';
import 'react-toastify/dist/ReactToastify.css';

const FileUpload = () => {
    const [movieImg, setMovieImg] = useState("");
    const [filename, setFilename] = useState("Choose File");
    const [uploadedFile, setUploadedFile] = useState({});
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = e => {
        setMovieImg(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("movieImg", movieImg); 

        const res = await http.post("http://localhost:3900/api/img", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress: progressEvent => {
                setUploadPercentage(parseInt(Math.round((progressEvent.loaded*100)/progressEvent.total)));
                setTimeout(() => setUploadPercentage(0), 5000);
            }               
        })
        .then(res => { toast.success('upload success') })
        .catch(err => { toast.error('upload fail') });

        const { filename, filepath } = res.data;
        setUploadedFile({ filename, filepath });
    }

    return ( 
        <Fragment>
            <div className="form-group">
              <ToastContainer />
            </div>
            <form onSubmit={onSubmit}>
                <div className="custom-file mb-4">
                    <input name="movieImg" type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                    <label className="custom-file-label" htmlFor="customFile" >
                        {filename}
                    </label>
                </div>
                <Progress percentage={uploadPercentage} />
                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4" />
            </form>
            { uploadedFile ? 
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <h3 className="text-center">{ uploadedFile.filename }</h3>
                        <img style={{width: "100%"}} src={uploadedFile.filepath} />
                    </div>
                </div> : null }
        </Fragment>
     );
}
 
export default FileUpload;
