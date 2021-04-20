import React from 'react';

export default function Loading() {
  return (
    <div className='container'>
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-dark mt-5" style={{ width: "3rem", height: "3rem" }} role="status">
        </div>
      </div>
    </div>
  )
}
