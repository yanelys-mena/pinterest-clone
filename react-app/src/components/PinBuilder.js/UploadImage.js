import { FileUploader } from 'react-drag-drop-files';
import './UploadImage.css'


export default function UploadImage({ image, setImage }) {
    const fileTypes = ['JPG', 'PNG', 'HEIC', ' JPEG', 'jpg', 'jpeg', 'png'];

    const setFile = (file) => {
        setImage(file);
    };

    return (
        <>
            <div id='drop_area'>
                <FileUploader
                    // style={{ height: '400px' }}
                    id='file_upload'
                    handleChange={(file) => setFile(file)}
                    name='image'
                    types={fileTypes}
                >
                    <div id="drap_bg">
                        <img
                            id="img-preview"
                            src={image
                                ? URL.createObjectURL(image)
                                : 'https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png'}
                            alt='preview-upload'
                        />
                    </div>
                </FileUploader>
            </ div>
        </>
    )
}