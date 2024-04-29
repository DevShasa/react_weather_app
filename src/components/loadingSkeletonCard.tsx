import React from 'react'

type Props = {}

const LoadingSkeletonCard = (props: Props) => {
  return (
    <div className='card card-lg skeletonContainer'>
        <div className='skeleton skeleton-div animate-pulse'></div>
        <div className='skeleton skeleton-div animate-pulse'></div>
        <div className='skeleton skeleton-div animate-pulse'></div>
        <div className='skeleton skeleton-div animate-pulse'></div>
        <div className='skeleton skeleton-div animate-pulse'></div>
    </div>
  )
}

export default LoadingSkeletonCard