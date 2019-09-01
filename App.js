  import React,{Component} from 'react';
  //import logo from './logo.svg';
  import './App.css';
  import axios from 'axios';
  //import './photos/Photos';
  class App extends Component{
   
    state={
      photos:[],
      isLoading: true,
      errors: null
    };
  componentDidMount(){
    this.fetchPhotos();
  }
 
 fetchPhotos(){
   fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response=>response.json())
        .then(data=>
          this.setState({
            photos: data,
            isLoading: false,
          })
        )
        .catch(errors=>this.setState({errors,isLoading:false}));
 }
    render(){
    const {isLoading,photos,errors}=this.state;
      return(
        <React.Fragment>
             {errors ? <p>{errors.message}</p> : null}
             {!isLoading ? (
        photos.map(photos => {
          const { username, title, url } = photos;
          return (
            <div key={username}>
              <p>Title: {title}</p>
              Photo:<img src={url}></img>
              <hr />
            </div>
          );
        })
             ):(
               <h1>loading..</h1>
             )}
        </React.Fragment>
      )
    
      
    }
  }

  export default App;
