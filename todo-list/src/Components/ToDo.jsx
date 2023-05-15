import React from 'react';

const ToDo = (props) => {
    const { list } = props
    return (
        <div className='row'>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"/>
            {
                list.map((item, idx) => (
                    <div key = {idx}>
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.Title}</h5>
                                    <h6>{item.dueDate}</h6>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                            <label className="form-check-label" for="flexSwitchCheckDefault">Completed</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ToDo;
