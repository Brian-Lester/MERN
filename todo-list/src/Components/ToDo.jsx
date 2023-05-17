import React from 'react';

const ToDo = (props) => {
    const { list, setList} = props

    const handleMarkComplete = (item) => {
        const newTodos = list.map((todo1) => {
        if (todo1 === item) {
        todo1.done = !todo1.done
        }
        return todo1;
    });
    setList(newTodos);
};


const handleDelete = (item) => {
    const newTodos = list.filter((todo) => todo !== item)
    console.log(item)
    setList(newTodos)
    console.log(newTodos)
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
                    <p className='underLine'>{item.Title}</p>:
                    <p>{item.Title}</p>
                }
                                    {item.done}
                                    <h6>{item.dueDate}</h6>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" onClick={() =>handleMarkComplete(item)} />
                                        {
                    item.done?
                    <label className="form-check-label" >Good Job!</label>:
                    <label className="form-check-label" >Mark as completed</label>
                }
                <button className='btn btn-outline-dark' onClick={() => handleDelete(item)}>Delete</button>
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
