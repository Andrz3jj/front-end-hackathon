import "../App.css";

const Contact = () => {
  return (
    <>
      <div className="bg-slate-800 text-white min-h-screen">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <div className="bg-slate-700 border border-slate-600 rounded p-8 text-center max-w-md mx-auto">
            <span className="text-3xl">Skontaktuj się z nami</span><br/><br/>
            <span className="flex">Imię i nazwisko</span>
            <input type="text" 
              className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"/>
            <span className="flex mt-4">E-mail</span>
            <input type="text" 
              className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"/>
            <span className="flex mt-4">Telefon kontaktowy</span>
            <input type="text" 
              className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"/>
            <span className="flex mt-4">Wiadomość</span>
            <textarea 
              className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;