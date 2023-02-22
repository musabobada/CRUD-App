import React, { Component } from "react";
import Input from "../include/_input";
import "./addv.css";
// import profile_img from "../show/download.png";

const ImgUpload =({
  onChange,
  src
})=>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img className="image"for="photo-upload" src={src}/>
    </div>
    <input id="photo-upload" type="file" onChange={onChange}/> 
  </label>

class AddVolunteer extends Component {
  state = {
    file: '',
    image:'https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png',
  }
  photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        image: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  render() {
    const { image } = this.state;
    const { onChange, temporary, subjects } = this.props;
    return (
      <>
        <div className="container mt-5 ">
          <h2>New Voulunteer</h2>
          <form className="" id="addVolunteer" method="POST" onSubmit={(e) => this.props.create(e, "addVolunteer", "volunteers")}>
            <div>
            {/* <ImgUpload onChange={this.photoUpload} src={image}/> */}
            </div>
              <Input onChange={onChange} type="text" name="name" label="Name" value={temporary.name} />
              <Input onChange={onChange} type="text" name="age" label="Age" value={temporary.age} />
              <Input onChange={onChange} type="email" name="email" label="Email" value={temporary.email} />
              <Input onChange={onChange} type="text" name="address" label="Address" value={temporary.address} />
              <Input onChange={onChange} type="text" name="phone" label="Phone" value={temporary.phone} />
              {subjects.length > 0 ? (
                <select name="subject" className=" sel ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  {this.props.subjects.map((subject) => (
                    <option key={Math.random()} value={subject.value}>
                      {subject.name}
                    </option>
                  ))}
                </select>
              ) : (
                <select disabled className=" ml-3 mt-3 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option>Subjects Database is Empty</option>
                </select>
              )}
              <div className="s col mt-2">
                <button className="btn btn-primary m-1" type="submit">
                  Submit
                </button>
              </div> 
          </form>
        </div>
      </>
    );
  }
}

export default AddVolunteer;

// const ImgUpload =({
//   onChange,
//   src
// })=>
//   <label htmlFor="photo-upload" className="custom-file-upload fas">
//     <div className="img-wrap img-upload" >
//       <img for="photo-upload" src={src}/>
//     </div>
//     <input id="photo-upload" type="file" onChange={onChange}/> 
//   </label>


// const Name =({
//   onChange,
//   value
// })=>
//   <div className="field">
//     <label htmlFor="name">
//       name:
//     </label>
//     <input 
//       id="name" 
//       type="text" 
//       onChange={onChange} 
//       maxlength="25" 
//       value={value} 
//       placeholder="Alexa" 
//       required/>
//   </div>

  
// const Status =({
//   onChange,
//   value
// })=>
//   <div className="field">
//     <label htmlFor="status">
//       status:
//     </label>
//     <input 
//       id="status" 
//       type="text" 
//       onChange={onChange} 
//       maxLength="35" 
//       value={value} 
//       placeholder="It's a nice day!" 
//       required/>
//   </div>


// const Profile =({
//   onSubmit,
//   src,
//   name,
//   status,
// })=>
//   <div className="card">
//     <form onSubmit={onSubmit}>
//       <h1>Profile Card</h1>
//       <label className="custom-file-upload fas">
//         <div className="img-wrap" >
//           <img for="photo-upload" src={src}/>
//         </div>
//       </label>
//       <div className="name">{name}</div>
//       <div className="status">{status}</div>
//       <button type="submit" className="edit">Edit Profile </button>
//     </form>
//   </div>
     
      
// const Edit =({
//   onSubmit,
//   children,
// })=>
//   <div className="card">
//     <form onSubmit={onSubmit}>
//       <h1>Profile Card</h1>
//         {children}
//       <button type="submit" className="save">Save </button>
//     </form>
//   </div>

// class CardProfile extends React.Component {
//   state = {
//     file: '',
//     imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
//     name:'',
//     status:'',
//     active: 'edit'
//   }

//   photoUpload = e =>{
//     e.preventDefault();
//     const reader = new FileReader();
//     const file = e.target.files[0];
//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result
//       });
//     }
//     reader.readAsDataURL(file);
//   }
//   editName = e =>{
//     const name = e.target.value;
//     this.setState({
//       name,
//     });
//   }
  
//   editStatus = e => {
//     const status = e.target.value;
//     this.setState({
//       status,
//     });
//   }
  
//   handleSubmit= e =>{
//     e.preventDefault();
//     let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
//     this.setState({
//       active: activeP,
//     })
//   }
  
//   render() {
//     const {imagePreviewUrl, 
//            name, 
//            status, 
//            active} = this.state;
//     return (
//       <div>
//         {(active === 'edit')?(
//           <Edit onSubmit={this.handleSubmit}>
//             <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
//             <Name onChange={this.editName} value={name}/>
//             <Status onChange={this.editStatus} value={status}/>
//           </Edit>
//         ):(
//           <Profile 
//             onSubmit={this.handleSubmit} 
//             src={imagePreviewUrl} 
//             name={name} 
//             status={status}/>)}
        
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <CardProfile/>,
//   document.getElementById('root')
// )