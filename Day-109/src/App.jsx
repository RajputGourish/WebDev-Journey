import { useForm } from "react-hook-form"
import "./App.css"

function App() {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(2);   // simulate netwrk delay
    let r = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    let res = await r.text();
    console.log("This console log is from app.jsx", data, res);
    // if(data.username != "shubham"){
    //   setError("myform", {message:"Your form is not in good order because credential are invalid"})
    // }
    // if(data.username === "ritik"){
    //   setError("ritik", {message:"You cannot login because u have been blocked from this app"});
    // }
  }

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", { required: { value: true, message: "This feild is required" }, minLength: { value: 4, message: "Min-length is 4" }, maxLength: { value: 8, message: "Max-length is 8" } })} placeholder="Username" type="text" />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          <input {...register("password", { required: { value: true, message: "Password is required..." }, minLength: { value: 6, message: "Your password is shorter" } })} placeholder="Password" type="password" />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.ritik && <div className="red">{errors.ritik.message}</div>}

        </form>
      </div>
    </>
  )
}

export default App
