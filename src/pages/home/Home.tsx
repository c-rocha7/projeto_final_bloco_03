function Home() {
  return (
    <>
      <div className="bg-cyan-300 flex justify-center">
        <div className="container grid grid-cols-2 text-black">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Aqui você encontra Medicamentos e Cosméticos</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                Cadastrar Produto
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/7aauac/farmacia_react/home.png?updatedAt=1740486766892"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
