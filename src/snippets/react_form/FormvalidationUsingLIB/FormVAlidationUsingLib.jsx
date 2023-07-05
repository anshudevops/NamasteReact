import React,{useState}  from "react";
import {useForm} from "react-hook-form";

function FormVAlidationUsingLib() {

const {register, handleSubmit, formState: { errors } } = useForm();
const [userInfo, setUserInfo] = useState([{username:"", password:"",email:""}]);
const onSubmit = (data) => {
    setUserInfo(data)
    // console.log(userInfo);
}
console.log("errors", errors);


  return (<>
    <div className="container">
    <pre>{JSON.stringify(userInfo, undefined,2)}</pre>

      <form onSubmit={handleSubmit(onSubmit)}> 
        <h1> Login form </h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register("username", {required: "username is required", pattern: {value: "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}", message: "not a valid email"}} )}
            
            />
          </div>
          <p>{errors?.username?.message}</p>
        </div>
        <div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {required: "email is required"
            
            })} 

              
            />
          </div>
          <p>{errors?.email?.message}</p>

        </div>

        <div>
          <div className="field">
            <label>PAssword</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {required: "password is required",
               minLength:{value:4, message:"password must be more than 4 characters"},
              maxLength : {value:10, message: "password must be less than 10 characters"}})} 

             
            />
          </div>
          <p>{errors?.password?.message}</p>

        </div>

        <button className="fluid ui button blue"> Submit</button>
      </form>
    </div>
    </>
  );
}

export default FormVAlidationUsingLib;
