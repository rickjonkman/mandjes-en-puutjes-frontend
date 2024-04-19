import {addHashtag} from "../../../helpers/addHashtag.js";


const BlockTitle = ({blockTitle, blockSubject}) => {
    return (
        <header className="block-item__title">
            <div className="block-item__subject-section">
                <span>{addHashtag(blockSubject)}</span>
            </div>
            <h2>{blockTitle}</h2>
        </header>
    );
};

export default BlockTitle;