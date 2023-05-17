import React from 'react';

const Form = (props) => {

    const {list , setList ,item , setItem} = props

    const changeHandler= (e) => {
        console.log(e)
        setItem({...item, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
      
        if (new Date(item.dueDate) < new Date()) {
          // Date is in the past, display an error or handle it accordingly
          // For example:
          alert('Due date cannot be in the past');
          return;
        }
      
        setList([...list, item]);
        setItem({ Title: '', dueDate: '' });
      };

    const checkDate = () => {
        const currentDate = new Date();
        if (new Date(item.dueDate) < currentDate) {
            return <p>Date Cant be in the past</p>;
        }
        return null;
    };




    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"/>
        <form onSubmit={submitHandler}>
                <div className="mb-3">
                <label className= "form-label">Add an Item:</label>
                {
                    item.Title.length < 3?
                    <p>Please provide a Todo</p>:
                    null
                }
                <input type = "text" onChange={changeHandler}  name = "Title" value = {item.Title } className='form-control'></input>
                </div>
                <div className="mb-3">
                <label className ="form-label">
                    When does this need to be done?
                </label>
                {
                    checkDate()
                }
                {console.log(new Date(item.dueDate))}
                {console.log(new Date())}
                <input type ="date" onChange={changeHandler} name = "dueDate" value ={item.dueDate} className='form-control'></input>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
        </div>
    );
}

export default Form;
