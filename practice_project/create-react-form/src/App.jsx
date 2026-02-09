import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()


  const delay = async (e) => {
    return new Promise((res, rej) => {
      return setTimeout(() => {
        res();
      }, e * 1000);
    })
  }


  const onSubmit = async (data) => {
    // await delay(2);
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json()
    if(res.success){
      toast.success(`${res.message}`);
      reset()
    }
  }

  return (
    <>
      <div className="container shadow-[0_0_15px_rgba(0,0,0,0.3)] w-1/2 mx-auto my-5 rounded-xl px-5 pb-19">
        <h1 className='font-bold text-3xl py-5 text-center text-green-600'>Form in React</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex gap-8'>
            <div className='flex gap-1 flex-col w-1/2'>
              <label className='font-bold text-gray-700' htmlFor="firstname">First Name*</label>

              <input {...register("firstname", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Minimum length is 3" }, maxLength: { value: 20, message: "Maximum length is 20" } })} className='outline focus:outline-2 outline-green-600 rounded-sm py-1 px-2' id="firstname" type="text" placeholder='Enter First Name' />
              {errors.firstname && <div className="text-sm text-red-500">{errors.firstname.message}</div>}

            </div>
            <div className='flex gap-1 flex-col w-1/2'>
              <label className='font-bold text-gray-700' htmlFor="lname">Last Name*</label>

              <input {...register("lname", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Minimum length is 3" }, maxLength: { value: 20, message: "Maximum length is 20" } })} className='outline focus:outline-2 outline-green-600 rounded-sm py-1 px-2' type="text" placeholder='Enter Last Name' id='lname' />
              {errors.lname && <div className="text-sm text-red-500">{errors.lname.message}</div>}

            </div>
          </div>
          <div className='flex gap-1 flex-col mt-1'>

            <label className='font-bold text-gray-700' htmlFor="email">Email*</label>
            <input {...register("email", { required: { value: true, message: "This field is required" } })} className='outline focus:outline-2 outline-green-600 rounded-sm py-1 px-2' type="text" placeholder='Enter email' id='email' />
            {errors.email && <div className="text-sm text-red-500">{errors.email.message}</div>}

            <label className='font-bold text-gray-700' htmlFor="contact">Contact*</label>
            <input {...register("contact", { required: { value: true, message: "This field is required" } })} className='outline focus:outline-2 outline-green-600 rounded-sm py-1 px-2' type="text" placeholder='Enter mobile number' id='contact' />
            {errors.contact && <div className="text-sm text-red-500">{errors.contact.message}</div>}

            <p className='font-bold text-gray-700'>Gender*</p>
            <div className='flex gap-3 justify-center'>
              <label htmlFor="male">
                <input {...register("radio", { required: { value: true, message: "This field is required" } })} className='mx-2' type="radio" id="male" value="male" />
                Male
              </label>
              <label htmlFor="female">
                <input {...register("radio", { required: { value: true, message: "This field is required" } })} className='mx-2' type="radio" id="female" value="female" />
                Female
              </label>
              <label htmlFor="other">
                <input {...register("radio", { required: { value: true, message: "This field is required" } })} className='mx-2' type="radio" id="other" value="other" />
                Other
              </label>
            </div>
            {errors.radio && <div className="text-sm text-red-500">{errors.radio.message}</div>}

            <p className='font-bold text-gray-700'>Your best subject*</p>
            <div className='flex gap-3 justify-center'>
              <label htmlFor="english">
                <input {...register("checkbox", { required: { value: true, message: "This field is required" } })} className='mx-2' type="checkbox" id="english" value="english" />
                English
              </label>
              <label htmlFor="hindi">
                <input {...register("checkbox", { required: { value: true, message: "This field is required" } })} className='mx-2' type="checkbox" id="hindi" value="hindi" />
                Hindi
              </label>
              <label htmlFor="math">
                <input {...register("checkbox", { required: { value: true, message: "This field is required" } })} className='mx-2' type="checkbox" id="math" value="math" />
                Math
              </label>
            </div>
            {errors.checkbox && <div className="text-sm text-red-500">{errors.checkbox.message}</div>}

            <label className='font-bold text-gray-700' htmlFor="url">Enter URL</label>
            <input {...register("url")} className='outline focus:outline-2 outline-green-600 rounded-sm py-1 px-2' type="text" placeholder='Enter url' id='url' />

            <p className='font-bold text-gray-700 mt-1'>Select your choice</p>
            <select {...register("choice")} className='outline focus:outline-2 outline-green-600 rounded-sm py-1 px-2 bg-gray-300'>
              <option className='text-gray-800' value="">Select your ans</option>
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cat">Cat</option>
            </select>
          </div>

          <p className='font-bold text-gray-700 my-2'>About</p>
          <textarea {...register("about")} className='outline focus:outline-2 outline-green-600 rounded-sm py-1 px-2 w-full h-30' name="" id="" placeholder='About your self'></textarea>

          <p className='font-bold text-gray-700 my-2'>Submit or Reset</p>
          <div className='flex justify-center gap-6'>
            <button type="reset" className='w-1/3 py-3 bg-green-600 cursor-pointer hover:bg-green-700 text-white rounded-lg font-bold'>Reset</button>
            <button disabled={isSubmitting} type="submit" className='disabled:bg-green-400 w-1/3 py-3 bg-green-600 cursor-pointer hover:bg-green-700 text-white rounded-lg font-bold'>{isSubmitting ? "Loading" : "Submit"}</button>
          </div>
           <ToastContainer />
        </form>
      </div>
    </>
  )
}

export default App
