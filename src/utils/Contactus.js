import emailjs from "emailjs-com";
import Swal from "sweetalert2";


export const changeHandler = (e, data, setData, error, setError) => {
    
    var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {name, value} = e.target;
    setData({...data, [name]: value});

    if(name === "restaurantName"){
        if(value === ""){
            setError({...error, restaurantName: "Le champ ne doit pas être vide"});
        }
        else {
            setError({...error, restaurantName: ""});
        }
    }

    else if(name === "code"){
        if(value === ""){
            setError({...error, code: "Le champ ne doit pas être vide"});
        }
        else {
            setError({...error, code: ""});
        }
    }
    else if(name === "ownerName"){
        if(value === ""){
            setError({...error, ownerName: "Le champ ne doit pas être vide"});
        }
        else {
            setError({...error, ownerName: ""});
        }
    }
    else if(name === "phone"){
        if(value === ""){
            setError({...error, phone: "Le champ ne doit pas être vide"});
        }
        else{
            if(value.length >= 15) {
                setError({...error, phone: "Le numéro de téléphone doit comporter moins de 15 caractères"});
            }
            else{
                setError({...error, phone: ""});

            }
        }
    }
    else if(name === "email"){
        if(value === ""){
            setError({...error, email: "Le champ ne doit pas être vide"})
        }
        else{
            if(!value.match(mailFormat)){
                setError({...error, email: "L'email n'est pas valide"})
            }
            else{
                setError({...error, email: ""});
            }
        }
    }
}

const clearInputs = (setData) => {
    setData({restaurantName: "", code: "", ownerName: "", phone: "", email: "" })
  };


 export const submitHandler = (e, data, setData, error, setError, setSpinner) => {
    e.preventDefault();
    var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(data.restaurantName === ""){
        setError({...error, restaurantName: "Le champ ne doit pas être vide"}); 
    }
    else if(data.code === ""){
        setError({...error, code: "Le champ ne doit pas être vide"});
    }
    else if(data.ownerName === ""){
        setError({...error, ownerName: "Le champ ne doit pas être vide"});
    }
    else if(data.phone === ""){
        setError({...error, phone: "Le champ ne doit pas être vide"});
    }
    
    else if(data.phone.length >= 15){
        setError({...error, phone: "Le numéro de téléphone doit comporter moins de 15 caractères"});
    }
    else if(data.email === ""){
        setError({...error, email: "Le champ ne doit pas être vide"});
    }
    else if(!data.email.match(mailFormat)){
        setError({...error, email: "L'email n'est pas valide"})
    }
    else{
        setSpinner(true);
        setError({...error, restaurantName: "", code: "", ownerName: "", phone: "", email: ""})
        sendEmail(e, setData, setSpinner);
       
    }

}

const sendEmail = (e, setData, setSpinner) => {
    const templateId = "template_7frmfz6";
    emailjs
    .sendForm(
      "service_65tzjg3",
      templateId,
      e.target,
      "user_NgcI0r8l0rlaKWDsn2jU0"
    )
    .then(
      (result) => {
        Swal.fire({
            icon: 'success',
            title: 'Formulaire soumis avec succès',
            showConfirmButton: false,
            timer: 2000
          });
          clearInputs(setData);
          setSpinner(false);
        console.log(result.text);
       
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        clearInputs(setData);
        setSpinner(false);
        console.log(error.text);
      }
    );
}
