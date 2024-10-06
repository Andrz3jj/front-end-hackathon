import "../App.css";

const CreatePost = () => {
  return (
    <>
      <div className="bg-slate-800 text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <div className="bg-slate-700 border border-slate-600 rounded p-8 text-center w-full max-w-md mx-auto">
            <span className="text-3xl">Create new post</span><br/><br/>
            <span className="block text-left">Title</span>
            <form>
                <input type="text" 
                className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"/>
                <span className="block text-left mt-4">Description</span>
                <textarea className="bg-slate-600 text-lg p-2 rounded shadow border border-slate-600 w-full focus:outline-none focus:shadow-lg transition"></textarea>
                <input type="submit" value="Create" className="mt-4 text-lg bg-blue-600 rounded p-4 w-full hover:bg-blue-700 transition focus:bg-blue-800"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
