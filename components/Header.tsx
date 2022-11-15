

function Header() {
  return (
    <header className="fixed pt-2 h-10 w-screen">
        <div className="flex space-x-2 items-center ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
            width={150}
            height={150}
            className="px-5"
            ></img>
            <h1 className="text-white">Home</h1>
            <h1 className="text-white">About</h1>
        </div>
    </header>

  )
}

export default Header