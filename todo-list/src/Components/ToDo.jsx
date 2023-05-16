import React from 'react';

const ToDo = (props) => {
    const { list, setList, item } = props

    const handleMarkComplete = (item) => {
        const newTodos = list.map((todo1) => {
        if (todo1 === item) {
        todo1.done = !todo1.done
        }
        return todo1;
    });
    setList(newTodos);
};
    return (
        <div className='row'>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"/>
            {
                list.map((item, idx) => (
                    <div key = {idx}>
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    {
                                        item.done?
                                        <h5 className='underLine'>{item.title}</h5>:
                                        <h5>{item.title}</h5>
                                    }
                                    {item.done}
                                    <h6>{item.dueDate}</h6>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onClick={() =>handleMarkComplete(item)} />
                                            <label className="form-check-label" >Completed</label>
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
