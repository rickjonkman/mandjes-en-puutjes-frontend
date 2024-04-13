

const ImageWrapper = ({ imgWrapperClass, imgSource, imgDescription, imgId, handleOnClick }) => {



    return (
        <figure className={imgWrapperClass}>
            <img
                src={imgSource}
                alt={imgDescription}
                id={imgId}
                onClick={handleOnClick}
            />
        </figure>
    );
};

export default ImageWrapper;