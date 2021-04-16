import React from 'react';

export default function AddLecturer() {
  return (
    <div className='container'>
      <p className='h2 mt-3 mb-3 text-center'>Add Lecturer</p>
      <form>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Name</label>
          <input type="text" className="form-control" id="add" />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Profile</label>
          <textarea type="text" className="form-control" id="add" />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Game</label>
          <input type="text" className="form-control" id="add" />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Role</label>
          <input type="text" className="form-control" id="add" />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Team</label>
          <input type="text" className="form-control" id="add" />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Language</label>
          <input type="text" className="form-control" id="add" />
        </div>
        <div className="mb-3">
          <label for="add" className="form-label ml-2">Image</label>
          <input type="text" className="form-control" id="add" />
        </div>
        <div className="card">
          <div className="card-header">
            <label for="add" className="form-label">Add Videos</label>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label for="add" className="form-label ml-2">Title</label>
              <input type="text" className="form-control" id="add" />
            </div>
            <div className="mb-3">
              <label for="add" className="form-label ml-2">Url</label>
              <input type="text" className="form-control" id="add" />
            </div>
            <div className="mb-3">
              <label for="add" className="form-label ml-2">Thumbnail</label>
              <input type="text" className="form-control" id="add" />
            </div>
            <div className="mb-3">
              <label for="add" className="form-label ml-2 mt-0">Status</label>
              <select className="form-select form-control" aria-label="Default select example">
                <option selected>--- Select One ---</option>
                <option value="true">Free</option>
                <option value="false">UnFree</option>
              </select>
            </div>
          </div>
          <a href="#" className='btn badge-success mb-3 ml-5 mr-5'>Add More Video</a>
        </div>
        <button type="submit" className="btn btn-primary form-control mb-2 mt-3">Submit</button>
        <button type="submit" className="btn btn-danger form-control mb-5">Cancel</button>
      </form>
    </div>
  )
}
