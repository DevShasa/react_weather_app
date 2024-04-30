
type Props = {}

const ErrorCard = (props: Props) => {
  return (
    <div className='card card-lg '>
        <div className='error-card'>
            <p>Something went wrong fetching the results, kindly try reloading the page</p>
        </div>

    </div>
  )
}

export default ErrorCard