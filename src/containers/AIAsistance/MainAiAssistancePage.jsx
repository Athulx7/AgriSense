import React from 'react'
import ChatSection from '../../Components/aiAsistance/ChatSection'

function MainAiAssistancePage() {
    return (
        <div className='bg-primary dark:bg-gray-800 dark:text-white pb-2'>
            <div className='pt-10 px-8'>
                <div className='text-3xl font-bold'>
                    Agrisense AI
                </div>
                <div className='py-3 text-gray-700 dark:text-gray-300'>Get smart farming advice and personalized recommendations</div>
            </div>
            <ChatSection />
        </div>
    )
}

export default MainAiAssistancePage
