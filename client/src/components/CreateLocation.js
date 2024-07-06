import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import { useHistory } from 'react-router-dom';


// class CreateBook extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: '',
//       isbn: '',
//       author: '',
//       description: '',
//       published_date: '',
//       publisher: ''
//     };
//   }

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     const data = {
//       title: this.state.title,
//       isbn: this.state.isbn,
//       author: this.state.author,
//       description: this.state.description,
//       published_date: this.state.published_date,
//       publisher: this.state.publisher
//     };

//     axios
//       .post('http://localhost:8082/api/books', data)
//       .then(res => {
//         this.setState({
//           title: '',
//           isbn: '',
//           author: '',
//           description: '',
//           published_date: '',
//           publisher: ''
//         })
//         this.props.history.push('/');
//       })
//       .catch(err => {
//         console.log("Error in CreateBook!");
//       })
//   };

//   render() {
//     return (
//       <div className="CreateBook">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8 m-auto">
//               <br />
//               <Link to="/" className="btn btn-outline-warning float-left">
//                 Show BooK List
//               </Link>
//             </div>
//             <div className="col-md-8 m-auto">
//               <h1 className="display-4 text-center">Add Book</h1>
//               <p className="lead text-center">
//                 Create new book
//               </p>

//               <form noValidate onSubmit={this.onSubmit}>
//                 <div className='form-group'>
//                   <input
//                     type='text'
//                     placeholder='Title of the Book'
//                     name='title'
//                     className='form-control'
//                     value={this.state.title}
//                     onChange={this.onChange}
//                   />
//                 </div>
//                 <br />

//                 <div className='form-group'>
//                   <input
//                     type='text'
//                     placeholder='ISBN'
//                     name='isbn'
//                     className='form-control'
//                     value={this.state.isbn}
//                     onChange={this.onChange}
//                   />
//                 </div>

//                 <div className='form-group'>
//                   <input
//                     type='text'
//                     placeholder='Author'
//                     name='author'
//                     className='form-control'
//                     value={this.state.author}
//                     onChange={this.onChange}
//                   />
//                 </div>

//                 <div className='form-group'>
//                   <input
//                     type='text'
//                     placeholder='Describe this book'
//                     name='description'
//                     className='form-control'
//                     value={this.state.description}
//                     onChange={this.onChange}
//                   />
//                 </div>

//                 <div className='form-group'>
//                   <input
//                     type='date'
//                     placeholder='published_date'
//                     name='published_date'
//                     className='form-control'
//                     value={this.state.published_date}
//                     onChange={this.onChange}
//                   />
//                 </div>
//                 <div className='form-group'>
//                   <input
//                     type='text'
//                     placeholder='Publisher of this Book'
//                     name='publisher'
//                     className='form-control'
//                     value={this.state.publisher}
//                     onChange={this.onChange}
//                   />
//                 </div>

//                 <input
//                   type="submit"
//                   className="btn btn-outline-warning btn-block mt-4"
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const CreateLocation = () => {
  const history = useHistory();
  const { register, handleSubmit, watch, control ,formState: { isSubmitting ,  errors } } = useForm();
  const onSubmit = (data) => {
    // const formData = new FormData();
    // formData.append('image', data.image[0]);
    console.log(data,'kimk')
    axios
      .post('http://localhost:8082/api/location', data, { headers:{
        'Content-Type': 'multipart/form-data'
       }})
      .then(res => {
        history.push('/');
      })
      .catch(err => {
        console.log(err)
        console.log("Error in CreateBook!");
      })
  }; 
  return (
            <div className="CreateBook">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <br />
                    <Link to="/" className="btn btn-outline-warning float-left">
                      Show Location List
                    </Link>
                  </div>
                  <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Add Location</h1>
                    <p className="lead text-center">
                      Create new location
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='form-group'>
                        <label htmlFor="name">Name *</label>
                        <input
                          type='text'
                          placeholder='Name of the Location'
                          name='name'
                          className='form-control'
                          {...register('name', {required: true})}
                        />
                      </div>
                      <br />
                      <div className='form-group'>
                      <label htmlFor="phone_number">Phone Number *</label>
                        <input
                          type='text'
                          placeholder='phone number'
                          name='phone_number'
                          className='form-control'
                          {...register('phone_number', {required: true})}
                        />
                      </div>
                      <div className='form-group'>
                      <label htmlFor="address">Address *</label>
                        <input
                          type='text'
                          placeholder='address'
                          name='address'
                          className='form-control'
                          {...register('address', {required: true})}
                        />
                      </div>
                      <div className='form-group'>
                      <label htmlFor="description">Description</label>
                        <input
                          type='text'
                          placeholder='Description'
                          name='description'
                          className='form-control'
                          {...register('description', {required: false})}
                        />
                      </div>
                      <div className='form-group'>
                      <label htmlFor="location_url">Location Url *</label>
                        <input
                          type='text'
                          placeholder='Location Url'
                          name='location_url'
                          className='form-control'
                          {...register('location_url', {required: true})}
                        />
                      </div>
                      <div className='form-group'>
                      <label htmlFor="image">Image *</label>
                      <Controller
                        control={control}
                        name={"image"}
                        rules={{ required: "Recipe picture is required" }}
                        render={({ field: { value, onChange, ...field } }) => {
                          return (
                            <input
                              {...field}
                              value={value?.fileName}
                              onChange={(event) => {
                                onChange(event.target.files[0]);
                              }}
                              type="file"
                              id="image"
                            />
                          );
                        }}
                      />
                      </div>
                    
                      <input
                        type="submit"
                        disabled={isSubmitting}
                        // THis to avoid multiple submit
                        className="btn btn-outline-warning btn-block mt-4"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>

  )
}
export default CreateLocation;