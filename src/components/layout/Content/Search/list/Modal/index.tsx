import Modal                from 'react-modal';
import useAuthContext from '../../../../../../hook/useAuthContext';
import useBookContext from '../../../../../../hook/useBookContext';
import useBookFirebaseContext from '../../../../../../hook/useBooksFirebaseContext';
import useModalContext from '../../../../../../hook/useModalContext';
import usePostsContext from '../../../../../../hook/usePostsContext';
import { ButtonContainer, CheckBoxContainer, ModalContainer } from './styles';
import moment from "moment";
import { useState } from 'react';
import { MdCheckBox } from 'react-icons/md';

export default function ModalComponent() {

    const {isPostBookModalOpen, handleClosePostBookModal} = useModalContext()
    const {user} =useAuthContext()
    const {createBook} = useBookFirebaseContext()
    const {createBookPost} = usePostsContext()
    const {book} = useBookContext()

    const [text, setText] = useState('')
    const [read, setRead] = useState(Boolean)


    return (
        <Modal 
            isOpen={isPostBookModalOpen}  
            onRequestClose={handleClosePostBookModal}
            overlayClassName="react-modal-auth-overlay"
            className="react-modal-auth-content"
            ariaHideApp={false}
        >
            <ModalContainer>
                <img src={book?.volumeInfo.imageLinks?.thumbnail} alt="" />
                <div>
                    <h3>{book?.volumeInfo.title}</h3>
                    <CheckBoxContainer>
                    <label>Wicth list ?</label>
                    <select id="lists" name="lists">
                        <option value="read">Read List</option>
                        <option value="reading">Currently Reading List</option>
                        <option value="wantRead">WantRead</option>
                    </select>
                    </CheckBoxContainer>
                    <p>What do you think about?</p>
                    <textarea placeholder={"Enter your review..."} value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <ButtonContainer>
                        <button 
                            onClick={(e) => {
                                e.preventDefault(); 
                                createBook(book)
                                createBookPost({
                                    text: text, 
                                    uid:user.uid,
                                    photoUrl:user.avatar,
                                    username: user.username,
                                    postedAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
                                    bookId:     book?.id, 
                                    bookTitle: book?.volumeInfo.title || "",
                                    bookSearchInfo: book?.volumeInfo.description.slice(0,200) || "",
                                    bookphotoUrl: book?.volumeInfo?.imageLinks?.smallThumbnail|| "",
                                    bookAuthor: book?.volumeInfo?.authors[0] || "",
                                    bookpageCount: book?.volumeInfo?.pageCount
                                })
                                handleClosePostBookModal()
                            }
                        }
                        >
                            Post
                        </button>
                    </ButtonContainer>
                </div>
            </ModalContainer>
        </Modal>
    )
    
    
}
