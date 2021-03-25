import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Home() {
  const [userMessage, setUserMessage] = useState('Drop me a line.')
    function sendEmail(e) {
        e.preventDefault();
       
        if(e.target.name.value ==''){
            setUserMessage('Better add a value in the name field')
            return false;
        }
        if(e.target.email.value == ''){
            setUserMessage('Better add a value in the email field')
            return false;
        }
        if(e.target.message.value == ''){
            setUserMessage('Better add a value in the message field')
            return false;
        }

        emailjs.sendForm('service_ai3shen', 'template_xf5cfim', e.target, 'user_NzVHH8XcaOSaLyWhK0FwL')
          .then((result) => {
              console.log('What are you looking in here for? Mind your own beeswax!');
              setUserMessage('Thank you, message sent.');
          }, (error) => {
              console.log(error.text);
          });
      }
    

  return (
    <>          
        <Head>
            <title>Rich Leach</title>
        </Head>
        <section className="showcase">
            <div className="container grid">
                <div>
                    <Image src="/images/richLeachSelfie.png" alt="Hi." width={212} height={350} />
                </div>

                <div className="showcase-form card">
                  <h2>{userMessage}</h2>
                  <form onSubmit={sendEmail}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-control">
                        <input type="text" name="name" placeholder="* Name" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="* Email" required />
                    </div>
                    <div className="form-control">
                        <textarea name="message" required placeholder="* Enter your message here.">
                            
                        </textarea>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary" />
                  </form>
                </div>
            </div>
        </section>

        <section className="languages" style={{marginTop: "25px"}}>
          <h2 className="md text-center my-2">
              Good things are coming.
          </h2>
        </section>

    </>
  )
}

export default Home