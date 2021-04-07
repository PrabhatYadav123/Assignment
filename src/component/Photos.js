import React from 'react'

function Photos(props) {
    const { photos } = props;
    return (

        <div className="row">
            {
                photos.map(photo => (
                    <div className="col-md-3">
                        <div className="card my-2 py-2 text-center">
                            <img src={photo.urls.small} alt="" className="img-fluid w-50 mx-auto rounded-circle" />
                            <div className="card-body">
                                <h5>Name -  {photo.user.first_name}</h5>
                                <h5>alt_description-  {photo.alt_description}</h5>
                                <h5>Likes -  {photo.likes}</h5>
                                <h5>Created At -  {photo.created_at}</h5>
                                <h5>Updated At -  {photo.updated_at}</h5>
                                <button className="w-100 btn"> <a href={photo.links.download}>Download</a> </button>
                               
                            </div>
                            
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Photos
