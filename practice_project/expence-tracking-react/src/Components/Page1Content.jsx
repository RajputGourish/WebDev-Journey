import Addtransection from './Addtransection'
import Balance from './Balance'
import Heading from './Heading'
import History from './History'

const Page1Content = () => {
    return (
        <div className='max-w-80 mx-auto pb-20'>
            <Heading />
            <Balance />
            <Addtransection />
            <History />
        </div>
    )
}

export default Page1Content
