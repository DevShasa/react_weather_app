
type Props = {}

const MainSkeletonCard = (props: Props) => {
  return (
   <section>
    <div className='card card-lg'>
    <div className='skeleton skeleton-div animate-pulse'></div>
        <div className='skeleton skeleton-div large animate-pulse'></div>
        <div className='skeleton skeleton-div large animate-pulse'></div>
        <div className='skeleton skeleton-div large animate-pulse'></div>
        <div className='skeleton skeleton-div large animate-pulse'></div>
    </div>
   </section>
  )
}

export default MainSkeletonCard