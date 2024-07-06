import React, { Component, useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LocationCard from './LocationCard';
import { useForm } from "react-hook-form";

// class ShowBookList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: []
//     };
//   }

//   componentDidMount() {
    // axios
    //   .get('http://localhost:8082/api/books')
    //   .then(res => {
    //     this.setState({
    //       books: res.data
    //     })
    //   })
    //   .catch(err => {
    //     console.log('Error from ShowBookList');
    //   })
//   };


//   render() {
//     const books = this.state.books;
//     console.log("PrintBook: " + books);
//     let bookList;

//     if (!books) {
//       bookList = "there is no book record!";
//     } else {
//       bookList = books.map((book, k) =>
//         <BookCard book={book} key={k} />
//       );
//     }

//     return (
      // <div className="ShowBookList">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-12">
      //         <br />
      //         <h2 className="display-4 text-center">Customers' Details</h2>
      //       </div>

      //       <div className="col-md-11">
      //         <Link to="/create-book" className="btn btn-outline-warning float-right">
      //           + Add New Book
      //         </Link>
      //         <br />
      //         <br />
      //         <hr />
      //       </div>

      //     </div>

      //     <div className="list">
      //       {bookList}
      //     </div>
      //   </div>
      // </div>
//     );
//   }
// }


const SearchDetailList = () => {
  const  [location, setLocation] = useState([]);


  // useEffect(() => { 

  //   axios
  //   .get(`http://localhost:8082/api/locations?keyword=${keyword}`)
  //   .then(res => {
  //     // this.setState({
  //     //   location: res.data
  //     // })
  //     setLocation(res.data)
  //   })
  //   .catch(err => {
  //     console.log('Error from SearchDetailList');
  //   })
  //   // setLocation([{_id: 'asdasdad', name: 'Rumah Ihsan', address: 'No 75, Lorong Beringin 3', description: 'Rumah oren'}])
  // }, [])


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios
      .get(`http://localhost:8082/api/location?keyword=${data.keyword}`)
      .then(res => {
        console.log(res, 'rit')
        setLocation(res.data)
      })
      .catch(err => {
        console.log(err)
        console.log("Error in CreateBook!");
      })
    console.log(data);
  }; // your form submit function which will invoke after successful validation
   

  useEffect(() => {
    console.log(location, 'toh')
  }, [location])


  return (
    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Customers' Details</h2>
          </div>
          <div className="row">
            <form className='col-md-9' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-full' name="keyword" type='text' {...register('keyword')} />
            </form>
            <div className="col-md-3">
              <Link to="/create-location" className="btn btn-outline-warning float-right">
                + Add New Location
              </Link>
              <br />
              <br />
            </div>
          </div>
          
          <hr />

        </div>
        
        <div className="list">
          { location.length > 0 ? 
          (
            location.map((location) => {
              return (
                <LocationCard location={location} key={location._id}></LocationCard>
                )
            })
        ) : 
          (<div>No location</div>) }
        </div>
      </div>
    </div>
  )
}


export default SearchDetailList;