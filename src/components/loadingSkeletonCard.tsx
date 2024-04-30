import React from 'react'

type Props = {}

const LoadingSkeletonCard = (props: Props) => {
  return (
    <div className='card card-lg skeletonContainer' data-testid="loading-skeleton-card">
        <div className='skeleton skeleton-div animate-pulse'></div>
        <div className='skeleton skeleton-div animate-pulse'></div>
        <div className='skeleton skeleton-div animate-pulse'></div>
        <div className='skeleton skeleton-div animate-pulse'></div>
        <div className='skeleton skeleton-div animate-pulse'></div>
    </div>
  )
}

export default LoadingSkeletonCard