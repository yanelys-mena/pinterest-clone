import { FileUploader } from 'react-drag-drop-files';
import './UploadImage.css'


export default function UploadImage({ image, setImage }) {
    const fileTypes = ['JPG', 'PNG', ' JPEG', 'jpg', 'jpeg', 'png', 'gif', 'GIF'];

    const setFile = (file) => {
        setImage(file);
    };

    return (
        <>
            <div id='drop_area'>
                <FileUploader
                    // id='file_upload'
                    handleChange={(file) => setFile(file)}
                    name='image'
                    types={fileTypes}
                >
                    <div id="drap_bg">
                        <img
                            id="img-preview"
                            src={image
                                ? URL.createObjectURL(image)
                                : 'https://user-images.githubusercontent.com/88916829/159184219-82f97398-9fe1-4fb3-8eae-83ec2d53d6dd.png'}
                            alt='preview-upload'
                        />
                    </div>
                </FileUploader>
            </ div>
        </>
    )
}