export default function loading() {
  console.log('123456789')
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex justify-center items-center">
          <p>Loading....123</p>
          {console.log('slide123')}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      </div>
    );
  }
  


  