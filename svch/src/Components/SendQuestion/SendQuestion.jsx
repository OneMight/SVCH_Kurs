import './SendQuestion.css'

export default function SendQuestion(){
    return(
        <main className='main-question'>
            <p className='title-question'>
                Ask the administrators a question
            </p>
            <form className='ask-div'>
                <textarea className='question-field'  placeholder='Type your problem...'/>
                <input type="submit" className='button-user'/>
            </form>
        </main>
    )
}