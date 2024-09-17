import React from "react";

const sell = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full self-center max-w-4xl">
      <h1 className="text-3xl text-center font-bold max-w-lg">
        Welcome to the admin of the Website
      </h1>
      <p className="font-medium my-4">An Account is needed to view this page</p>
      <button
        class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        
      >
        Sign in with google
      </button>
    </div>
  );
};

export default sell;
