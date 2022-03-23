import { FileUploader } from 'react-drag-drop-files';
import './UploadImage.css'


export default function UploadImage({ image, setImage, setFileError, fileError }) {
    const fileTypes = ['JPG', 'PNG', ' JPEG', 'jpg', 'jpeg', 'png', 'gif', 'GIF'];

    const setFile = (file) => {
        setImage(file);
    };

    return (
        <>
            <div id="file_error">{fileError && fileError}</div>
            <div id='drop_area'>
                <FileUploader
                    onTypeError={(err) => setFileError('File type invalid. Recommended: .jpg .png .gif')}
                    handleChange={(file) => setFile(file)}
                    name='image'
                    types={fileTypes}
                >
                    <div id="drap_bg">
                        <img
                            id="img-preview"
                            src={image
                                ? URL.createObjectURL(image)
                                : 'https://user-images.githubusercontent.com/88916829/159394080-4d2ad2ed-9370-4268-8699-a18fb30c86a4.png'}
                            alt='preview-upload'
                        />
                    </div>
                </FileUploader>
            </ div>
        </>
    )
}