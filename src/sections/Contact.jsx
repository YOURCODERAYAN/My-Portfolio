import React from 'react'
import {useState} from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert'

const Contact = () => {
    const [isLoading , setisLoading] = useState(false)
    const[showAlert , setShowAlert] = useState(false)
    const[alertType , setAlertType] = useState("success")
    const[alertMessage , setAlertMessage] = useState("");

        const [formData , setformData] = useState({

            name:"",
            email:"",
            message:""

        })

    const handleChange = (e)=>{

            setformData({...formData , [e.target.name] : e.target.value})
    }

    const showAlertMessage = (type , message) =>{
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);

        setTimeout(()=>{
            setShowAlert(false)
        } , 5000)
    }

    const handleSubmit = async (e)=>{

        setisLoading(true)
            e.preventDefault();
        
        try {

        await emailjs.send("service_z819m61" , "template_4hy74lr" , {
            
        // it will take template prameter obj 

        from_name: formData.name,
        to_name  : " Ayan",
        from_email : formData.email,
        to_email: "ayanwork2003@gmail.com",
        message: formData.message
        }, "DWRn6uHoYa8mn4WJ_")
        setisLoading(false)
        setformData({name:"" , email:"" , message:""})
        showAlertMessage("success" , "Your message has been sent")
            
        } catch (error) {

            setisLoading(false)
        console.log(error)
            showAlertMessage("danger" , "Something went wrong!")
        }

    }

    // Service  Code
  // service_z819m61
  // TEMPLATE CODE 
  //template_4hy74lr
  // API key 
  // DWRn6uHoYa8mn4WJ_





  return (
        <section className='relative flex items-center  c-space section-spacing'>
         
         {showAlert && <Alert type={alertType} text={alertMessage} />}
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-center w-full gap-5 mb-10">
                        <h2 className="text-heading">Let's Talk</h2>
                        <p className="font-normal text-neutral-400">
                            Weather you're looking to build a new website , improve your existing

                            platfrom , or bring  a unique project to life , I'm here to help.. 
                        </p>
                </div>

                <form className="w-full" onSubmit={handleSubmit} >
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">Full Name</label>
                            <input type="name" 
                            id="name"
                            name="name"
                            className="field-input field-input-focous"
                            placeholder="Ayan Saha"
                            autoComplete='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            
                            />
                        </div>
                        <div className="mb-5">
                        <label htmlFor="email" className="field-label">Email Id</label>
                            <input type="email" 
                            id="email"
                            name="email"
                            className="field-input field-input-focous"
                            placeholder="ayanwork2003@gmail.com"
                            autoComplete='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            
                            />
                        </div>

                        <div className="mb-5">
                        <label htmlFor="message" className="field-label">Message</label>
                            <textarea 
                            id="message"
                            name="message"
                            rows="4"
                            className="field-input field-input-focous"
                            placeholder="Type here .."
                            autoComplete='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            
                            />
                        </div>
                        
                    
                    <button className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
                           {!isLoading ? "send" : "sending"}
                    </button>
                    
                </form>
            </div>
        </section>
  )
}

export default Contact