import Modal                from 'react-modal';
import useAuthContext from '../../../../../../hook/useAuthContext';
import useBookContext from '../../../../../../hook/useBookContext';
import useBookFirebaseContext from '../../../../../../hook/useBooksFirebaseContext';
import useModalContext from '../../../../../../hook/useModalContext';
import usePostsContext from '../../../../../../hook/usePostsContext';
import { ModalContainer } from './styles';
import moment from "moment";
import { useState } from 'react';

export default function ModalComponent() {

    const {isPostBookModalOpen, handleClosePostBookModal} = useModalContext()
    const {user} =useAuthContext()
    const {createBook} = useBookFirebaseContext()
    const {createBookPost} = usePostsContext()
    const {book} = useBookContext()

    const [text, setText] = useState('')

    return (
        <Modal 
            isOpen={isPostBookModalOpen}  
            onRequestClose={handleClosePostBookModal}
            overlayClassName="react-modal-auth-overlay"
            className="react-modal-auth-content"
            ariaHideApp={false}
        >
            <ModalContainer>
                <img src={book?.volumeInfo.imageLinks.thumbnail} alt="" />
                <div>
                    <h3>{book?.volumeInfo.title}</h3>
                    <p>What do you think about?</p>
                    <textarea placeholder={"Enter your review..."} value={text} onChange={(e) => setText(e.target.value)}></textarea>
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
                                    bookTitle: book?.volumeInfo.title || "",
                                    bookSearchInfo: book?.searchInfo?.textSnippet || "",
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
                </div>
            </ModalContainer>
        </Modal>
    )
    
    
}
