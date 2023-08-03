import { createSignal, Component } from "solid-js";

const Contact: Component = () => {
    const [loading, setLoading] = createSignal(false);
    const [isFormSubmit,setIsFormSubmit]=createSignal(false);
    const [formData, setFormData] = createSignal({
        name: '',
        surname: '',
        email: '',
        cellphone: '',
        subject: '',
        message: ''
    })
    const [formDataError, setFormDataError] = createSignal({
        name: '',
        surname: '',
        email: '',
        cellphone: '',
        subject: '',
        message: ''
    })

    const handleFormdataChange = (e: any ) => {
        const {name,value} = e.currentTarget;
        setFormData((prv) => ({...prv,[name]:value}));
    }

    const handleFormdataErrorChange = (e: any ) => {
        const {name} = e.currentTarget;
        setFormDataError((prv) => ({...prv,[name]:''}));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const {
            name,
            surname,
            email,
            cellphone,
            subject,
            message
        } = formData();
        if(
            name === '' || 
            surname === '' || 
            email === '' || 
            cellphone === '' || 
            cellphone.length < 10 || 
            subject === '' || 
            subject === 'Select' || 
            message === '')
        {
            if(name === ''){
                setFormDataError((prv) => ({...prv, name: "Name is a required field"}))
            }
            if(surname === ''){
                setFormDataError((prv) => ({...prv, surname: "Surname is a required field"}))
            }
            if(email === ''){
                setFormDataError((prv) => ({...prv, email: "Email is a required field"}))
            }
            if(cellphone === ''){
                setFormDataError((prv) => ({...prv, cellphone: "Cellphone is a required field"}))
            }
            if(cellphone.length < 10){
                setFormDataError((prv) => ({...prv, cellphone: "Cellphone is not a valid number"}))
            }
            if(subject === ''){
                setFormDataError((prv) => ({...prv,subject:"Subject is a required field"}))
            }
            if(subject === 'Select'){
                setFormDataError((prv) => ({...prv,subject:"Subject is a required field"}))
            }
            if(message === ''){
                setFormDataError((prv) => ({...prv,message:"Message is a required field"}))
            }
            return
        }
        setLoading(true);
        alert(JSON.stringify(formData()))
        setTimeout(() => {
            setFormData({
                name: '',
                surname: '',
                email: '',
                cellphone: '',
                subject: '',
                message: '',
            })
            setLoading(false);
        }, 2000);
    }

    return (
        <>
            <div class="w-full scroll-my-10 pt-16 pb-5 bg-gray-50" id="contact">
                <div class="px-3 sm:w-10/12 m-auto">
                    <h3 class="text-5xl sm:text-6xl font-bold text-center">
                        GET INTOUCH WITH US
                    </h3>
                    <div class="w-full py-5">
                        <form
                            onSubmit={handleSubmit} 
                            class="w-full sm:w-4/6 m-auto py-5"
                        >
                            <div class="w-full flex gap-3">
                                <div class="w-full sm:w-1/2">
                                    <p class="py-2 px-1 text-gray-500">
                                        Name
                                    </p>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData().name ? formData().name : ''}
                                        onChange={handleFormdataChange}
                                        onInput={handleFormdataErrorChange}
                                        placeholder={formDataError().name ? formDataError().name :"Name"}
                                        class={`w-full h-10 px-2 border placeholder:text-sky-500 ${formDataError().name ? 'border-red-400 bg-red-50 placeholder:text-red-500' :'border-sky-500 text-sky-600 bg-sky-50'} rounded outline-none`}
                                    />
                                </div>
                                <div class="w-full sm:w-1/2">
                                    <p class="py-2 px-1 text-gray-500">
                                        Surname
                                    </p>
                                    <input
                                        type="text"
                                        name="surname"
                                        value={formData().surname ? formData().surname : ''}
                                        onChange={handleFormdataChange}
                                        onInput={handleFormdataErrorChange}
                                        placeholder={formDataError().surname ? formDataError().surname :"Surname"}
                                        class={`w-full h-10 px-2 border placeholder:text-sky-500 ${formDataError().surname ? 'border-red-400 bg-red-50 placeholder:text-red-500' :'border-sky-500 text-sky-600 bg-sky-50'} rounded outline-none`}
                                    />
                                </div>
                            </div>
                            <div class="w-full flex gap-3">
                                <div class="w-full sm:w-1/2">
                                    <p class="py-2 px-1 text-gray-500">
                                        Email
                                    </p>
                                    <input
                                        type="text"
                                        name="email"
                                        value={formData().email ? formData().email : ''}
                                        onChange={handleFormdataChange}
                                        onInput={handleFormdataErrorChange}
                                        placeholder={formDataError().email ? formDataError().email :"Email"}
                                        class={`w-full h-10 px-2 border placeholder:text-sky-500 ${formDataError().email ? 'border-red-400 bg-red-50 placeholder:text-red-500' :'border-sky-500 text-sky-600 bg-sky-50'} rounded outline-none`}
                                    />
                                </div>
                                <div class="w-full sm:w-1/2">
                                    <p class="py-2 px-1 text-gray-500">
                                        Cellphone
                                    </p>
                                    <input
                                        type="tel"
                                        name="cellphone"
                                        value={formData().cellphone ? formData().cellphone : ''}
                                        onChange={handleFormdataChange}
                                        onInput={handleFormdataErrorChange}
                                        placeholder={formDataError().cellphone ? formDataError().cellphone :"Cellphone"}
                                        class={`w-full h-10 px-2 border placeholder:text-sky-500 ${formDataError().cellphone ? 'border-red-400 bg-red-50 placeholder:text-red-500' :'border-sky-500 text-sky-600 bg-sky-50'} rounded outline-none`}
                                    />
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="py-2 px-1 text-gray-500">
                                    Subject
                                </p>
                                <select
                                    name="subject"
                                    onChange={handleFormdataChange}
                                    onInput={handleFormdataErrorChange}
                                    class={`w-full h-10 px-2 border text-sky-500 ${formDataError().subject ? 'border-red-400 bg-red-50 text-red-500' :'border-sky-500 bg-sky-50'} rounded outline-none`}
                                >
                                    {formData().subject
                                        ?
                                            <>
                                                <option>{formData().subject}</option>
                                                <option>Water sports package</option>
                                                <option>Half day package package</option>
                                                <option>Full day package</option>
                                                <option>General enquiry</option>
                                            </>
                                        :
                                            <>
                                                <option>Select</option>
                                                <option>Water sports package</option>
                                                <option>Half day package package</option>
                                                <option>Full day package</option>
                                                <option>General enquiry</option>
                                            </>
                                    }
                                </select>
                            </div>
                            <div class="w-full">
                                <p class="py-2 px-1 text-gray-500">
                                    Message
                                </p>
                                <textarea 
                                    name="message"
                                    value={formData().message ? formData().message : ''}
                                    onChange={handleFormdataChange}
                                    onInput={handleFormdataErrorChange}
                                    placeholder={formDataError().message ? formDataError().message :"Enter some text"}
                                    class={`w-full border ${formDataError().message ? 'border-red-400 bg-red-50 placeholder:text-red-500' : 'border-sky-500 text-sky-600 bg-sky-50'} rounded p-2 placeholder:text-sky-500 outline-none resize-none h-40`}
                                />
                            </div>
                            <button class="bg-sky-500 text-white w-full h-10 rounded mt-5">
                                {loading() ? <div class="loader m-auto"></div> : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7894.927507767633!2d116.0421292!3d-8.3559558!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2dcdddff49e2d62d%3A0x3807346bd22444f1!2sThe%20Jungle%20Bar%20Gili%20Trawangan%20Tenggara%20Gili%20Indah%2C%20Kec.%20Pemenang%2C%20Kabupaten%20Lombok%20Utara%2C%20Nusa%20Tenggara%20Bar.%2083352%2C%20Indonesia!3m2!1d-8.3559558!2d116.04212919999999!5e0!3m2!1sen!2sza!4v1689969563281!5m2!1sen!2sza" width="100%" height="350" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default Contact;